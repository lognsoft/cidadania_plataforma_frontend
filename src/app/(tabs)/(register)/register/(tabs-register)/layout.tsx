import { StepRoot } from "@/components/layout/step-root"
import React from "react";

const StepRootLayout = ({ children }:{ children:React.ReactNode }) => {
    return (
        <StepRoot>
            { children }
        </StepRoot>
    )
}

export default StepRootLayout;