import HeroSection from "@/components/section/HeroSection";
import FeaturesPage from "@/components/section/features";
import FooterPage from "@/components/section/footer-05";
import Navbar02Page from "@/components/navbar/navbar-home";
import StepBar from "@/components/stepper/StepBar";

const Home = () => {
  return (
    <section className="min-h-screen ">
      <Navbar02Page />
      <HeroSection />
      <FeaturesPage />
      <StepBar />
      <FooterPage />
    </section>
  );
};

export default Home;
