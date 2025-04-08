// --------------------------
// CONFIGURAÇÃO E VARIÁVEIS GLOBAIS
// --------------------------
let visao = { deslocamentoX: 0, deslocamentoY: 0, escala: 1 };
let membros = [];
let contadorMembros = 1;
const gridSize = 20; // Tamanho do grid para snap-to-grid

// Arrays para rótulos
const ancestorLabels = ["pai", "avô", "bisavô", "trisavô", "tetravô", "pentavô", "hexavô"];
const descendantLabels = ["filho", "neto", "bisneto", "tataraneto"];
const linhaPai = ancestorLabels; // Para identificar o último nível ancestral

// Array para a cadeia "tio-avô"
const tioAvoLabels = [
  "tio-avô",
  "tio-bisavô",
  "tio-trisavô",
  "tio-tetravô",
  "tio-pentavô",
  "tio-hexavô"
];

// --------------------------
// GERAÇÃO DE ID ÚNICO
// --------------------------
function gerarUUID() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11)
    .replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

// --------------------------
// CRIAÇÃO DE MEMBRO
// --------------------------
function criarMembro(x, y, tamanho) {
  return {
    id: gerarUUID(),
    nome: "Novo Membro " + contadorMembros++,
    dataNascimento: null,
    genero: null,
    pais: null,
    grauParentesco: null, // Será definido na criação
    posicaoTela: { x, y, tamanho },
    temDescendente: false,
    conexoes: [],
    criadoEm: new Date().toISOString(),
    atualizadoEm: new Date().toISOString(),
    direcaoCriacao: null // "topo", "baixo", etc.
  };
}

// --------------------------
// SALVAR / CARREGAR ESTADO
// --------------------------
function salvarEstado() {
  const estado = { visao, membros, contadorMembros };
  localStorage.setItem("estadoArvoreFamiliar", JSON.stringify(estado));
}

function carregarEstado() {
  const salvo = localStorage.getItem("estadoArvoreFamiliar");
  if (salvo) {
    const est = JSON.parse(salvo);
    visao = est.visao;
    membros = est.membros;
    contadorMembros = est.contadorMembros;
  } else {
    const inicial = criarMembro(350, 250, 100);
    inicial.id = "00000000-0000-0000-0000-000000000000";
    inicial.nome = "Eu";
    inicial.grauParentesco = "Eu";
    membros.push(inicial);
  }
}

// --------------------------
// FUNÇÕES AUXILIARES (PRIMO)
// --------------------------
function getParent(child) {
  for (const potentialParent of membros) {
    if (potentialParent.id === child.id) continue;
    for (const con of potentialParent.conexoes) {
      if (con.idDestino === child.id && con.direcao === "baixo") {
        return potentialParent;
      }
    }
  }
  return null;
}

function countPrimoAncestors(membro) {
  let count = 0;
  let atual = getParent(membro);
  while (atual) {
    if (atual.grauParentesco && atual.grauParentesco.toLowerCase() === "primo") {
      count++;
    }
    atual = getParent(atual);
  }
  return count;
}

// --------------------------
// FUNÇÕES PARA DEFINIÇÃO DO PRÓXIMO GRAU
// --------------------------
function getNextAncestorLabel(currentLabel) {
  const index = ancestorLabels.indexOf(currentLabel.toLowerCase());
  if (index === -1) return ancestorLabels[0];
  if (index < ancestorLabels.length - 1) return ancestorLabels[index + 1];
  return `avô (nível ${index + 1})`;
}

function getNextTioAvoLabel(currentLabel) {
  const labelNormalizada = currentLabel.toLowerCase().replace(/\s+/g, '-');
  const index = tioAvoLabels.indexOf(labelNormalizada);
  if (index === -1) {
    return tioAvoLabels[0];
  }
  if (index < tioAvoLabels.length - 1) return tioAvoLabels[index + 1];
  return `tio-avô (nível ${index + 1})`;
}

function getNextDescendantLabel(currentLabel) {
  const index = descendantLabels.indexOf(currentLabel.toLowerCase());
  if (index === -1) return descendantLabels[0];
  if (index < descendantLabels.length - 1) return descendantLabels[index + 1];
  return `filho (nível ${index + 1})`;
}

function obterParentescoAutomatico(membroOrigem, direcao) {
  const pk = (membroOrigem.grauParentesco || "Eu").toLowerCase();
  if (direcao === "topo") {
    if (pk.startsWith("tio")) {
      return getNextTioAvoLabel(pk);
    }
    if (pk === "primo") return "tio";
    if (pk === "irmao") return "irmao";
    if (pk === "eu") return ancestorLabels[0];
    return getNextAncestorLabel(pk);
  } else if (direcao === "baixo") {
    if (pk === "sobrinho") return "neto";
    if (pk === "irmao") return "sobrinho";
    if (pk === "primo") return "primo";
    if (!descendantLabels.includes(pk)) {
      return descendantLabels[0];
    }
    return getNextDescendantLabel(pk);
  } else if (direcao === "esquerda") {
    if (pk === "eu" || pk === "irmao") return "irmao";
    return "tio";
  } else if (direcao === "direita") {
    if (pk === "eu" || pk === "primo") return "primo";
    return "tio";
  }
  return "outro";
}

