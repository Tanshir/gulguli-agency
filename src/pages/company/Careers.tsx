
import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, DollarSign, Users, Star, ArrowRight } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      salary: "$120k - $160k",
      description: "Join our engineering team to build cutting-edge web applications using React, TypeScript, and modern technologies.",
      requirements: [
        "5+ years of frontend development experience",
        "Expert knowledge of React and TypeScript",
        "Experience with modern CSS frameworks",
        "Strong understanding of web performance"
      ]
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote / New York",
      type: "Full-time", 
      salary: "$90k - $120k",
      description: "Create beautiful, intuitive user experiences for our clients' digital products and internal tools.",
      requirements: [
        "3+ years of UX/UI design experience",
        "Proficiency in Figma and design systems",
        "Portfolio showcasing web and mobile designs",
        "Understanding of accessibility principles"
      ]
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Hybrid / Los Angeles",
      type: "Full-time",
      salary: "$80k - $110k", 
      description: "Lead client projects from conception to launch, ensuring timely delivery and exceptional quality.",
      requirements: [
        "3+ years of project management experience",
        "PMP or Agile certification preferred",
        "Experience with digital agency workflows",
        "Excellent communication skills"
      ]
    },
    {
      title: "Backend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$110k - $140k",
      description: "Build scalable backend systems and APIs that power our client applications.",
      requirements: [
        "4+ years of backend development experience",
        "Proficiency in Node.js or Python",
        "Database design and optimization skills",
        "Cloud platform experience (AWS/GCP)"
      ]
    },
    {
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Remote / Austin",
      type: "Full-time",
      salary: "$60k - $80k",
      description: "Drive growth through digital marketing campaigns and content strategy.",
      requirements: [
        "2+ years of digital marketing experience",
        "SEO and content marketing expertise",
        "Social media management skills",
        "Analytics and reporting experience"
      ]
    },
    {
      title: "Intern - Web Development",
      department: "Engineering",
      location: "Remote",
      type: "Internship",
      salary: "$25/hour",
      description: "Learn and grow with our development team while working on real client projects.",
      requirements: [
        "Currently pursuing CS or related degree",
        "Basic knowledge of HTML, CSS, JavaScript",
        "Eagerness to learn and grow",
        "Strong problem-solving skills"
      ]
    }
  ];

  const benefits = [
    "Competitive salary and equity package",
    "Comprehensive health, dental, and vision insurance",
    "Unlimited PTO and flexible working hours", 
    "Remote-first culture with optional office access",
    "Professional development budget ($2,500/year)",
    "Latest equipment and technology",
    "Team retreats and company events",
    "Wellness and fitness stipend"
  ];

  const values = [
    {
      icon: Users,
      title: "Collaborative",
      description: "We believe the best work comes from diverse teams working together."
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for quality in everything we do and continuously improve."
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "We support our team's well-being with flexible schedules and time off."
    }
  ];

  return (
    <PageLayout 
      title="Careers" 
      description="Join the PixelCraft team and help us create amazing digital experiences. We're looking for talented designers, developers, and strategists."
      keywords="careers, jobs, web design jobs, developer jobs, remote work, PixelCraft careers"
    >
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Build Your Career
            <span className="block text-muted-foreground">With PixelCraft</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join our talented team of designers, developers, and strategists who are passionate 
            about creating exceptional digital experiences.
          </p>
          <Button className="btn-primary px-8 py-3 text-lg font-semibold">
            View Open Positions
          </Button>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide how we work and grow together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-card border-border text-center">
                <CardContent className="p-8">
                  <value.icon className="h-12 w-12 text-foreground mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-4 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Open Positions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find your next opportunity and help us shape the future of digital design.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="bg-card border-border hover:border-foreground transition-colors duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h3 className="text-xl font-bold text-foreground">{position.title}</h3>
                        <span className="bg-muted px-3 py-1 rounded-full text-sm text-foreground">
                          {position.department}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {position.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {position.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          {position.salary}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">{position.description}</p>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Requirements:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {position.requirements.slice(0, 2).map((req, reqIndex) => (
                            <li key={reqIndex}>• {req}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:ml-8">
                      <Button className="btn-primary w-full lg:w-auto">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Benefits & Perks</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We invest in our team's success and well-being.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <p className="text-foreground font-medium">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Don't See the Right Role?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always interested in meeting talented people. Send us your resume and tell us how you'd like to contribute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary">
              Send Your Resume
            </Button>
            <Button variant="outline" className="border-border text-foreground hover:border-foreground">
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Careers;
