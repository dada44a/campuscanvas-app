import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, Search, Filter, Clock, Users, Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      institute: "TechPro Academy",
      category: "Technology",
      level: "Beginner",
      duration: "12 weeks",
      students: 2847,
      rating: 4.8,
      price: "$299",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop",
      description: "Master HTML, CSS, JavaScript, React, and Node.js from scratch"
    },
    {
      id: 2,
      title: "Data Science with Python",
      institute: "DataMind Institute",
      category: "Data Science",
      level: "Intermediate",
      duration: "16 weeks",
      students: 1923,
      rating: 4.9,
      price: "$399",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
      description: "Learn Python, pandas, NumPy, machine learning, and data visualization"
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      institute: "Marketing Pro",
      category: "Marketing",
      level: "Beginner",
      duration: "8 weeks",
      students: 3156,
      rating: 4.7,
      price: "$199",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
      description: "Complete guide to SEO, social media, content marketing, and PPC"
    },
    {
      id: 4,
      title: "UX/UI Design Fundamentals",
      institute: "Design Studio",
      category: "Design",
      level: "Beginner",
      duration: "10 weeks",
      students: 1567,
      rating: 4.6,
      price: "$249",
      image: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=400&h=200&fit=crop",
      description: "Learn user research, wireframing, prototyping, and modern design tools"
    },
    {
      id: 5,
      title: "Advanced JavaScript & React",
      institute: "CodeMasters",
      category: "Technology",
      level: "Advanced",
      duration: "14 weeks",
      students: 892,
      rating: 4.9,
      price: "$349",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=200&fit=crop",
      description: "Deep dive into ES6+, React hooks, Redux, and modern JavaScript patterns"
    },
    {
      id: 6,
      title: "Business Analytics",
      institute: "Analytics Hub",
      category: "Business",
      level: "Intermediate",
      duration: "12 weeks",
      students: 1345,
      rating: 4.5,
      price: "$279",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
      description: "Master Excel, SQL, Tableau, and business intelligence tools"
    }
  ];

  const categories = ["all", "Technology", "Data Science", "Marketing", "Design", "Business"];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.institute.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                EduCanvas
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">My Courses</Button>
              <Button variant="outline">Profile</Button>
              <Button variant="hero">Enroll Now</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-12 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Explore Courses</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover amazing courses from top institutes worldwide
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search courses, institutes..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">
              {filteredCourses.length} Course{filteredCourses.length !== 1 ? 's' : ''} Found
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="group hover:shadow-elegant transition-smooth overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{course.category}</Badge>
                    <Badge variant="outline">{course.level}</Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="flex items-center space-x-1">
                    <MapPin className="h-3 w-3" />
                    <span>{course.institute}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-3 w-3" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-primary">{course.price}</div>
                    <Button variant="hero" size="sm">
                      Enroll Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No courses found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or filters
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;