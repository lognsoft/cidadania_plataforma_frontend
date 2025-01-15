import Image from "next/image";

interface ICheckRegisterProps{
    label:string;
    children:React.ReactNode;
}

const CheckRegister = ({ label, children }:ICheckRegisterProps) => {
    return (
        <div>
            <div className="inline-flex items-center gap-3">
                <div className="inline-flex border border-gray-light h-[45px] px-[10px] rounded-lg">
                    <div className="flex items-center gap-1">
                        <span className="font-bold block">{ label }</span>
                        <span className="flex items-center gap-2">{ children }</span>
                    </div>
                </div>
                <ul className="flex items-center gap-2">
                    <li className="flex items-center justify-center">
                        <button>
                            <Image className="w-auto" src="/images/icons/icon-check.svg" alt="" width={30} height={28}/>
                        </button>
                    </li>
                    <li className="flex items-center justify-center">
                        <button>
                            <Image className="w-auto" src="/images/icons/icon-edit.svg" alt="" width={30} height={28}/>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CheckRegister;