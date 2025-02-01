import Header from "@/components/general/header-register/HeaderRegister";
import MobileSelectLanguage from "@/components/MobileSelectLanguage";
import "@/app/(register)/route-register.css";

const TabRoot = ({ children }:{ children:Readonly<React.ReactNode> }) => {
    return (
        <div id="register-page">
            <Header/>
            <div className="app-presentation">
                { children }
            </div>
            <MobileSelectLanguage/>
        </div>
    )
}

export default TabRoot;