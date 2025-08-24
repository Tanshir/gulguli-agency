
import PageLayout from "@/components/PageLayout";

const CookiesPolicy = () => {
  return (
    <PageLayout 
      title="Cookies Policy" 
      description="Learn about how PixelCraft uses cookies to improve your browsing experience and provide better services."
      keywords="cookies policy, website cookies, tracking, user experience"
    >
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Cookies Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2024</p>

          <div className="space-y-8 text-foreground">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">What Are Cookies</h2>
              <p className="text-muted-foreground">
                Cookies are small text files that are placed on your computer or mobile device when 
                you visit a website. They are widely used to make websites work more efficiently 
                and provide information to website owners.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">How We Use Cookies</h2>
              <p className="mb-4 text-muted-foreground">We use cookies for several purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Essential cookies: Required for the website to function properly</li>
                <li>Analytics cookies: Help us understand how visitors interact with our website</li>
                <li>Functional cookies: Remember your preferences and settings</li>
                <li>Marketing cookies: Used to deliver relevant advertisements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Managing Cookies</h2>
              <p className="text-muted-foreground">
                You can control and/or delete cookies as you wish. You can delete all cookies that 
                are already on your computer and you can set most browsers to prevent them from being 
                placed. However, if you do this, you may have to manually adjust some preferences 
                every time you visit a site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about our use of cookies, please contact us at:
                <br />
                Email: privacy@pixelcraft.design
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CookiesPolicy;