// --------------------------
// MODAL – ELEMENTOS E CONTROLE
// --------------------------
const modalAdicionar = document.getElementById("modal-adicionar");
const modalAdicionarFechar = document.getElementById("modal-adicionar-fechar");
const entradaNome = document.getElementById("entradaNome");
const entradaNascimento = document.getElementById("entradaNascimento");
const entradaGenero = document.getElementById("entradaGenero");
const entradaPais = document.getElementById("entradaPais");
const entradaParentesco = document.getElementById("entradaParentesco");
const botaoAdicionarSalvar = document.getElementById("botaoAdicionarSalvar");
const botaoAdicionarCancelar = document.getElementById("botaoAdicionarCancelar");

modalAdicionarFechar.onclick = fecharModalAdicionar;
botaoAdicionarSalvar.onclick = confirmarAdicionarMembro;
botaoAdicionarCancelar.onclick = fecharModalAdicionar;

let membroPendente = null;
let direcaoPendente = null;

// --------------------------
// MOSTRAR MODAL PARA ADICIONAR
// --------------------------
function mostrarModalAdicionar(membroOrigem, direcao) {
  // Se já existe algo conectado acima (exceto "Eu"), não abre novo modal
  if (
    direcao === "topo" &&
    membroOrigem.grauParentesco.toLowerCase() !== "eu" &&
    jaTemConexaoAcima(membroOrigem)
  ) {
    return;
  }

  membroPendente = membroOrigem;
  direcaoPendente = direcao;
  entradaNome.value = "";
  entradaNascimento.value = "";
  entradaGenero.value = "Masculino";
  entradaPais.value = "Brasil";
  entradaParentesco.innerHTML = "";

  if (direcao === "topo") {
    // Bloco para "tio-trisavô"
    if (
      membroOrigem.grauParentesco.toLowerCase() === "tio-trisavô" ||
      membroOrigem.grauParentesco.toLowerCase() === "tio trisavô"
    ) {
      let ops = [];
      // 1) Conectar com tetravô, se existir
      const tetravosExistentes = membros.filter(m =>
        m.grauParentesco &&
        m.grauParentesco.toLowerCase() === "tetravô" &&
        !m.somenteLink
      );
      tetravosExistentes.forEach(tv => {
        if (!membroOrigem.conexoes.some(c => c.idDestino === tv.id)) {
          ops.push({
            value: "conectar-tetravô-" + tv.id,
            label: "Conectar com tetravô - " + tv.nome
          });
        }
      });
      // 2) Conectar com tio-tetravô, se existir
      const tioTetravosExistentes = membros.filter(m =>
        m.grauParentesco &&
        m.grauParentesco.toLowerCase().replace(/\s+/g, '-') === "tio-tetravô" &&
        !m.somenteLink
      );
      tioTetravosExistentes.forEach(ttv => {
        if (!membroOrigem.conexoes.some(c => c.idDestino === ttv.id)) {
          ops.push({
            value: "conectar-tio-tetravô-" + ttv.id,
            label: "Conectar com tio-tetravô - " + ttv.nome
          });
        }
      });

      // Conectar com pentavô ou tio-pentavô, se existirem
      const pentavosExistentes = membros.filter(m =>
        m.grauParentesco &&
        m.grauParentesco.toLowerCase() === "pentavô" &&
        !m.somenteLink
      );
      const tioPentavosExistentes = membros.filter(m =>
        m.grauParentesco &&
        m.grauParentesco.toLowerCase().replace(/\s+/g, '-') === "tio-pentavô" &&
        !m.somenteLink
      );
      if (pentavosExistentes.length > 0) {
        pentavosExistentes.forEach(pv => {
          if (!membroOrigem.conexoes.some(c => c.idDestino === pv.id)) {
            ops.push({
              value: "conectar-pentavô-" + pv.id,
              label: "Conectar com pentavô - " + pv.nome
            });
          }
        });
      }
      if (tioPentavosExistentes.length > 0) {
        tioPentavosExistentes.forEach(tp => {
          if (!membroOrigem.conexoes.some(c => c.idDestino === tp.id)) {
            ops.push({
              value: "conectar-tio-pentavô-" + tp.id,
              label: "Conectar com tio-pentavô - " + tp.nome
            });
          }
        });
      }

      // Se nenhuma opção de conexão foi adicionada, sempre adicionar a opção de criar novo tio-pentavô
      ops.push({ value: "criar-tio-tetravô", label: "Criar novo tio-tetravô" });

      ops.forEach(({ value, label }) => {
        const opt = document.createElement("option");
        opt.value = value;
        opt.textContent = label;
        entradaParentesco.appendChild(opt);
      });
      entradaParentesco.disabled = false;
      modalAdicionar.style.display = "block";
      return;
    }

    // Bloco para "tio-avô"
    if (membroOrigem.grauParentesco.toLowerCase() === "tio-avô") {
      let ops = [];
      const bisavosExistentes = membros.filter(m =>
        m.grauParentesco &&
        m.grauParentesco.toLowerCase() === "bisavô" &&
        !m.somenteLink
      );
      bisavosExistentes.forEach(bv => {
        if (!membroOrigem.conexoes.some(c => c.idDestino === bv.id)) {
          ops.push({
            value: "conectar-bisavô-" + bv.id,
            label: "Conectar com bisavô - " + bv.nome
          });
        }
      });
      const tioBisavosExistentes = membros.filter(m =>
        m.grauParentesco &&
        m.grauParentesco.toLowerCase().replace(/\s+/g, '-') === "tio-bisavô" &&
        !m.somenteLink
      );
      tioBisavosExistentes.forEach(tb => {
        if (!membroOrigem.conexoes.some(c => c.idDestino === tb.id)) {
          ops.push({
            value: "conectar-tio-bisavô-" + tb.id,
            label: "Conectar com tio bisavô - " + tb.nome
          });
        }
      });
      ops.push({ value: "criar-tio-bisavô", label: "Criar novo tio bisavô" });
      ops.forEach(({ value, label }) => {
        const opt = document.createElement("option");
        opt.value = value;
        opt.textContent = label;
        entradaParentesco.appendChild(opt);
      });
      entradaParentesco.disabled = false;
      modalAdicionar.style.display = "block";
      return;
    }

    // -------------------------------------------------------
    //  BLOCO PARA "TIO BISAVÔ" - ATUALIZADO
    // -------------------------------------------------------
    else if (
      membroOrigem.grauParentesco.toLowerCase() === "tio bisavô" ||
      membroOrigem.grauParentesco.toLowerCase() === "tio-bisavô"
    ) {
      let ops = [];

      // 1) Conectar com TIO-TRISAVÔ existente
      const tioTrisavosExistentes = membros.filter(m =>
        m.grauParentesco &&
        m.grauParentesco.toLowerCase().replace(/\s+/g, '-') === "tio-trisavô" &&
        !m.somenteLink
      );
      tioTrisavosExistentes.forEach(ttr => {
        if (!membroOrigem.conexoes.some(c => c.idDestino === ttr.id)) {
          ops.push({
            value: "conectar-tio-trisavô-" + ttr.id,
            label: "Conectar com tio-trisavô - " + ttr.nome
          });
        }
      });

      // 2) Conectar com TRISAVÔ existente
      const trisavosExistentes = membros.filter(m =>
        m.grauParentesco &&
        m.grauParentesco.toLowerCase() === "trisavô" &&
        !m.somenteLink
      );
      trisavosExistentes.forEach(ts => {
        if (!membroOrigem.conexoes.some(c => c.idDestino === ts.id)) {
          ops.push({
            value: "conectar-trisavô-" + ts.id,
            label: "Conectar com trisavô - " + ts.nome
          });
        }
      });

      // 3) Conectar com TIO-TETRAVÔ existente
      const tioTetravosExistentes = membros.filter(m =>
        m.grauParentesco &&
        m.grauParentesco.toLowerCase().replace(/\s+/g, '-') === "tio-tetravô" &&
        !m.somenteLink
      );
      tioTetravosExistentes.forEach(tt => {
        if (!membroOrigem.conexoes.some(c => c.idDestino === tt.id)) {
          ops.push({
            value: "conectar-tio-tetravô-" + tt.id,
            label: "Conectar com tio-tetravô - " + tt.nome
          });
        }
      });
      
      // 4) Criar novo TIO-TRISAVÔ
      ops.push({ value: "criar-tio-trisavô", label: "Criar novo tio-trisavô" });

      ops.forEach(({ value, label }) => {
        const opt = document.createElement("option");
        opt.value = value;
        opt.textContent = label;
        entradaParentesco.appendChild(opt);
      });

      entradaParentesco.disabled = false;
      modalAdicionar.style.display = "block";
      return;
    }

    else if (membroOrigem.grauParentesco.toLowerCase() === "trisavô") {
      let ops = [];
      const tetravosExistentes = membros.filter(m =>
        m.grauParentesco &&
        m.grauParentesco.toLowerCase() === "tetravô" &&
        !m.somenteLink
      );
      tetravosExistentes.forEach(tv => {
        if (!membroOrigem.conexoes.some(c => c.idDestino === tv.id)) {
          ops.push({
            value: "conectar-tetravô-" + tv.id,
            label: "Conectar com tetravô - " + tv.nome
          });
        }
      });
      const tioTetravosExistentes = membros.filter(m =>
        m.grauParentesco &&
        m.grauParentesco.toLowerCase().replace(/\s+/g, '-') === "tio-tetravô" &&
        !m.somenteLink
      );
      tioTetravosExistentes.forEach(ttv => {
        if (!membroOrigem.conexoes.some(c => c.idDestino === ttv.id)) {
          ops.push({
            value: "conectar-tio-tetravô-" + ttv.id,
            label: "Conectar com tio-tetravô - " + ttv.nome
          });
        }
      });
      ops.push({ value: "criar-tetravô", label: "Criar novo tetravô" });
      ops.push({ value: "criar-tio-tetravô", label: "Criar novo tio-tetravô" });
      ops.forEach(({ value, label }) => {
        const opt = document.createElement("option");
        opt.value = value;
        opt.textContent = label;
        entradaParentesco.appendChild(opt);
      });
      entradaParentesco.disabled = false;
      modalAdicionar.style.display = "block";
      return;
    } else if (
      membroOrigem.grauParentesco.toLowerCase() === "tio-tetravô" ||
      membroOrigem.grauParentesco.toLowerCase() === "tio tetravô"
    ) {
      let ops = [];
      // Opção 1: Conectar com pentavô, se existir
      const pentavosExistentes = membros.filter(m =>
        m.grauParentesco &&
        m.grauParentesco.toLowerCase() === "pentavô" &&
        !m.somenteLink
      );
      pentavosExistentes.forEach(pv => {
        if (!membroOrigem.conexoes.some(c => c.idDestino === pv.id)) {
          ops.push({
            value: "conectar-pentavô-" + pv.id,
            label: "Conectar com pentavô - " + pv.nome
          });
        }
      });
      // Opção 2: Conectar com tio-pentavô, se existir
      const tioPentavosExistentes = membros.filter(m =>
        m.grauParentesco &&
        m.grauParentesco.toLowerCase().replace(/\s+/g, '-') === "tio-pentavô" &&
        !m.somenteLink
      );
      tioPentavosExistentes.forEach(tp => {
        if (!membroOrigem.conexoes.some(c => c.idDestino === tp.id)) {
          ops.push({
            value: "conectar-tio-pentavô-" + tp.id,
            label: "Conectar com tio-pentavô - " + tp.nome
          });
        }
      });
      // Sempre adicionar a opção de criar
      ops.push({ value: "criar-tio-pentavô", label: "Criar novo tio-pentavô" });

      ops.forEach(({ value, label }) => {
        const opt = document.createElement("option");
        opt.value = value;
        opt.textContent = label;
        entradaParentesco.appendChild(opt);
      });
      entradaParentesco.disabled = false;
      modalAdicionar.style.display = "block";
      return;
    } else if (membroOrigem.grauParentesco.toLowerCase() === "tio") {
      let ops = [];
      const avoExistentes = membros.filter(m =>
        m.grauParentesco &&
        m.grauParentesco.toLowerCase() === "avô" &&
        !m.somenteLink
      );
      avoExistentes.forEach(avo => {
        if (!membroOrigem.conexoes.some(c => c.idDestino === avo.id)) {
          ops.push({
            value: "conectar-avô-" + avo.id,
            label: "Conectar com avô - " + avo.nome
          });
        }
      });
      const tiosAvoExistentes = membros.filter(m =>
        m.grauParentesco &&
        m.grauParentesco.toLowerCase() === "tio-avô" &&
        !m.somenteLink
      );
      tiosAvoExistentes.forEach(ta => {
        if (!membroOrigem.conexoes.some(c => c.idDestino === ta.id)) {
          ops.push({
            value: "conectar-tioavô-" + ta.id,
            label: "Conectar com tio-avô - " + ta.nome
          });
        }
      });
      ops.push({ value: "criar-tioavô", label: "Criar novo tio-avô" });
      ops.forEach(({ value, label }) => {
        const opt = document.createElement("option");
        opt.value = value;
        opt.textContent = label;
        entradaParentesco.appendChild(opt);
      });
      entradaParentesco.disabled = false;
      modalAdicionar.style.display = "block";
      return;
    } else if (membroOrigem.grauParentesco.toLowerCase() === "primo") {
      let ops = [];
      const tiosExistentes = membros.filter(m =>
        m.grauParentesco &&
        m.grauParentesco.toLowerCase() === "tio" &&
        !m.somenteLink
      );
      tiosExistentes.forEach(tio => {
        if (!membroOrigem.conexoes.some(c => c.idDestino === tio.id)) {
          ops.push({
            value: "conectar-tio-" + tio.id,
            label: "Conectar com tio - " + tio.nome
          });
        }
      });
      ops.push({ value: "criar-tio", label: "Criar novo tio" });
      ops.forEach(({ value, label }) => {
        const opt = document.createElement("option");
        opt.value = value;
        opt.textContent = label;
        entradaParentesco.appendChild(opt);
      });
      entradaParentesco.disabled = false;
      modalAdicionar.style.display = "block";
      return;
    }
  }

  // Se não se enquadrar em nenhum dos casos específicos, usa o parentesco automático
  const parentescoAuto = obterParentescoAutomatico(membroOrigem, direcao);
  const opt = document.createElement("option");
  opt.value = parentescoAuto;
  opt.textContent = parentescoAuto;
  entradaParentesco.appendChild(opt);
  entradaParentesco.disabled =
    membroOrigem.grauParentesco.toLowerCase() === "eu" ? false : true;
  modalAdicionar.style.display = "block";
}

