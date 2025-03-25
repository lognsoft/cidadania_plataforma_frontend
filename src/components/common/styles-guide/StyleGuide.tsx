export default function StyleGuide() {
  return (
    <div className="p-6">
      <h1 className="font-bold text-3xl mb-6">Guia de Estilos</h1>

      {/* Cores */}
      <section className="mb-10">
        <h2 className="font-semibold text-2xl mb-4">Variáveis de Cores</h2>

        {/* Vermelho / Rosa */}
        <div className="mb-6">
          <h3 className="font-bold text-xl mb-2">Vermelho / Rosa</h3>
          <ul className="space-y-2">
            <li className="text-default-primary">text-default-primary</li>
            <li className="text-default-secondary">text-default-secondary</li>
            <li className="bg-default-primary text-white p-2">
              bg-default-primary
            </li>
            <li className="bg-default-secondary text-white p-2">
              bg-default-secondary
            </li>
            <li className="bg-default-red-primary text-white p-2">
              bg-default-red-primary
            </li>
          </ul>
        </div>

        {/* Preto e cinzas */}
        <div className="mb-6">
          <h3 className="font-bold text-xl mb-2">Cinza / Preto</h3>
          <ul className="space-y-2">
            <li className="text-default-tertiary">text-default-tertiary</li>
            <li className="text-default-quaternary">text-default-quaternary</li>
            <li className="text-default-quinary">text-default-quinary</li>
            <li className="text-default-gray-text">text-default-gray-text</li>
            <li className="text-default-gray-text-bold font-bold">
              text-default-gray-text-bold
            </li>
            <li className="bg-default-tertiary text-white p-2">
              bg-default-tertiary
            </li>
            <li className="bg-default-quaternary text-white p-2">
              bg-default-quaternary
            </li>
            <li className="bg-default-quinary text-white p-2">
              bg-default-quinary
            </li>
            <li className="bg-default-gray text-black p-2">bg-default-gray</li>
            <li className="bg-default-gray-ligth text-black p-2">
              bg-default-gray-ligth
            </li>
            <li className="bg-default-gray-ligth-primary text-black p-2">
              bg-default-gray-ligth-primary
            </li>
          </ul>
        </div>

        {/* Verde */}
        <div className="mb-6">
          <h3 className="font-bold text-xl mb-2">Verde</h3>
          <ul className="space-y-2">
            <li className="text-default-senary">text-default-senary</li>
            <li className="text-default-septenary">text-default-septenary</li>
            <li className="text-default-octonary">text-default-octonary</li>
            <li className="text-green-primary">text-green-primary</li>
            <li className="bg-default-senary text-white p-2">
              bg-default-senary
            </li>
            <li className="bg-default-septenary text-black p-2">
              bg-default-septenary
            </li>
            <li className="bg-default-green-primary text-white p-2">
              bg-default-green-primary
            </li>
            <li className="bg-default-green-primary-100 text-white p-2">
              bg-default-green-primary-100
            </li>
            <li className="bg-default-green-primary-200 text-white p-2">
              bg-default-green-primary-200
            </li>
          </ul>
        </div>

        {/* Extras */}
        <div className="mb-6">
          <h3 className="font-bold text-xl mb-2">Outros</h3>
          <ul className="space-y-2">
            <li className="bg-default-pink text-white p-2">bg-default-pink</li>
            <li className="bg-default-eighth text-white p-2">
              bg-default-eighth
            </li>
          </ul>
        </div>
      </section>

      {/* Fontes */}
      <section>
        <h2 className="font-semibold text-2xl mb-4">Fontes Personalizadas</h2>
        <ul className="space-y-4">
          <li className="font-poppins text-lg">
            <span className="font-bold">.font-poppins:</span> Exemplo usando
            Poppins.
          </li>
          <li className="font-lilita text-lg">
            <span className="font-bold">.font-lilita:</span> Exemplo usando
            Lilita One.
          </li>
          <li className="font-light text-base">
            <span className="font-bold">.font-light:</span> Fonte leve (weight
            300).
          </li>
          <li className="font-normal text-base">
            <span className="font-bold">.font-normal:</span> Fonte padrão
            (weight 400).
          </li>
          <li className="font-semibold text-base">
            <span className="font-bold">.font-semibold:</span> Fonte semibold
            (weight 600).
          </li>
          <li className="font-bold text-base">
            <span className="font-bold">.font-bold:</span> Fonte bold (weight
            700).
          </li>
        </ul>
      </section>
    </div>
  );
}
