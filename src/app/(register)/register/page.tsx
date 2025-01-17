import IRootEasy from "@/types/IRootEasyAdd";
import CardRooteasy from "@/components/cards/CardRooteasy";
import Image from "next/image";
import RegisterContainer from "@/components/layouts/RegisterContainer";
import NextStepComponent from "@/components/NextStep";

const rootesay_add:IRootEasy[] = [
    {
        icon: '/images/icons/logo-google.svg',
        text: 'Buscadores a Internet',
        width: 19,
        height: 19
    },
    {
        icon: '/images/icons/TikTok.svg',
        text: 'Tik Tok',
        width: 15,
        height: 21
    },
    {
        icon: '/images/icons/Facebook-instagram.svg',
        text:'Facebook Instagram',
        width: 43,
        height: 19
    },
    {
        icon: '/images/icons/YouTube.svg',
        text: 'YouTube',
        width: 24,
        height: 17
    },
    {
        icon: '/images/icons/icon-boxes.svg',
        text: 'Notícias, artigos, blogs',
        width: 30,
        height: 24
    },
    {
        icon: '/images/icons/icon-add.svg',
        text: 'Propaganda em site',
        width: 32,
        height: 22
    },
    {
        icon: '/images/icons/WhatsApp.svg',
        text: 'WhatsApp',
        width: 21,
        height: 21
    },
    {
        icon: '/images/icons/X.svg',
        text: 'X (Twitter)',
        width: 19,
        height: 20
    },
    {
        icon: '/images/icons/icon-woman.svg',
        text: 'Indicações',
        width: 21,
        height: 25
    },
    {
        icon: '/images/icons/icon-dots.svg',
        text: 'Outros meios',
        width: 27,
        height: 19
    }
];

function RegisterPage(){
    return (
        <>
            <RegisterContainer className="grid-aside">
                <aside className="hidden md:block">
                    <div>
                        <div className="aside-title">
                            <picture>
                                <Image src="/images/mais-antes.svg" width={62} height={113} alt="" priority/>
                            </picture>
                            <h1>Mas antes...</h1>
                        </div>
                        <p>Conta rapidinho, como você encontrou o Rooteasy?</p>
                    </div>
                </aside>
                <div className="content">
                    <div className="content-container">
                        <div className="register-page more-before">
                            {rootesay_add.map((data) => (
                                <div key={data.icon}>
                                    <CardRooteasy data={data}/>
                                </div>
                            ))}
                        </div>
                        <NextStepComponent text="Continuar" href="/register/country" observable="howDidYouFind"/>
                    </div>
                </div>
            </RegisterContainer>
        </>
    )
}

export default RegisterPage;