// --------------------------
// FECHAR MODAL
// --------------------------
function fecharModalAdicionar() {
  modalAdicionar.style.display = "none";
  membroPendente = null;
  direcaoPendente = null;
}

// --------------------------
// CONFIRMAR ADIÇÃO DE MEMBRO
// --------------------------
function confirmarAdicionarMembro() {
  if (!membroPendente || !direcaoPendente) {
    fecharModalAdicionar();
    return;
  }
  const valorSelecionado = entradaParentesco.value;

  // Verifica as novas condições de conexão para "pentavô" e "tio-pentavô"
  if (valorSelecionado.startsWith("conectar-pentavô-")) {
    const idPentavo = valorSelecionado.replace("conectar-pentavô-", "");
    const pentavoExistente = membros.find(m => m.id === idPentavo);
    if (pentavoExistente) {
      membroPendente.conexoes.push({
        idDestino: pentavoExistente.id,
        direcao: direcaoPendente,
        tipoLink: "pentavô",
        somenteLink: false
      });
    }
    fecharModalAdicionar();
    desenharTudo();
    salvarEstado();
    return;
  }

  if (valorSelecionado.startsWith("conectar-tio-pentavô-")) {
    const idTioPentavo = valorSelecionado.replace("conectar-tio-pentavô-", "");
    const tioPentavoExistente = membros.find(m => m.id === idTioPentavo);
    if (tioPentavoExistente) {
      membroPendente.conexoes.push({
        idDestino: tioPentavoExistente.id,
        direcao: direcaoPendente,
        tipoLink: "tio-pentavô",
        somenteLink: false
      });
    }
    fecharModalAdicionar();
    desenharTudo();
    salvarEstado();
    return;
  }

  // Blocos originais
  if (valorSelecionado.startsWith("conectar-tetravô-")) {
    const idTetravo = valorSelecionado.replace("conectar-tetravô-", "");
    const tetravoExistente = membros.find(m => m.id === idTetravo);
    if (tetravoExistente) {
      membroPendente.conexoes.push({
        idDestino: tetravoExistente.id,
        direcao: direcaoPendente,
        tipoLink: "tetravô",
        somenteLink: false
      });
    }
    fecharModalAdicionar();
    desenharTudo();
    salvarEstado();
    return;
  }

  if (valorSelecionado.startsWith("conectar-tio-tetravô-")) {
    const idTioTetravo = valorSelecionado.replace("conectar-tio-tetravô-", "");
    const tioTetravoExistente = membros.find(m => m.id === idTioTetravo);
    if (tioTetravoExistente) {
      membroPendente.conexoes.push({
        idDestino: tioTetravoExistente.id,
        direcao: direcaoPendente,
        tipoLink: "tio-tetravô",
        somenteLink: false
      });
    }
    fecharModalAdicionar();
    desenharTudo();
    salvarEstado();
    return;
  }

  if (valorSelecionado.startsWith("conectar-avô-")) {
    const idAvo = valorSelecionado.replace("conectar-avô-", "");
    const avoExistente = membros.find(m => m.id === idAvo);
    if (avoExistente) {
      membroPendente.conexoes.push({
        idDestino: avoExistente.id,
        direcao: direcaoPendente,
        tipoLink: "avô",
        somenteLink: false
      });
    }
    fecharModalAdicionar();
    desenharTudo();
    salvarEstado();
    return;
  }

  if (valorSelecionado.startsWith("conectar-tio-bisavô-")) {
    const idTioBisavô = valorSelecionado.replace("conectar-tio-bisavô-", "");
    const tioBisavôExistente = membros.find(m => m.id === idTioBisavô);
    if (tioBisavôExistente) {
      membroPendente.conexoes.push({
        idDestino: tioBisavôExistente.id,
        direcao: direcaoPendente,
        tipoLink: "tio bisavô",
        somenteLink: false
      });
    }
    fecharModalAdicionar();
    desenharTudo();
    salvarEstado();
    return;
  }

  if (valorSelecionado.startsWith("conectar-tio-trisavô-")) {
    const idTioTrisavo = valorSelecionado.replace("conectar-tio-trisavô-", "");
    const tioTrisavoExistente = membros.find(m => m.id === idTioTrisavo);
    if (tioTrisavoExistente) {
      membroPendente.conexoes.push({
        idDestino: tioTrisavoExistente.id,
        direcao: direcaoPendente,
        tipoLink: "tio-trisavô",
        somenteLink: false
      });
    }
    fecharModalAdicionar();
    desenharTudo();
    salvarEstado();
    return;
  }

  if (valorSelecionado.startsWith("conectar-trisavô-")) {
    const idTrisavo = valorSelecionado.replace("conectar-trisavô-", "");
    const trisavoExistente = membros.find(m => m.id === idTrisavo);
    if (trisavoExistente) {
      membroPendente.conexoes.push({
        idDestino: trisavoExistente.id,
        direcao: direcaoPendente,
        tipoLink: "trisavô",
        somenteLink: false
      });
    }
    fecharModalAdicionar();
    desenharTudo();
    salvarEstado();
    return;
  }

  if (valorSelecionado.startsWith("conectar-tioavô-")) {
    const idTioAvô = valorSelecionado.replace("conectar-tioavô-", "");
    const tioAvôExistente = membros.find(m => m.id === idTioAvô);
    if (tioAvôExistente) {
      membroPendente.conexoes.push({
        idDestino: tioAvôExistente.id,
        direcao: direcaoPendente,
        tipoLink: "tio-avô",
        somenteLink: false
      });
    }
    fecharModalAdicionar();
    desenharTudo();
    salvarEstado();
    return;
  }

  if (valorSelecionado.startsWith("conectar-bisavô-")) {
    const idBisavô = valorSelecionado.replace("conectar-bisavô-", "");
    const bisavôExistente = membros.find(m => m.id === idBisavô);
    if (bisavôExistente) {
      membroPendente.conexoes.push({
        idDestino: bisavôExistente.id,
        direcao: direcaoPendente,
        tipoLink: "bisavô",
        somenteLink: false
      });
    }
    fecharModalAdicionar();
    desenharTudo();
    salvarEstado();
    return;
  }

  if (valorSelecionado.startsWith("conectar-tio-")) {
    const idTio = valorSelecionado.replace("conectar-tio-", "");
    const tioExistente = membros.find(m => m.id === idTio);
    if (tioExistente) {
      membroPendente.conexoes.push({
        idDestino: tioExistente.id,
        direcao: direcaoPendente,
        tipoLink: "tio",
        somenteLink: false
      });
    }
    fecharModalAdicionar();
    desenharTudo();
    salvarEstado();
    return;
  }

  // Criação de novos membros
  if (valorSelecionado === "criar-tio-tetravô") {
    criarEConectar("tio-tetravô");
    return;
  }
  if (valorSelecionado === "criar-tio-pentavô") {
    criarEConectar("tio-pentavô");
    return;
  }
  if (valorSelecionado === "criar-tio-bisavô") {
    criarEConectar("tio bisavô");
    return;
  }
  if (valorSelecionado === "criar-tio-trisavô") {
    criarEConectar("tio-trisavô");
    return;
  }
  if (valorSelecionado === "criar-tetravô") {
    criarEConectar("tetravô");
    return;
  }
  if (valorSelecionado === "criar-tioavô") {
    criarEConectar("tio-avô");
    return;
  }
  if (valorSelecionado === "criar-tio") {
    criarEConectar("tio");
    return;
  }

  // Se não cair em nenhum dos casos, usa o valor selecionado
  criarEConectar(valorSelecionado);

  function criarEConectar(tipo) {
    const posOrigem = membroPendente.posicaoTela;
    let { x, y, tamanho: t } = posOrigem;

    if (direcaoPendente === "topo") y = posOrigem.y - t;
    if (direcaoPendente === "baixo") y = posOrigem.y + t;
    if (direcaoPendente === "esquerda") x = posOrigem.x - t;
    if (direcaoPendente === "direita") x = posOrigem.x + t;

    const novoMembro = criarMembro(x, y, t);
    novoMembro.direcaoCriacao = direcaoPendente;
    novoMembro.nome = entradaNome.value || "Membro " + contadorMembros;
    novoMembro.grauParentesco = tipo;
    membros.push(novoMembro);

    membroPendente.conexoes.push({
      idDestino: novoMembro.id,
      direcao: direcaoPendente,
      tipoLink: tipo,
      somenteLink: false
    });

    if (tipo.toLowerCase() === "irmao") {
      const conexaoPaiMae = membroPendente.conexoes.find(
        con =>
          con.direcao === "topo" &&
          (con.tipoLink.toLowerCase() === "pai" ||
            con.tipoLink.toLowerCase() === "mae")
      );
      if (conexaoPaiMae) {
        novoMembro.conexoes.push({
          idDestino: conexaoPaiMae.idDestino,
          direcao: "topo",
          tipoLink: conexaoPaiMae.tipoLink,
          somenteLink: false
        });
      }
    }
    if (tipo.toLowerCase() === "pai" || tipo.toLowerCase() === "mae") {
      membros.forEach(m => {
        if (
          m.id !== membroPendente.id &&
          m.grauParentesco &&
          m.grauParentesco.toLowerCase() === "irmao"
        ) {
          const jaConectado = m.conexoes.some(
            con => con.direcao === "topo" && con.idDestino === novoMembro.id
          );
          if (!jaConectado) {
            m.conexoes.push({
              idDestino: novoMembro.id,
              direcao: "topo",
              tipoLink: tipo.toLowerCase(),
              somenteLink: false
            });
          }
        }
      });
    }
    if (membroPendente.grauParentesco.toLowerCase() !== "primo") {
      membroPendente.temDescendente = true;
    }
    fecharModalAdicionar();
    desenharTudo();
    salvarEstado();
  }
}

