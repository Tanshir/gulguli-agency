
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>PixelCraft - Professional Website Design & Development Agency</title>
        <meta name="description" content="PixelCraft creates stunning, conversion-focused websites that help businesses grow. Professional web design, development, e-commerce, and SEO services." />
        <meta name="keywords" content="web design, web development, website design agency, e-commerce, SEO, responsive design, custom websites" />
        <meta property="og:title" content="PixelCraft - Professional Website Design & Development Agency" />
        <meta property="og:description" content="PixelCraft creates stunning, conversion-focused websites that help businesses grow. Professional web design, development, e-commerce, and SEO services." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PixelCraft - Professional Website Design & Development Agency" />
        <meta name="twitter:description" content="PixelCraft creates stunning, conversion-focused websites that help businesses grow." />
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
