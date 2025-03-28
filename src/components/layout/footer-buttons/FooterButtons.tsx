import Image from "next/image";
import NextStepComponent from "@/components/features/next-step/NextStep";

interface FooterButtonsProps {
  isEnabled: boolean;
}

function FooterButtons({ isEnabled }: FooterButtonsProps) {
  // Defina classes de estilo para os estados habilitado e desabilitado
  const buttonStyle = isEnabled
    ? "enabled-button-style"
    : "disabled-button-style";

  return (
    <>
      <div className="w-full pb-5 md:hidden">
        <Image
          className="mx-auto mb-2"
          src="/images/icons/icon-arrow.svg"
          alt=""
          width={14}
          height={32}
        />
        <p className="text-center w-full max-w-[212px] mx-auto block md:hidden mb-6 text-gray-light-primary">
          Role para baixo para ver todas as opções
        </p>
        <NextStepComponent
          text="Continuar"
          href="/register/country"
          className={buttonStyle}
          disabled={!isEnabled}
        />
      </div>
      <div className="hidden md:block">
        <NextStepComponent
          text="Continuar"
          href="/register/country"
          className={buttonStyle}
          disabled={!isEnabled}
        />
      </div>
    </>
  );
}

export default FooterButtons;
