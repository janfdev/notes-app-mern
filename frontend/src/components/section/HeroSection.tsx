import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const StartSvg = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-6 h-6 text-yellow-500"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default function HeroSection() {
  return (
    <section className="pb-20 pt-10 md:pb-28">
      <div className="max-w-7xl mx-3 rounded-xl md:mx-auto relative z-[2] flex flex-col overflow-hidden bg-background max-md:text-center px-4 py-6 md:px-12 md:py-16">
        <div className="flex flex-col justify-center items-center ">
          <Link
            to="/"
            className="flex w-auto group items-center rounded-full space-x-2 bg-primary/15 pl-1 pe-2 py-1 ring-1 ring-accent whitespace-pre"
          >
            <div className="w-fit flex items-center -mr-[0.2px] rounded-full px-2 py-0.5 text-center text-xs font-medium text-primary-foreground sm:text-sm">
              <span className="animate-ping w-2 h-2 bg-primary rounded-full"></span>
            </div>
            <p className="text-xs flex rounded-full items-center font-medium sm:text-sm ">
              <span>Simple & Fast Note-Taking App </span>
              <span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-all duration-300" />
              </span>
            </p>
          </Link>
          <h1 className="mt-10 font-bold tracking-tighter text-center text-5xl lg:text-6xl/none bg-clip-tex">
            Take notes instantly,{" "}
            <span className="inline-block">
              stay focused,{" "}
              <span className="inline-block bg-primary/80 pr-2 pb-2 pl-2 rotate-[-3deg] text-white">
                never lose your ideas.
              </span>
            </span>
          </h1>
          <p className="mt-10 text-lg opacity-80 leading-relaxed text-center">
            Capture your thoughts, organize your life. No distractions, just a
            clean and powerful note-taking experience for everyone.
          </p>
          <div className="mt-10 inline-flex items-center gap-3 max-md:mx-auto">
            <Link to={"/login"} className="group">
              <Button size="lg" className="font-semibold text-base">
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          <div className="mt-10 flex items-center space-x-4 text-sm">
            <div className="flex -space-x-4">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="h-10 w-10 rounded-full border-2  bg-transparent overflow-hidden"
                >
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="User avatar"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex ">
                <StartSvg />
                <StartSvg />
                <StartSvg />
                <StartSvg />
                <StartSvg />
              </div>
              <div className="font-semibold text-base text-muted-foreground/80">
                <span className="text-muted-foreground font-bold">67</span>{" "}
                makers ship faster
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
