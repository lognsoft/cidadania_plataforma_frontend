import Image from "next/image";

function DesktopAside() {
  return (
    <aside className="hidden md:block">
      <div>
        <div className="aside-title">
          <picture>
            <Image
              src="/images/mais-antes.svg"
              width={62}
              height={113}
              alt=""
              priority
            />
          </picture>
          <h1 className="text-default-primary">Mas antes...</h1>
        </div>
        <p>Conta rapidinho, como você encontrou o Rooteasy?</p>
      </div>
    </aside>
  );
}

export default DesktopAside;