// --------------------------
// DESENHO DA ÁRVORE
// --------------------------
const elementoCanvas = document.getElementById("meuCanvas");
const contexto = elementoCanvas.getContext("2d");

function desenharTudo() {
  contexto.clearRect(0, 0, elementoCanvas.width, elementoCanvas.height);
  contexto.save();
  contexto.translate(visao.deslocamentoX, visao.deslocamentoY);
  contexto.scale(visao.escala, visao.escala);
  desenharGrade();
  desenharConexoes();
  desenharMembros();
  contexto.restore();
}

function desenharGrade() {
  const tamanhoGrade = gridSize;
  contexto.strokeStyle = "#ccc";
  contexto.lineWidth = 0.5 / visao.escala;

  let esquerda = -visao.deslocamentoX / visao.escala;
  let topo = -visao.deslocamentoY / visao.escala;
  let direita = esquerda + elementoCanvas.width / visao.escala;
  let base = topo + elementoCanvas.height / visao.escala;

  let inicioX = Math.floor(esquerda / tamanhoGrade) * tamanhoGrade;
  let inicioY = Math.floor(topo / tamanhoGrade) * tamanhoGrade;

  for (let x = inicioX; x <= direita; x += tamanhoGrade) {
    contexto.beginPath();
    contexto.moveTo(x, topo);
    contexto.lineTo(x, base);
    contexto.stroke();
  }
  for (let y = inicioY; y <= base; y += tamanhoGrade) {
    contexto.beginPath();
    contexto.moveTo(esquerda, y);
    contexto.lineTo(direita, y);
    contexto.stroke();
  }
}

