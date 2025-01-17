import Header from "@/components/general/HeaderRegister";
import SelectLanguage from "@/components/SelectLanguage";
import "@/styles/collection-register/route-register.css"

const TabRoot = ({ children }:{ children:Readonly<React.ReactNode> }) => {
    return (
        <div id="register-page">
            <Header/>
            <div className="app-presentation">
                { children }
            </div>
            <div className="md:hidden fixed w-full bottom-0 left-0 z-[1000] bg-white">
                <div className="center">
                    <div className="h-[3px] bg-gray-light-2 rounded-full"/>
                    <div className="language py-7 max-w-[250px] mx-auto">
                        <SelectLanguage/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabRoot;