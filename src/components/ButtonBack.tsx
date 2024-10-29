import { useRouter } from 'next/navigation'
import React from 'react'


const ButtonBack = () => {
  const router = useRouter()
 


  function handleBack() {
    router.back()
  }
  return (
    <div>
        <button onClick={handleBack}>
          voltar
        </button>
      </div>
  )
}

export default ButtonBack
