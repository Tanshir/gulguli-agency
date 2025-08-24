
import PageLayout from "@/components/PageLayout";

const TermsOfService = () => {
  return (
    <PageLayout 
      title="Terms of Service" 
      description="PixelCraft's terms of service outline the rules and regulations for using our web design and development services."
      keywords="terms of service, user agreement, service terms, legal terms"
    >
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2024</p>

          <div className="space-y-8 text-foreground">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Agreement to Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using PixelCraft's services, you accept and agree to be bound by 
                the terms and provision of this agreement. If you do not agree to abide by the 
                above, please do not use this service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Services Description</h2>
              <p className="mb-4 text-muted-foreground">
                PixelCraft provides web design, web development, e-commerce solutions, and SEO 
                optimization services. Our services include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Custom website design and development</li>
                <li>E-commerce platform development</li>
                <li>Search engine optimization</li>
                <li>Website maintenance and support</li>
                <li>Consulting and strategy services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Client Responsibilities</h2>
              <p className="mb-4 text-muted-foreground">As a client, you are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Providing accurate and complete project requirements</li>
                <li>Timely provision of content, images, and other materials</li>
                <li>Prompt feedback and approval of design concepts</li>
                <li>Payment of invoices according to agreed terms</li>
                <li>Maintaining backups of your website data</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Payment Terms</h2>
              <p className="text-muted-foreground">
                Payment terms are specified in individual project agreements. Generally, we require 
                a 50% deposit before starting work, with the balance due upon project completion. 
                Late payments may incur additional fees.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Intellectual Property</h2>
              <p className="text-muted-foreground">
                Upon full payment, clients receive ownership of the custom design and development 
                work created specifically for their project. However, PixelCraft retains the right 
                to showcase the work in our portfolio and use any general techniques or knowledge 
                gained during the project.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                PixelCraft's liability shall not exceed the total amount paid by the client for 
                the specific service in question. We are not liable for any indirect, incidental, 
                or consequential damages.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about these Terms of Service, contact us at:
                <br />
                Email: legal@pixelcraft.design
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

export default TermsOfService;
