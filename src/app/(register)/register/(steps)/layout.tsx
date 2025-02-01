import AsideRegister from "@/components/aside-register/AsideRegister";
import ProgressStep from "@/components/progress-step/ProgressStep";
import NextStepControl from "@/components/NextStepControl";

const StepRoot = ({ children }:{ children:React.ReactNode }) => {
    return (
        <> 
            <header className="bg-gray-light-tertiary md:bg-transparent">
                <div className="center flex items-center justify-end">
                    <ProgressStep/>
                </div>
            </header>
            <div className="center">
                <div className="grid-aside">
                    <div className="col-span-4 md:col-span-1">
                        <AsideRegister/>
                    </div>
                    <div className="content pt-[57px]">
                        <div className="content-container min-h-[398px] max-h-[398px] md:max-h-none overflow-y-scroll md:overflow-y-auto mb-10">
                            <div>
                                { children }
                            </div>
                        </div>
                        <NextStepControl/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StepRoot;