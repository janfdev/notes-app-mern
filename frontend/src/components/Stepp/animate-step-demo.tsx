import { useState } from "react";
import { Button } from "../ui/button";
import { Play, RotateCcw } from "lucide-react";
import { ProgressStepBar } from "./progress-step-bar";

export function AnimatedProgressDemo() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const startAnimation = () => {
    setIsAnimating(true);
    setCurrentStep(1);

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= 3) {
          clearInterval(interval);
          setIsAnimating(false);
          return 3;
        }
        return prev + 1;
      });
    }, 1500);
  };

  const resetAnimation = () => {
    setCurrentStep(1);
    setIsAnimating(false);
  };

  return (
    <div className="space-y-8">
      <ProgressStepBar currentStep={currentStep} />

      <div className="flex justify-center gap-4">
        <Button
          onClick={startAnimation}
          disabled={isAnimating}
          className="flex items-center gap-2"
        >
          <Play className="w-4 h-4" />
          {isAnimating ? "Playing..." : "Play Animation"}
        </Button>
        <Button
          variant={"outlinePink"}
          onClick={resetAnimation}
          className="flex items-center border border-primary gap-2 "
        >
          <RotateCcw className="w-4 h-4" />
          Reset
        </Button>
      </div>
    </div>
  );
}
