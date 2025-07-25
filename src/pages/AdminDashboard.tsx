import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, Building2, Users, DollarSign, TrendingUp, Settings, Shield, BarChart3 } from "lucide-react";

const AdminDashboard = () => {
  const platformStats = {
    totalInstitutes: 156,
    totalStudents: 45673,
    totalCourses: 1234,
    monthlyRevenue: "$234,560"
  };

  const institutes = [
    {
      id: 1,
      name: "TechPro Academy",
      courses: 12,
      students: 8943,
      revenue: "$45,670",
      plan: "Professional",
      status: "Active",
      joinDate: "2023-06-15"
    },
    {
      id: 2,
      name: "DataMind Institute",
      courses: 8,
      students: 5234,
      revenue: "$28,450",
      plan: "Basic",
      status: "Active",
      joinDate: "2023-08-22"
    },
    {
      id: 3,
      name: "Design Studio",
      courses: 15,
      students: 12567,
      revenue: "$67,890",
      plan: "Enterprise",
      status: "Active",
      joinDate: "2023-04-10"
    },
    {
      id: 4,
      name: "Marketing Pro",
      courses: 6,
      students: 3456,
      revenue: "$19,230",
      plan: "Basic",
      status: "Pending",
      joinDate: "2024-01-05"
    }
  ];

  const subscriptionPlans = [
    {
      name: "Basic Plan",
      price: "$29",
      institutes: 67,
      revenue: "$1,943",
      features: ["Up to 5 courses", "Up to 100 students", "Basic analytics"]
    },
    {
      name: "Professional Plan",
      price: "$99",
      institutes: 78,
      revenue: "$7,722",
      features: ["Up to 20 courses", "Up to 1000 students", "Advanced analytics"]
    },
    {
      name: "Enterprise Plan",
      price: "$299",
      institutes: 11,
      revenue: "$3,289",
      features: ["Unlimited courses", "Unlimited students", "All features"]
    }
  ];

  const recentActivities = [
    { type: "New Institute", message: "CodeMasters Academy joined the platform", time: "2 hours ago" },
    { type: "Subscription", message: "TechPro Academy upgraded to Enterprise plan", time: "5 hours ago" },
    { type: "Course", message: "New course 'AI Fundamentals' was published", time: "1 day ago" },
    { type: "Payment", message: "Monthly subscription payment received from Design Studio", time: "2 days ago" }
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
                EduCanvas Admin
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                <Shield className="mr-1 h-3 w-3" />
                Super Admin
              </Badge>
              <Button variant="outline" size="sm">
                <Settings className="mr-2 h-3 w-3" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Platform Administration</h1>
          <p className="text-muted-foreground">Manage institutes, plans, and platform analytics</p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-primary text-primary-foreground">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium opacity-90 flex items-center">
                <Building2 className="mr-2 h-4 w-4" />
                Total Institutes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{platformStats.totalInstitutes}</div>
            </CardContent>
          </Card>
          
          <Card className="bg-success text-success-foreground">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium opacity-90 flex items-center">
                <Users className="mr-2 h-4 w-4" />
                Total Students
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{platformStats.totalStudents.toLocaleString()}</div>
            </CardContent>
          </Card>
          
          <Card className="bg-accent text-accent-foreground">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium opacity-90 flex items-center">
                <BookOpen className="mr-2 h-4 w-4" />
                Total Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{platformStats.totalCourses.toLocaleString()}</div>
            </CardContent>
          </Card>
          
          <Card className="bg-warning text-warning-foreground">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium opacity-90 flex items-center">
                <DollarSign className="mr-2 h-4 w-4" />
                Monthly Revenue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{platformStats.monthlyRevenue}</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="institutes" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="institutes">Institutes</TabsTrigger>
            <TabsTrigger value="plans">Subscription Plans</TabsTrigger>
            <TabsTrigger value="analytics">Platform Analytics</TabsTrigger>
            <TabsTrigger value="activities">Recent Activities</TabsTrigger>
          </TabsList>

          <TabsContent value="institutes" className="space-y-6">
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <Input placeholder="Search institutes..." className="md:w-1/3" />
              <Select>
                <SelectTrigger className="md:w-48">
                  <SelectValue placeholder="Filter by plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Plans</SelectItem>
                  <SelectItem value="basic">Basic</SelectItem>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="enterprise">Enterprise</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="md:w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="suspended">Suspended</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Institutes List */}
            <div className="grid gap-4">
              {institutes.map((institute) => (
                <Card key={institute.id} className="hover:shadow-elegant transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold">{institute.name}</h3>
                          <Badge variant={institute.status === "Active" ? "success" : "warning"}>
                            {institute.status}
                          </Badge>
                          <Badge variant="outline">{institute.plan}</Badge>
                        </div>
                        <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <BookOpen className="mr-1 h-3 w-3" />
                            {institute.courses} courses
                          </span>
                          <span className="flex items-center">
                            <Users className="mr-1 h-3 w-3" />
                            {institute.students.toLocaleString()} students
                          </span>
                          <span className="flex items-center">
                            <DollarSign className="mr-1 h-3 w-3" />
                            {institute.revenue}/month
                          </span>
                          <span>Joined: {institute.joinDate}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">View Details</Button>
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm">Suspend</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="plans" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {subscriptionPlans.map((plan, index) => (
                <Card key={index} className="hover:shadow-elegant transition-smooth">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{plan.name}</CardTitle>
                        <div className="text-3xl font-bold text-primary mt-2">{plan.price}<span className="text-sm font-normal text-muted-foreground">/month</span></div>
                      </div>
                      <Button variant="outline" size="sm">Edit Plan</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-primary">{plan.institutes}</div>
                          <div className="text-sm text-muted-foreground">Institutes</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-success">{plan.revenue}</div>
                          <div className="text-sm text-muted-foreground">Revenue</div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium">Features:</h4>
                        {plan.features.map((feature, i) => (
                          <p key={i} className="text-sm text-muted-foreground">• {feature}</p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Platform Growth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Institute Growth</span>
                      <span className="text-success font-medium">+12.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Student Growth</span>
                      <span className="text-success font-medium">+28.3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Revenue Growth</span>
                      <span className="text-success font-medium">+31.7%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Course Creation Rate</span>
                      <span className="text-success font-medium">+18.9%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="mr-2 h-5 w-5" />
                    Plan Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Basic Plan</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{width: '43%'}}></div>
                        </div>
                        <span className="text-sm font-medium">43%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Professional Plan</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-muted rounded-full h-2">
                          <div className="bg-success h-2 rounded-full" style={{width: '50%'}}></div>
                        </div>
                        <span className="text-sm font-medium">50%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Enterprise Plan</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-muted rounded-full h-2">
                          <div className="bg-accent h-2 rounded-full" style={{width: '7%'}}></div>
                        </div>
                        <span className="text-sm font-medium">7%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="activities" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Platform Activities</CardTitle>
                <CardDescription>Latest actions and events on the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-muted/50 rounded-lg">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <Badge variant="outline" className="text-xs">{activity.type}</Badge>
                          <span className="text-xs text-muted-foreground">{activity.time}</span>
                        </div>
                        <p className="text-sm">{activity.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;