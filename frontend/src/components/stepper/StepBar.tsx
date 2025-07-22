import { Badge } from "../ui/badge";
import { AnimatedProgressDemo } from "./animate-step-demo";

const StepBarPage = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-br py-12 px-4"
      id="how-it-works"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge>How it Works</Badge>
          <p className="text-3xl font-semibold max-w-2xl mx-auto">
            Discover the simple yet powerful workflow that makes note-taking
            effortless and efficient
          </p>
        </div>

        {/* Animated Demo */}
        <div className="dark:bg-muted rounded-2xl shadow-xl p-8">
          <AnimatedProgressDemo />
        </div>
      </div>
    </div>
  );
};

export default StepBarPage;
