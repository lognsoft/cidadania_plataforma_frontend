
import Link from "next/link";
import Image from "next/image";
import "@/styles/header-component.css";
import SelectLanguage from "@/components/SelectLanguage";

const Header = () => {
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
                    <SelectLanguage/>
                </nav>
            </div>
        </header>
    )
}

export default Header;