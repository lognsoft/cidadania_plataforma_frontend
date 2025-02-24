"use client";
import ButtonVariantShadow from "@/components/common/button-variant/ButtonVariantShadow";
import { useRouter } from "next/navigation";
import Image from "next/image";

const RegisterPage = () => {
  const router = useRouter();

  return (
    <main>
      <div className="center">
        <div className="grid-presentation">
          <div className="container-image">
            <Image
              className="w-auto"
              src="/images/presentation.svg"
              width={453}
              height={373}
              alt="mascote"
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
                variant={"pink"}
                onClick={() => router.push("/register/how-meet")}
              >
                Confirmar agora!
              </ButtonVariantShadow>
              <ButtonVariantShadow variant={"gray-light-primary"}>
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
