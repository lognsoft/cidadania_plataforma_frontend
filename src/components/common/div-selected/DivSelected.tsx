import { HTMLAttributes, ReactNode } from "react"
import "./div-selected-component.css";

interface DivSelectedProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>{
    children: ReactNode;
    selected?: boolean;
    shadow?:boolean;
    colorShadow:boolean
    variant?: "red" | "green";
    className?: string;
}

function DivSelected ({
    children,
    shadow = false,
    colorShadow = false,
    className = "",
    variant= 'green',
    selected = false,
    ...rest
}:DivSelectedProps) {
    return (
        <div
            className={`card-rooteasy ${className}${shadow ? ' card-rooteasy-shadow' : ''}`}
            data-color={colorShadow}
            data-variant={variant}
            data-select={selected}
            { ...rest }
        >
            { children }
        </div>
    )
}

export default DivSelected;