export default function StyleGuide() {
  return (
    <div className="p-6">
      <h1 className="font-bold text-3xl mb-6">Guia de Estilos</h1>

      <section className="mb-10">
        <h2 className="font-semibold text-2xl mb-4">Variáveis de Cores</h2>

        <div>
          <h3 className="font-bold text-xl mb-2">Vermelho / Rosa</h3>
          <ul className="mb-6 space-y-2">
            <li className="text-default-primary">text-default-primary</li>
            <li className="text-default-secondary">text-default-secondary</li>
            <li className="bg-default-primary text-white p-2">
              bg-default-primary
            </li>
            <li className="bg-default-secondary text-white p-2">
              bg-default-secondary
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-2">Preto</h3>
          <ul className="mb-6 space-y-2">
            <li className="text-default-tertiary">text-default-tertiary</li>
            <li className="text-default-quaternary">text-default-quaternary</li>
            <li className="text-default-quinary">text-default-quinary</li>
            <li className="bg-default-tertiary text-white p-2">
              bg-default-tertiary
            </li>
            <li className="bg-default-quaternary text-white p-2">
              bg-default-quaternary
            </li>
            <li className="bg-default-quinary text-white p-2">
              bg-default-quinary
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-2">Verde</h3>
          <ul className="mb-6 space-y-2">
            <li className="text-default-senary">text-default-senary</li>
            <li className="text-default-septenary">text-default-septenary</li>
            <li className="bg-default-senary text-white p-2">
              bg-default-senary
            </li>
            <li className="bg-default-septenary text-white p-2">
              bg-default-septenary
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="font-semibold text-2xl mb-4">Variáveis de Fontes</h2>
        <ul className="space-y-3">
          <li className="font-light text-lg">
            <span className="font-bold">.font-light:</span> Exemplo de fonte
            leve.
          </li>
          <li className="font-normal text-lg">
            <span className="font-bold">.font-normal:</span> Exemplo de fonte
            normal.
          </li>
          <li className="font-semibold text-lg">
            <span className="font-bold">.font-semibold:</span> Exemplo de fonte
            semibold.
          </li>
          <li className="font-bold text-lg">
            <span className="font-bold">.font-bold:</span> Exemplo de fonte
            bold.
          </li>
        </ul>
      </section>
    </div>
  );
}