function desenharConexoes() {
  contexto.strokeStyle = "blue";
  contexto.lineWidth = 2 / visao.escala;

  membros.forEach(membro => {
    if (membro.somenteLink) return;
    const posM = membro.posicaoTela;

    membro.conexoes.forEach(con => {
      if (con.tipoLink.toLowerCase() === "irmao") return;
      const destino = membros.find(x => x.id === con.idDestino);
      if (!destino) return;

      // Evita linhas redundantes em certos casos
      if (
        (membro.grauParentesco.toLowerCase() === "eu" ||
          destino.grauParentesco.toLowerCase() === "eu") &&
        (con.tipoLink.toLowerCase() === "primo" ||
          con.tipoLink.toLowerCase() === "irmao")
      ) {
        return;
      }

      const posD = destino.posicaoTela;
      let inicioX, inicioY, fimX, fimY;

      if (con.direcao === "topo") {
        inicioX = posM.x + posM.tamanho / 2;
        inicioY = posM.y;
        fimX = posD.x + posD.tamanho / 2;
        fimY = posD.y + posD.tamanho;
      } else if (con.direcao === "baixo") {
        inicioX = posM.x + posM.tamanho / 2;
        inicioY = posM.y + posM.tamanho;
        fimX = posD.x + posD.tamanho / 2;
        fimY = posD.y;
      } else if (con.direcao === "esquerda") {
        inicioX = posM.x;
        inicioY = posM.y + posM.tamanho / 2;
        fimX = posD.x + posD.tamanho;
        fimY = posD.y + posD.tamanho / 2;
      } else if (con.direcao === "direita") {
        inicioX = posM.x + posM.tamanho;
        inicioY = posM.y + posM.tamanho / 2;
        fimX = posD.x;
        fimY = posD.y + posD.tamanho / 2;
      } else {
        inicioX = posM.x + posM.tamanho / 2;
        inicioY = posM.y + posM.tamanho / 2;
        fimX = posD.x + posD.tamanho / 2;
        fimY = posD.y + posD.tamanho / 2;
      }

      contexto.beginPath();
      contexto.moveTo(inicioX, inicioY);
      contexto.lineTo(fimX, fimY);
      contexto.stroke();
    });
  });
}

