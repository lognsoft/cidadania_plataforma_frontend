"use client";
import Link from "next/link";
import Image from "next/image";
import "@/components/general/header-register/header-component.css";
import SelectLanguage from "@/components/SelectLanguage";
import { usePathname } from "next/navigation";

const HeaderRegister = () => {
    const path = usePathname();

    return (
        <header id="default-header" className={ path !== '/' ? 'mobile-response':'' }>
            <div className="center">
                <nav className="header-container">
                    <Link href="/">
                        {path !== '/' && (
                            <Image
                                className="w-auto h-auto md:hidden"
                                src="/images/logo-responsive.svg"
                                width="48"
                                height="62"
                                alt="logomarca"
                                priority
                            />
                        )}
                        <Image
                            className={ `w-auto h-auto${ path !== '/' ? ' hidden md:inline-block' : '' }` }
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