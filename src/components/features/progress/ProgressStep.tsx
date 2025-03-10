"use client";
import React, { useState, useEffect } from "react";
import "./progress-step-component.css";

const ProgressStep = ({ progress = 25 }:{progress:number}) => {
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    setDisplayProgress(progress);
  }, [progress]);

  return (
    <div className="progress-component">
      <h4 className="font-lilita hidden md:block text-text-default-quinary">
        Apenas alguns passos
      </h4>
      <div className="progress">
        <div
          className="progress-bar"
          data-progress={`${displayProgress}%`}
          style={{ width: `${displayProgress}%`, fontWeight: "bold" }}
        />
      </div>
    </div>
  );
};

export default ProgressStep;
