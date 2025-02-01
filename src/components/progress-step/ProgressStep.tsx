"use client";
import "@/components/progress-step/progress-step-component.css";

const ProgressStep = () => {
    return (
        <div className="progress-component">
            <h4 className="font-lilita hidden md:block">Apenas alguns passos</h4>
            <div className="progress">
                <div className="progress-bar" data-progress="25%"/>
            </div>
        </div>
    );
}

export default ProgressStep;