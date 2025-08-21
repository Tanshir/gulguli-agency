
import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  keywords?: string;
}

const PageLayout = ({ children, title, description, keywords }: PageLayoutProps) => {
  return (
    <>
      <Helmet>
        <title>{title} | PixelCraft - Website Design Agency</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta property="og:title" content={`${title} | PixelCraft`} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} | PixelCraft`} />
        <meta name="twitter:description" content={description} />
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PageLayout;
