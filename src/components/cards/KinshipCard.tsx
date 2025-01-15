"use client";
import "@/styles/kinship-card-component.css"
import IKinshipCard from "@/types/IKinshipCard";
import BulletKinship from "../icons/BulletKinship";
import { type RootState, type AppDispatch } from "@/stores/store";
import { useSelector, useDispatch } from "react-redux";
import { updateState } from "@/stores/features/storeRegister";

interface IKinshipCardProps {
    kinship: IKinshipCard;
}

const KinshipCard = ({ kinship }:IKinshipCardProps) => {
    const state = useSelector((rootState:RootState) => rootState.register);
    const dispatch = useDispatch<AppDispatch>();

    function handlerKinship():void{
        dispatch(updateState({
            register:{
                ...state.register,
                kinship: kinship.title
            }
        }))
    }

    return (
        <div className="kinship-card" data-select={state.register.kinship === kinship.title} onClick={handlerKinship}>
            {/* <figure>
                <Image src="/images/icons/icon-bullet.svg" alt="" width={22} height={22}/>
            </figure> */}
            <BulletKinship check={ state.register.kinship === kinship.title }/>
            <div>
                <h4 className="font-lilita text-twenty">{ kinship.title }</h4>
                <span className="text-mini block -mt-1 font-bold text-gray-3">{ kinship.subtitle }</span>
            </div>
        </div> 
    )
}

export default KinshipCard