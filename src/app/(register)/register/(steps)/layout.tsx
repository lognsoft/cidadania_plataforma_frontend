import AsideRegister from "@/components/AsideRegister";
import ProgressStep from "@/components/ProgressStep";
import NextStepComponent from "@/components/NextStep";

const StepRoot = ({ children }:{ children:React.ReactNode }) => {
    return (
        <div> 
            <header className="flex items-center justify-end">
                <ProgressStep/>
            </header>
            <div className="grid-aside">
                <AsideRegister/>
                <div className="content pt-[57px]">
                    <div className="content-container min-h-[398px]">
                        <div>
                            { children }
                        </div>
                    </div>
                    <NextStepComponent text="Continuar" href="/register/country" observable="howDidYouFind"/>
                </div>
            </div>
        </div>
    )
}

export default StepRoot;