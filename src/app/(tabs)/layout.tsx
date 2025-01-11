import Header from "@/components/general/Header";

const TabRoot = ({ children }:{ children:Readonly<React.ReactNode> }) => {
    return (
        <>
            <Header/>
            { children }
        </>
    )
}

export default TabRoot;