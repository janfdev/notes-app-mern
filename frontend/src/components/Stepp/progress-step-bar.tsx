import type React from "react";

import { ShieldCheck, NotebookPen, AlarmClockCheck, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  completed?: boolean;
}

interface ProgressStepBarProps {
  currentStep?: number;
  className?: string;
}

export function ProgressStepBar({
  currentStep = 1,
  className,
}: ProgressStepBarProps) {
  const steps: Step[] = [
    {
      id: 1,
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "Sign Up in Seconds",
      description: "Create your free account — no hassle, no complications.",
    },
    {
      id: 2,
      icon: <NotebookPen className="w-10 h-10" />,
      title: "Create, edit, and pin your notes",
      description: "Stay organized with clean, distraction-free note-taking.",
    },
    {
      id: 3,
      icon: <AlarmClockCheck className="w-10 h-10" />,
      title: "Access your notes anywhere, anytime",
      description: "Your ideas are always with you - on any device",
    },
  ];

  return (
    <div className={cn("w-full max-w-4xl mx-auto", className)}>
      <div className="relative">
        <div className="absolute top-8 left-8 right-8 h-1 rounded-full bg-gray-200">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
            }}
          />
        </div>

        <div className="relative flex justify-between">
          {steps.map((step) => {
            const isCompleted = step.id < currentStep;
            const isCurrent = step.id === currentStep;
            const isUpcoming = step.id > currentStep;

            return (
              <div
                key={step.id}
                className="flex flex-col items-center max-w-xs"
              >
                {/* Step Circle */}
                <div
                  className={cn(
                    "relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-2 transition-all duration-300",
                    {
                      "bg-primary border-primary text-white":
                        isCompleted || isCurrent,
                      "bg-white border-gray-300 text-gray-400": isUpcoming,
                    }
                  )}
                >
                  {isCompleted ? <Check className="w-6 h-6" /> : step.icon}
                </div>

                {/* Step Content */}

                <div className="mt-4 text-center">
                  <h3
                    className={cn(
                      "md:text-lg text-sm font-semibold transition-colors duration-300",
                      {
                        "text-primary": isCompleted || isCurrent,
                        "text-gray-400": isUpcoming,
                      }
                    )}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 md:text-sm text-xs transition-colors duration-300",
                      {
                        "text-gray-600": isCompleted || isCurrent,
                        "text-gray-400": isUpcoming,
                      }
                    )}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
