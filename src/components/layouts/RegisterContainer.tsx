"use client"
import { motion, Variant, HTMLMotionProps } from "motion/react";
import { ReactNode } from "react";

interface IProps extends HTMLMotionProps<"div"> {
    children: ReactNode
}

const RegisterContainer = ({ children,  ...props }:IProps) => {

    return (
        <motion.div  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2 }}  { ...props }>
            { children }
        </motion.div>
    )
}

export default RegisterContainer