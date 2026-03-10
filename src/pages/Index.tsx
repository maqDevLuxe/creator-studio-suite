import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import CreatorLogos from "@/components/home/CreatorLogos";
import AIFeatures from "@/components/home/AIFeatures";
import PodcastingSection from "@/components/home/PodcastingSection";
import RenderingSpeed from "@/components/home/RenderingSpeed";
import CloudCollab from "@/components/home/CloudCollab";
import ExportIntegrations from "@/components/home/ExportIntegrations";
import StudioPromo from "@/components/home/StudioPromo";
import CreatorCounters from "@/components/home/CreatorCounters";
import CreatorBlog from "@/components/home/CreatorBlog";
import CommunitySection from "@/components/home/CommunitySection";
import ReviewsSection from "@/components/home/ReviewsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <CreatorLogos />
    <AIFeatures />
    <PodcastingSection />
    <RenderingSpeed />
    <CloudCollab />
    <ExportIntegrations />
    <StudioPromo />
    <CreatorCounters />
    <CreatorBlog />
    <CommunitySection />
    <ReviewsSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
