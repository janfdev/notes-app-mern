import { Hash, Lock, MonitorSmartphone, Search, Star } from "lucide-react";
import { Badge } from "../ui/badge";

const features = [
  {
    icon: Search,
    title: "Fast Search",
    description: "Instantly find any note with smart keyword-based filtering.",
  },
  {
    icon: Star,
    title: "Pin important notes",
    description: "Keep key notes on top to access them when it matters most.",
  },
  {
    icon: MonitorSmartphone,
    title: "Clean and Minimal UI",
    description:
      "Stay focused on what matters. No clutter. Just you and your thoughts.",
  },
  {
    icon: Hash,
    title: "Tagging System",
    description: "Organize your notes with custom tags.",
  },
  {
    icon: Lock,
    title: "Secure Account System",
    description:
      "Sign up and log in with ease. Your notes stay private and safe under your account.",
  },
];

const FeaturesPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center py-5"
      id="features"
    >
      <div className="flex flex-col items-center justify-center">
        <Badge className="ring-2 ring-primary rounded-full mb-5 transition-all ease-in-out hover:rotate-3">
          Features
        </Badge>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
          Organize Better, Think Clearer
        </h2>
        <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto px-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col border-2 border-primary/30 dark:border-primary rounded-xl py-6 px-5"
            >
              <div className="mb-3 h-10 w-10 flex items-center justify-center bg-primary/20 dark:bg-primary rounded-full">
                <feature.icon className="h-6 w-6" />
              </div>
              <span className="text-lg font-semibold">{feature.title}</span>
              <p className="mt-1 text-foreground/80 text-[15px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
