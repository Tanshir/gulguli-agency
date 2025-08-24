
import PageLayout from "@/components/PageLayout";

const PrivacyPolicy = () => {
  return (
    <PageLayout 
      title="Privacy Policy" 
      description="PixelCraft's privacy policy outlines how we collect, use, and protect your personal information when you use our services."
      keywords="privacy policy, data protection, personal information, GDPR compliance"
    >
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2024</p>

          <div className="space-y-8 text-foreground">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Information We Collect</h2>
              <p className="mb-4 text-muted-foreground">
                We collect information you provide directly to us, such as when you create an account, 
                contact us, or use our services. This may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Name, email address, and contact information</li>
                <li>Business information and project requirements</li>
                <li>Communication preferences</li>
                <li>Payment and billing information</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">How We Use Your Information</h2>
              <p className="mb-4 text-muted-foreground">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Communicate with you about our services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Information Sharing</h2>
              <p className="text-muted-foreground">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy. We may share information in 
                certain limited circumstances, such as with service providers who assist us in operating 
                our website and conducting our business.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no internet 
                transmission is completely secure, so we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Your Rights</h2>
              <p className="mb-4 text-muted-foreground">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Request data portability</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                Email: privacy@pixelcraft.design
                <br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PrivacyPolicy;
