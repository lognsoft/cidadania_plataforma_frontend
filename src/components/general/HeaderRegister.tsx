
import Link from "next/link";
import Image from "next/image";
import "@/styles/header-component.css";
import SelectLanguage from "@/components/SelectLanguage";

const HeaderRegister = () => {
    return (
        <header id="default-header">
            <div className="center">
                <nav className="header-container">
                    <Link href="/">
                        <Image
                            className="w-auto"
                            src="/images/logo.svg"
                            width="156"
                            height="66"
                            alt="logomarca"
                            priority
                        />
                    </Link>
                    <div className="hidden md:block relative -z-20">
                        <SelectLanguage/>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default HeaderRegister;