const distanciaDeslocamento = 20;
function desenharMais(cx, cy) {
  contexto.save();
  contexto.fillStyle = "rgba(255, 0, 0, 0.3)";
  contexto.beginPath();
  contexto.arc(cx, cy, 15, 0, 2 * Math.PI);
  contexto.fill();

  contexto.strokeStyle = "black";
  contexto.lineWidth = 3;
  const r = 10;

  contexto.beginPath();
  contexto.moveTo(cx, cy - r);
  contexto.lineTo(cx, cy + r);
  contexto.stroke();
  contexto.beginPath();
  contexto.moveTo(cx - r, cy);
  contexto.lineTo(cx + r, cy);
  contexto.stroke();

  contexto.restore();
}

function desenharMembros() {
  membros.forEach(membro => {
    if (membro.somenteLink) return;

    const pos = membro.posicaoTela;
    contexto.fillStyle = "#4CAF50";
    contexto.fillRect(pos.x, pos.y, pos.tamanho, pos.tamanho);
    const metade = pos.tamanho / 2;
    const grau = membro.grauParentesco ? membro.grauParentesco.toLowerCase() : "";

    // Desenha o sinal de "+" superior
    if (
      (grau === "eu" &&
        !membro.conexoes.some(con => {
          const tipo = con.tipoLink.toLowerCase();
          return tipo === "pai" || tipo === "mae";
        })) ||
      ((grau === "primo" ? countPrimoAncestors(membro) === 0 : true) &&
        grau !== "irmao" &&
        grau !== "sobrinho" &&
        grau !== "neto" &&
        grau !== "filho" &&
        !membro.conexoes.some(con => con.direcao === "topo") &&
        grau !== linhaPai[linhaPai.length - 1])
    ) {
      desenharMais(pos.x + metade, pos.y - distanciaDeslocamento);
    }

    // Desenha o sinal de "+" inferior
    let exibeSinalInferior = true;
    if (membro.direcaoCriacao && membro.direcaoCriacao === "topo") {
      exibeSinalInferior = false;
    }
    if (grau === "neto") {
      exibeSinalInferior = false;
    } else if (grau === "primo") {
      const numPrimoAncestors = countPrimoAncestors(membro);
      if (numPrimoAncestors >= 2) {
        exibeSinalInferior = false;
      } else {
        desenharMais(pos.x + metade, pos.y + pos.tamanho + distanciaDeslocamento + 5);
      }
    } else {
      if (exibeSinalInferior) {
        desenharMais(pos.x + metade, pos.y + pos.tamanho + distanciaDeslocamento);
      }
    }

    // Desenha sinais laterais se for "Eu"
    if (grau === "eu") {
      desenharMais(pos.x - distanciaDeslocamento, pos.y + pos.tamanho / 2);
      desenharMais(pos.x + pos.tamanho + distanciaDeslocamento, pos.y + pos.tamanho / 2);
    }

    desenharTextoMembro(membro);
  });
}

