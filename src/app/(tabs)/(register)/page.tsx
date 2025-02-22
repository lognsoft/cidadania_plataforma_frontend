export default function Home() {
  return (
    <div className="">
      <h1 className="font-bold text-3xl mb-3">Home page</h1>
      <h2 className="font-semibold text-2xl mb-3">Variaveis de cores</h2>

      <h4 className="font-bold text-xl mb-2">Vermelho/Rosa</h4>
      <ul className="mb-4">
        <li className="text-default-primary">text-default-primary</li>
        <li className="text-default-secondary">text-default-secondary</li>
        <li className="bg-default-primary text-white">bg-default-primary</li>
        <li className="bg-default-secondary text-white">bg-default-secondary</li>
      </ul>

      <h4 className="font-bold text-xl mb-2">Preto</h4>
      <ul className="mb-4">
        <li className="text-default-tertiary">text-default-tertiary</li>
        <li className="text-default-quaternary">text-default-quaternary</li>
        <li className="text-default-quinary">text-default-quinary</li>
        <li className="bg-default-tertiary text-white">bg-default-tertiary</li>
        <li className="bg-default-quaternary text-white">bg-default-quaternary</li>
        <li className="bg-default-quinary text-white">bg-default-quaternary</li>
      </ul>

      <h4 className="font-bold text-xl mb-2">Verde</h4>
      <ul className="mb-4">
        <li className="text-default-senary">text-default-senary</li>
        <li className="text-default-septenary">default-septenary</li>
        <li className="bg-default-senary text-white">text-default-senary</li>
        <li className="bg-default-septenary text-white">default-septenary</li>
      </ul>
    </div>
  );
}
