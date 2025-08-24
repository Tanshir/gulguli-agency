
import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does a typical website project take?",
      answer: "Most website projects take 4-8 weeks from start to finish, depending on complexity and scope. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes, we offer comprehensive maintenance packages that include security updates, content updates, backups, and technical support."
    },
    {
      question: "Can you help with SEO and digital marketing?",
      answer: "Absolutely! We provide SEO optimization services, content strategy, and can recommend trusted partners for broader digital marketing needs."
    },
    {
      question: "What's included in your web design service?",
      answer: "Our web design service includes custom UI/UX design, responsive layouts, brand integration, and up to 3 revision rounds to ensure your satisfaction."
    },
    {
      question: "Do you work with existing websites or only new projects?",
      answer: "We work with both! We can redesign existing websites, add new features, or optimize current sites for better performance and user experience."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers, credit cards, and PayPal. We typically require 50% upfront with the balance due upon project completion."
    }
  ];

  return (
    <PageLayout 
      title="Frequently Asked Questions" 
      description="Find answers to common questions about PixelCraft's web design and development services, pricing, timelines, and support."
      keywords="FAQ, web design questions, pricing, timelines, support, frequently asked questions"
    >
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our services, process, and pricing.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Still have questions?</h2>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? We're here to help.
            </p>
            <a 
              href="/support/contact" 
              className="inline-block bg-foreground text-background px-8 py-3 font-semibold hover:bg-foreground/90 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FAQ;
