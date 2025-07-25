import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Award, Star, ChevronRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-education.jpg";

const LandingPage = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Diverse Courses",
      description: "Access thousands of courses from top institutes worldwide",
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from industry professionals and certified educators",
    },
    {
      icon: Award,
      title: "Certificates",
      description: "Earn recognized certificates upon course completion",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Computer Science Student",
      content: "This platform transformed my learning experience. The courses are top-notch!",
      rating: 5,
    },
    {
      name: "Dr. Michael Chen",
      role: "Institute Director",
      content: "Perfect solution for managing our course offerings and student enrollments.",
      rating: 5,
    },
    {
      name: "Alex Rodriguez",
      role: "Data Science Learner",
      content: "The interactive content and expert guidance helped me land my dream job.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                EduCanvas
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/courses">
                <Button variant="ghost">Courses</Button>
              </Link>
              <Button variant="outline">Sign In</Button>
              <Button variant="hero">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                🚀 New Platform Launch
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Learn Without{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Limits
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of students and institutes in the most comprehensive
                course registration platform. Discover, enroll, and excel in your
                educational journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gradient" size="lg" className="group">
                  Start Learning Today
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="group">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="animate-fade-in delay-200">
              <img
                src={heroImage}
                alt="Students learning"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose EduCanvas?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide everything you need for a seamless learning experience
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-smooth">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What Our Users Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-elegant transition-smooth">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of learners and institutes already using EduCanvas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Browse Courses
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
              For Institutes
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">EduCanvas</span>
            </div>
            <p className="text-muted-foreground">
              © 2024 EduCanvas. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;