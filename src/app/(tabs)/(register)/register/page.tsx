import { RooteasyList } from "@/components/common/rooteasy-list";
import { DesktopAside } from "@/components/layout/desktop-aside";
import { FooterButtons } from "@/components/layout/footer-buttons";
import { MobileHeader } from "@/components/layout/mobile-header";
import { rootesay_add } from "@/constants/CRootesayAdd";

function RegisterPage() {
  return (
    <>
      <div className="center">
        <p className="text-center mb-7 md:hidden">
          Conta rapidinho, como você encontrou o Rooteasy?
        </p>
        <div className="grid-aside">
          <DesktopAside />
          <div className="content">
            <div className="content-container flex flex-col h-screen max-h-[60vh]">
              <RooteasyList data={rootesay_add} />
              <FooterButtons />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
