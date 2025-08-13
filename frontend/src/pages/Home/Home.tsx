import HeroSection from "@/components/section/HeroSection";
import FeaturesPage from "@/components/section/features";
import FooterPage from "@/components/section/footer-05";
import StepBar from "@/components/stepper/StepBar";
import NavbarHomePage from "@/components/navbar/navbar-home";

const Home = () => {
  return (
    <section className="min-h-screen ">
      <NavbarHomePage />
      <HeroSection />
      <FeaturesPage />
      <StepBar />
      <FooterPage />
    </section>
  );
};

export default Home;
