import Header from "@/components/general/Header";
import "@/styles/collection-register/route-register.css"

const TabRoot = ({ children }:{ children:Readonly<React.ReactNode> }) => {
    return (
        <div id="register-page">
            <Header/>
            <div className="app-presentation">
                { children }
            </div>
        </div>
    )
}

export default TabRoot;