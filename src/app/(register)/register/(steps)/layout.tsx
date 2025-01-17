import AsideRegister from "@/components/AsideRegister";
import ProgressStep from "@/components/ProgressStep";
import NextStepControl from "@/components/NextStepControl";

const StepRoot = ({ children }:{ children:React.ReactNode }) => {
    return (
        <div> 
            <header className="flex items-center justify-end">
                <ProgressStep/>
            </header>
            <div className="grid-aside">
                <div className="hidden md:block">
                    <AsideRegister/>
                </div>
                <div className="content pt-[57px]">
                    <div className="content-container min-h-[398px]">
                        <div>
                            { children }
                        </div>
                    </div>
                    <NextStepControl/>
                </div>
            </div>
        </div>
    )
}

export default StepRoot;