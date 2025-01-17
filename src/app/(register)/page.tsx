"use client"
import ButtonVariantShadow from "@/components/general/ButtonVariantShadow";
import { useRouter } from "next/navigation";
import Image from "next/image";
import RegisterContainer from "@/components/layouts/RegisterContainer";

const RegisterPage = () => {
    const router = useRouter();

    return (
        <main>
            <div className="center">
                <div className="grid-presentation">
                    <div className="container-image">
                        <Image className="w-auto" src="/images/presentation.svg" width={453} height={373} alt="mascote" priority/>
                    </div>
                    <div className="w-full md:max-w-[421px]">
                        <h1 className="presentation-title">O jeito fácil de confirmar a descendência e conseguir sua cidadania!</h1>
                        <div className="presentation-actions">
                            <ButtonVariantShadow variant={'pink'} onClick={() => router.push('/register')}>Confirmar agora!</ButtonVariantShadow>
                            <ButtonVariantShadow variant={'gray-light'}>Acessar minha conta</ButtonVariantShadow>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default RegisterPage;
