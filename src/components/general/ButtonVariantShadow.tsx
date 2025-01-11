import { ButtonHTMLAttributes } from "react"
import { Button } from "../ui/button"


interface ButtonVariantProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>{
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "pink" | "gray-light" | null | undefined,
    shadow?:boolean
}

const ButtonVariant = ({ children, shadow = true, variant = 'default', ...props }:ButtonVariantProps) => {
    return (
        <Button className={ shadow ? 'button-variant-shadow' : '' } variant={variant} { ...props }>{ children }</Button>
    )
}

export default ButtonVariant