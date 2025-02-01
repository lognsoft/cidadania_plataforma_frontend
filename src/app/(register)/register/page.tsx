import IRootEasy from "@/types/IRootEasyAdd";
import CardRooteasy from "@/components/cards/card-rooteasy/CardRooteasy";
import Image from "next/image";
// import RegisterContainer from "@/components/layouts/RegisterContainer";
import NextStepComponent from "@/components/next-step/NextStep";

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
            <header id="model-step-header-1" className="md:hidden bg-gray-light-tertiary pb-[23px] mb-4">
                <div className="center">
                    <div className="header-title flex items-end justify-center gap-x-6">
                        <picture>
                            <Image src="/images/mais-antes.svg" width={62} height={113} alt="" priority/>
                        </picture>
                        <h1 className="font-lilita text-title-h1 leading-8 text-wine-primary">Mas<br/>antes...</h1>
                    </div>
                </div>
            </header>
            <div className="center">
                <p className="text-center mb-7">Conta rapidinho, como você encontrou o Rooteasy?</p>
                <div className="grid-aside">
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
                        <div className="content-container flex flex-col h-screen max-h-[60vh]">
                            <div className="register-page more-before overflow-y-scroll p-0">
                                {rootesay_add.map((data) => (
                                    <div key={data.icon}>
                                        <CardRooteasy data={data}/>
                                    </div>
                                ))}
                            </div>
                            <div className="w-full pb-5">
                                <Image className="mx-auto mb-2" src="/images/icons/icon-arrow.svg" alt="" width={14} height={32}/>
                                <p className="text-center w-full max-w-[212px] mx-auto block md:hidden mb-6 text-gray-light-primary">Role para baixo para ver todas as opções</p>
                                <NextStepComponent text="Continuar" href="/register/country" observable="howDidYouFind"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterPage;