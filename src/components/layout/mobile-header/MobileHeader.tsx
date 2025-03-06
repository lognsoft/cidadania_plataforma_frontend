import Image from "next/image";

function MobileHeader() {
  return (
    <header
      id="model-step-header-1"
      className="md:hidden bg-gray-light-tertiary pb-[23px] mb-4"
    >
      <div className="flex flex-col items-center">
        <div className="header-title flex items-end justify-center gap-x-6">
          <picture>
            <Image
              src="/images/mais-antes.svg"
              width={62}
              height={113}
              alt=""
              priority
            />
          </picture>
          <h1 className="font-lilita text-title-h1 leading-8 text-default-primary">
            Mas
            <br />
            antes...
          </h1>
        </div>
      </div>
    </header>
  );
}

export default MobileHeader;
