import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { BookOpen, Users, TrendingUp, DollarSign, Plus, Edit, Trash2, Eye } from "lucide-react";

const InstituteDashboard = () => {
  const [isCreateCourseOpen, setIsCreateCourseOpen] = useState(false);

  const stats = {
    totalCourses: 12,
    totalStudents: 8943,
    monthlyRevenue: "$45,670",
    activeEnrollments: 234
  };

  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      category: "Technology",
      level: "Beginner",
      price: "$299",
      students: 2847,
      status: "Active",
      lastUpdated: "2024-03-15"
    },
    {
      id: 2,
      title: "Advanced JavaScript & React",
      category: "Technology",
      level: "Advanced",
      price: "$349",
      students: 892,
      status: "Active",
      lastUpdated: "2024-03-10"
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      category: "Marketing",
      level: "Beginner",
      price: "$199",
      students: 3156,
      status: "Draft",
      lastUpdated: "2024-03-12"
    }
  ];

  const recentEnrollments = [
    { student: "Alice Johnson", course: "Web Development", date: "2024-03-15", amount: "$299" },
    { student: "Bob Smith", course: "React Advanced", date: "2024-03-14", amount: "$349" },
    { student: "Carol Davis", course: "Digital Marketing", date: "2024-03-13", amount: "$199" },
    { student: "David Wilson", course: "Web Development", date: "2024-03-12", amount: "$299" }
  ];

  const subscriptionPlans = [
    {
      name: "Basic Plan",
      price: "$29/month",
      courses: "Up to 5 courses",
      students: "Up to 100 students",
      features: ["Basic analytics", "Email support"],
      current: false
    },
    {
      name: "Professional Plan",
      price: "$99/month",
      courses: "Up to 20 courses",
      students: "Up to 1000 students",
      features: ["Advanced analytics", "Priority support", "Custom branding"],
      current: true
    },
    {
      name: "Enterprise Plan",
      price: "$299/month",
      courses: "Unlimited courses",
      students: "Unlimited students",
      features: ["All features", "Dedicated support", "API access"],
      current: false
    }
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
              <span className="text-sm text-muted-foreground">TechPro Academy</span>
              <Button variant="outline" size="sm">Settings</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Institute Dashboard</h1>
            <p className="text-muted-foreground">Manage your courses and track performance</p>
          </div>
          <Dialog open={isCreateCourseOpen} onOpenChange={setIsCreateCourseOpen}>
            <DialogTrigger asChild>
              <Button variant="hero">
                <Plus className="mr-2 h-4 w-4" />
                Create Course
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create New Course</DialogTitle>
                <DialogDescription>
                  Add a new course to your institute's offerings
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Course Title</Label>
                    <Input id="title" placeholder="Enter course title" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="price">Price</Label>
                    <Input id="price" placeholder="$299" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="level">Level</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Course description..." />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setIsCreateCourseOpen(false)}>
                    Cancel
                  </Button>
                  <Button variant="hero">Create Course</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-primary text-primary-foreground">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Total Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalCourses}</div>
            </CardContent>
          </Card>
          
          <Card className="bg-success text-success-foreground">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Total Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalStudents.toLocaleString()}</div>
            </CardContent>
          </Card>
          
          <Card className="bg-accent text-accent-foreground">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Monthly Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.monthlyRevenue}</div>
            </CardContent>
          </Card>
          
          <Card className="bg-warning text-warning-foreground">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Active Enrollments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeEnrollments}</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="enrollments">Enrollments</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="subscription">Subscription</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
            <div className="grid gap-4">
              {courses.map((course) => (
                <Card key={course.id} className="hover:shadow-elegant transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold">{course.title}</h3>
                          <Badge variant={course.status === "Active" ? "success" : "secondary"}>
                            {course.status}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                          <span>{course.category} • {course.level}</span>
                          <span className="flex items-center">
                            <Users className="mr-1 h-3 w-3" />
                            {course.students.toLocaleString()} students
                          </span>
                          <span className="flex items-center">
                            <DollarSign className="mr-1 h-3 w-3" />
                            {course.price}
                          </span>
                          <span>Updated: {course.lastUpdated}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="mr-2 h-3 w-3" />
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="mr-2 h-3 w-3" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="mr-2 h-3 w-3" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="enrollments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Enrollments</CardTitle>
                <CardDescription>Latest students who enrolled in your courses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentEnrollments.map((enrollment, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div>
                        <h4 className="font-medium">{enrollment.student}</h4>
                        <p className="text-sm text-muted-foreground">{enrollment.course}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{enrollment.amount}</p>
                        <p className="text-sm text-muted-foreground">{enrollment.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Growth Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Student Growth</span>
                      <span className="text-success font-medium">+15.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Revenue Growth</span>
                      <span className="text-success font-medium">+23.8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Course Completion Rate</span>
                      <span className="text-success font-medium">87.5%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Courses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Web Development</span>
                      <span className="text-sm font-medium">2,847 students</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Digital Marketing</span>
                      <span className="text-sm font-medium">3,156 students</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">React Advanced</span>
                      <span className="text-sm font-medium">892 students</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="subscription" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {subscriptionPlans.map((plan, index) => (
                <Card key={index} className={`relative ${plan.current ? 'border-primary shadow-elegant' : ''}`}>
                  {plan.current && (
                    <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary">
                      Current Plan
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle>{plan.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary">{plan.price}</div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-sm">{plan.courses}</p>
                      <p className="text-sm">{plan.students}</p>
                      {plan.features.map((feature, i) => (
                        <p key={i} className="text-sm text-muted-foreground">• {feature}</p>
                      ))}
                    </div>
                    <Button 
                      variant={plan.current ? "outline" : "hero"} 
                      className="w-full mt-6"
                      disabled={plan.current}
                    >
                      {plan.current ? "Current Plan" : "Upgrade"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default InstituteDashboard;