import Header from "@/components/general/HeaderRegister";

const TabRoot = ({ children }:{ children:Readonly<React.ReactNode> }) => {
    return (
        <>
            <Header/>
            { children }
        </>
    )
}

export default TabRoot;