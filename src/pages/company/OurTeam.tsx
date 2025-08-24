
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Github } from "lucide-react";

const OurTeam = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80",
      bio: "Visionary leader with 10+ years in digital strategy and business development.",
      social: { twitter: "#", linkedin: "#" }
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      bio: "Full-stack developer specializing in React, Node.js, and modern web technologies.",
      social: { github: "#", linkedin: "#" }
    },
    {
      name: "Emily Rodriguez",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
      bio: "Award-winning designer with expertise in UI/UX and brand identity.",
      social: { twitter: "#", linkedin: "#" }
    }
  ];

  return (
    <PageLayout 
      title="Our Team" 
      description="Meet the talented team behind PixelCraft. Our designers, developers, and strategists are passionate about creating exceptional digital experiences."
      keywords="pixelcraft team, web designers, web developers, creative team, digital agency team"
    >
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Meet Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The passionate professionals behind every successful project. 
            Get to know the people who make PixelCraft exceptional.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={member.name} className="bg-card border-border hover:border-foreground transition-colors duration-300">
                <CardContent className="p-0">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-2 text-foreground">{member.name}</h3>
                    <p className="text-muted-foreground mb-4">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-6">{member.bio}</p>
                    <div className="flex space-x-3">
                      {member.social.twitter && (
                        <Button size="sm" variant="outline" className="w-8 h-8 p-0 border-border text-foreground">
                          <Twitter className="h-4 w-4" />
                        </Button>
                      )}
                      {member.social.linkedin && (
                        <Button size="sm" variant="outline" className="w-8 h-8 p-0 border-border text-foreground">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                      )}
                      {member.social.github && (
                        <Button size="sm" variant="outline" className="w-8 h-8 p-0 border-border text-foreground">
                          <Github className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Join Our Team</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for creating exceptional digital experiences.
          </p>
          <Button className="bg-foreground text-background hover:bg-foreground/90 px-8 py-3 text-lg font-semibold">
            View Open Positions
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default OurTeam;
