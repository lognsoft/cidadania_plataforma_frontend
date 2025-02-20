"use client";
import { usePathname } from "next/navigation";
import ProgressStep from "@/components/progress-step/ProgressStep";
import { stepsAside } from "@/constants/CAsideRegister";

const ProgressWrapper = () => {
  const pathname = usePathname();
  const currentStepIndex = stepsAside.findIndex(
    (step) => step.path === pathname
  );
  const totalSteps = stepsAside.length;
  const progress =
    currentStepIndex >= 0
      ? Math.round(((currentStepIndex + 1) / totalSteps) * 100)
      : 0;

  return <ProgressStep progress={progress} />;
};

export default ProgressWrapper;
