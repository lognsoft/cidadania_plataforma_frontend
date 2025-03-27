import AsideRegister from "@/components/features/aside-register/AsideRegister";
import NextStepComponent from "@/components/features/next-step/NextStep";
import { ProgressWrapper } from "@/components/features/progress";

const StepRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="bg-gray-light-tertiary md:bg-transparent">
        <div className="center flex items-center justify-end">
          <ProgressWrapper />
        </div>
      </header>
      <div className="center">
        <div className="grid-aside">
          <div className="col-span-4 md:col-span-1">
            <AsideRegister />
          </div>
          <div className="content pt-[57px]">
            <div className="content-container md:min-h-[398px] md:max-h-[398px] overflow-y-scroll md:overflow-y-auto mb-4 md:mb-10">
              <div>{children}</div>
            </div>
            <NextStepComponent
              text="Continuar"
              href="/register/country"
              // className={buttonStyle}
              disabled={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StepRoot;
