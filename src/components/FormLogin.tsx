import { useFormStatus } from "react-dom";

export function FormLogin() {

  function handleLogin(data: FormData) {
    const name = data.get('name')
    console.log(name);
    
  }
  return(
    <form action={handleLogin}>
      <div className="text-black">
        <label htmlFor="">nome</label>
        <input type="text" name="name" />
      </div>
      {/* <div>
        <label htmlFor="">email</label>
        <input type="text" />
      </div> */}
      <LucasTeste/>
    </form>
  )
}


function LucasTeste() {
  const { pending } = useFormStatus()

  return(
    <div>
      <button disabled={pending}>
        {pending ? 'enviando' : 'enviar'}
      </button>
      {pending && <span>carregando seu nome</span>}
    </div>

  )
}