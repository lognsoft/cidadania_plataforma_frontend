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
          <div className="relative w-full max-w-[453px] hidden md:block">
            <Image
              className="w-auto -mt-[100px]"
              src="/images/pattern.svg"
              width={453}
              height={373}
              alt="Padrão"
              priority
            />
            <Image
              className="absolute top-0 left-0 z-10 w-auto"
              src="/images/presentation.svg"
              width={600}
              height={473}
              alt="Apresentação"
              priority
            />
          </div>

          <div className="w-full md:max-w-[421px]">
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