function desenharTextoMembro(membro) {
  const pos = membro.posicaoTela;
  contexto.fillStyle = "white";
  contexto.font = `bold ${12 / visao.escala}px Arial`;
  contexto.fillText("editar", pos.x + pos.tamanho - 50, pos.y + pos.tamanho - 5);

  contexto.fillStyle = "black";
  contexto.font = `${12 / visao.escala}px Arial`;
  contexto.textAlign = "center";
  contexto.textBaseline = "top";
  contexto.fillText(membro.grauParentesco || "", pos.x + pos.tamanho / 2, pos.y + 2);

  contexto.font = `${14 / visao.escala}px Arial`;
  contexto.textBaseline = "middle";
  contexto.fillText(membro.nome, pos.x + pos.tamanho / 2, pos.y + pos.tamanho / 2);
}

// --------------------------
// EVENTOS DE ARRASTE E ZOOM
// --------------------------
let membroArrastando = null;
let deslocamentoArraste = { x: 0, y: 0 };
let arrastandoGrade = false;
let inicioArrasteGrade = { x: 0, y: 0 };
let deslocamentoInicialVisao = { deslocamentoX: 0, deslocamentoY: 0 };

elementoCanvas.addEventListener("wheel", e => {
  e.preventDefault();
  const mx = e.offsetX,
    my = e.offsetY;
  const antes = obterCoordenadasMundo(mx, my);
  if (e.deltaY < 0) {
    visao.escala *= 1.1;
  } else {
    visao.escala /= 1.1;
  }
  visao.deslocamentoX = mx - antes.x * visao.escala;
  visao.deslocamentoY = my - antes.y * visao.escala;
  desenharTudo();
  salvarEstado();
});

elementoCanvas.addEventListener("mousedown", tratarInicio);
elementoCanvas.addEventListener("touchstart", tratarInicio);
elementoCanvas.addEventListener("mousemove", tratarMovimento);
elementoCanvas.addEventListener("touchmove", tratarMovimento);
elementoCanvas.addEventListener("mouseup", tratarFim);
elementoCanvas.addEventListener("touchend", tratarFim);
elementoCanvas.addEventListener("touchcancel", tratarFim);

