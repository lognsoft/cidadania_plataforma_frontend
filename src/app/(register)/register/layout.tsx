"use client";

function RegisterRoot({ children }:{ children:React.ReactNode }){

    return (
        <main id="step-view">
            <div className="center">
                { children }
            </div>
        </main>
    )
}

export default RegisterRoot;