
import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Web Design Trends for 2024",
      excerpt: "Discover the latest design trends that are shaping the web in 2024, from minimalist layouts to bold typography.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      category: "Design",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Complete Guide to E-commerce SEO",
      excerpt: "Learn how to optimize your online store for search engines and drive more organic traffic to your products.",
      author: "Mike Chen",
      date: "March 10, 2024",
      category: "SEO",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Building Lightning-Fast Websites with Modern Tools",
      excerpt: "Explore the latest tools and techniques for creating websites that load instantly and provide excellent user experience.",
      author: "Alex Rivera",
      date: "March 5, 2024",
      category: "Development",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "User Experience Design: Best Practices for 2024",
      excerpt: "Master the fundamentals of UX design and learn how to create interfaces that users love.",
      author: "Emma Watson",
      date: "February 28, 2024",
      category: "UX Design",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Converting Visitors into Customers: CRO Strategies",
      excerpt: "Proven conversion rate optimization techniques that can significantly boost your website's performance.",
      author: "David Kim",
      date: "February 22, 2024",
      category: "Marketing",
      readTime: "9 min read"
    },
    {
      id: 6,
      title: "The Future of Web Development: What's Coming Next",
      excerpt: "Stay ahead of the curve with insights into emerging technologies and development practices.",
      author: "Lisa Park",
      date: "February 18, 2024",
      category: "Development",
      readTime: "6 min read"
    }
  ];

  const categories = ["All", "Design", "Development", "SEO", "UX Design", "Marketing"];

  return (
    <PageLayout 
      title="Blog" 
      description="Stay updated with the latest insights, tips, and trends in web design, development, and digital marketing from the PixelCraft team."
      keywords="web design blog, development insights, SEO tips, UX design, digital marketing"
    >
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Insights, tips, and trends from our team of web design and development experts.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "bg-white text-black" : "border-gray-600 text-gray-400 hover:border-white hover:text-white"}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="bg-gray-900 border-gray-800 hover:border-white transition-colors duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                    <span className="bg-gray-800 px-2 py-1 rounded text-xs">{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-gray-300 transition-colors">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-6 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button className="bg-white text-black hover:bg-gray-200 px-8 py-3">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;