function obterCoordenadasPonteiro(e) {
  const retangulo = elementoCanvas.getBoundingClientRect();
  if (e.touches && e.touches.length > 0) {
    return {
      x: e.touches[0].clientX - retangulo.left,
      y: e.touches[0].clientY - retangulo.top
    };
  }
  return { x: e.offsetX, y: e.offsetY };
}

function obterCoordenadasMundo(mx, my) {
  return {
    x: (mx - visao.deslocamentoX) / visao.escala,
    y: (my - visao.deslocamentoY) / visao.escala
  };
}

function tratarInicio(e) {
  e.preventDefault();
  const ponteiro = obterCoordenadasPonteiro(e);
  const posMundo = obterCoordenadasMundo(ponteiro.x, ponteiro.y);
  const mx = posMundo.x,
    my = posMundo.y;

  // Verifica se clicou em algum membro
  for (let i = membros.length - 1; i >= 0; i--) {
    const membro = membros[i];
    if (membro.somenteLink) continue;
    const pos = membro.posicaoTela;
    if (pontoDentroRetangulo(mx, my, pos.x, pos.y, pos.tamanho, pos.tamanho)) {
      membroArrastando = membro;
      deslocamentoArraste.x = mx - pos.x;
      deslocamentoArraste.y = my - pos.y;
      return;
    }
  }

  // Verifica se clicou no sinal de "+"
  for (let membro of membros) {
    if (membro.somenteLink) continue;
    const pos = membro.posicaoTela;
    const metade = pos.tamanho / 2;

    // Impede de adicionar acima se já for tetravô (último da lista) ou nível customizado
    if (membro.grauParentesco.toLowerCase() === linhaPai[linhaPai.length - 1]) continue;

    // Clique no "+" superior
    if (clicouNoMais(mx, my, pos.x + metade, pos.y - distanciaDeslocamento)) {
      if (membro.grauParentesco.toLowerCase() === "irmao") continue; // Se for irmão, não cria ancestral
      mostrarModalAdicionar(membro, "topo");
      return;
    }

    // Clique no "+" inferior
    if (membro.grauParentesco.toLowerCase() !== "neto") {
      if (membro.grauParentesco.toLowerCase() === "primo") {
        // Sinal um pouco mais abaixo
        if (
          clicouNoMais(
            mx,
            my,
            pos.x + metade,
            pos.y + pos.tamanho + distanciaDeslocamento + 5
          )
        ) {
          mostrarModalAdicionar(membro, "baixo");
          return;
        }
      } else {
        if (
          clicouNoMais(mx, my, pos.x + metade, pos.y + pos.tamanho + distanciaDeslocamento)
        ) {
          mostrarModalAdicionar(membro, "baixo");
          return;
        }
      }
    }

    // Clique nos "+" laterais se for "Eu"
    if (membro.grauParentesco.toLowerCase() === "eu") {
      if (clicouNoMais(mx, my, pos.x - distanciaDeslocamento, pos.y + pos.tamanho / 2)) {
        mostrarModalAdicionar(membro, "esquerda");
        return;
      }
      if (
        clicouNoMais(
          mx,
          my,
          pos.x + pos.tamanho + distanciaDeslocamento,
          pos.y + pos.tamanho / 2
        )
      ) {
        mostrarModalAdicionar(membro, "direita");
        return;
      }
    }
  }

  // Se não clicou em membro nem em "+"
  arrastandoGrade = true;
  inicioArrasteGrade = { x: ponteiro.x, y: ponteiro.y };
  deslocamentoInicialVisao = {
    deslocamentoX: visao.deslocamentoX,
    deslocamentoY: visao.deslocamentoY
  };
}

function tratarMovimento(e) {
  e.preventDefault();
  const ponteiro = obterCoordenadasPonteiro(e);
  if (membroArrastando) {
    const posMundo = obterCoordenadasMundo(ponteiro.x, ponteiro.y);
    let novoX = posMundo.x - deslocamentoArraste.x;
    let novoY = posMundo.y - deslocamentoArraste.y;
    // Snap to grid
    novoX = Math.round(novoX / gridSize) * gridSize;
    novoY = Math.round(novoY / gridSize) * gridSize;
    membroArrastando.posicaoTela.x = novoX;
    membroArrastando.posicaoTela.y = novoY;
    desenharTudo();
  } else if (arrastandoGrade) {
    const dx = ponteiro.x - inicioArrasteGrade.x;
    const dy = ponteiro.y - inicioArrasteGrade.y;
    visao.deslocamentoX = deslocamentoInicialVisao.deslocamentoX + dx;
    visao.deslocamentoY = deslocamentoInicialVisao.deslocamentoY + dy;
    desenharTudo();
  }
}

function tratarFim(e) {
  e.preventDefault();
  if (membroArrastando || arrastandoGrade) {
    salvarEstado();
  }
  membroArrastando = null;
  arrastandoGrade = false;
}

function pontoDentroRetangulo(px, py, cx, cy, largura, altura) {
  return px >= cx && px <= cx + largura && py >= cy && py <= cy + altura;
}

function clicouNoMais(mx, my, cx, cy) {
  const dx = mx - cx;
  const dy = my - cy;
  const distancia = Math.sqrt(dx * dx + dy * dy);
  return distancia <= 20;
}

function jaTemConexaoAcima(membro) {
  if (membro.grauParentesco.toLowerCase() === "eu") return false;
  return membro.conexoes.some(con => con.direcao === "topo");
}

// --------------------------
// INICIALIZAÇÃO
// --------------------------
carregarEstado();
desenharTudo();
