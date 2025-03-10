"use client";
import ButtonVariantShadow from "@/components/common/button-variant/ButtonVariantShadow";
import { useRouter } from "next/navigation";
import Image from "next/image";

const RegisterPage = () => {
  const router = useRouter();

  return (
    <main>
      <div className="center">
        <div className="grid-presentation flex items-center justify-between">
          <div className="hidden md:block w-full max-w-[600px]">
            <Image
              src="/images/logo-home.svg"
              width={600}
              height={473}
              alt="logo-home"
              priority
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-full md:max-w-[421px] md:pl-8">
            <h1 className="presentation-title">
              O jeito fácil de confirmar a descendência e conseguir sua
              cidadania!
            </h1>
            <div className="presentation-actions">
              <ButtonVariantShadow
                variant={"default-pink"}
                onClick={() => router.push("/register")}
              >
                Confirmar agora!
              </ButtonVariantShadow>
              <ButtonVariantShadow variant={"default-gray"}>
                Acessar minha conta
              </ButtonVariantShadow>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
