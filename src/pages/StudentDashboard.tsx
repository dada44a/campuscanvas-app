import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Calendar, Trophy, Clock, PlayCircle, FileText, Star } from "lucide-react";

const StudentDashboard = () => {
  const enrolledCourses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      institute: "TechPro Academy",
      progress: 75,
      nextLesson: "React Hooks Deep Dive",
      totalLessons: 48,
      completedLessons: 36,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=150&fit=crop"
    },
    {
      id: 2,
      title: "Data Science with Python",
      institute: "DataMind Institute",
      progress: 45,
      nextLesson: "Machine Learning Basics",
      totalLessons: 64,
      completedLessons: 29,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=150&fit=crop"
    },
    {
      id: 3,
      title: "UX/UI Design Fundamentals",
      institute: "Design Studio",
      progress: 90,
      nextLesson: "Final Project Review",
      totalLessons: 32,
      completedLessons: 29,
      image: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=300&h=150&fit=crop"
    }
  ];

  const achievements = [
    { name: "First Course Completed", date: "2024-01-15", icon: Trophy },
    { name: "Web Development Expert", date: "2024-02-20", icon: Star },
    { name: "Quick Learner", date: "2024-03-10", icon: Clock }
  ];

  const upcomingDeadlines = [
    { course: "Web Development", task: "Final Project", due: "Dec 15, 2024" },
    { course: "Data Science", task: "Assignment 3", due: "Dec 20, 2024" },
    { course: "UX/UI Design", task: "Portfolio Review", due: "Dec 25, 2024" }
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
              <span className="text-sm text-muted-foreground">Welcome, Sarah</span>
              <Button variant="outline" size="sm">Profile</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Learning Dashboard</h1>
          <p className="text-muted-foreground">Track your progress and continue learning</p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-primary text-primary-foreground">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Enrolled Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
            </CardContent>
          </Card>
          
          <Card className="bg-success text-success-foreground">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
            </CardContent>
          </Card>
          
          <Card className="bg-accent text-accent-foreground">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Certificates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
            </CardContent>
          </Card>
          
          <Card className="bg-warning text-warning-foreground">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Study Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">127</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
            <div className="grid gap-6">
              {enrolledCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden hover:shadow-elegant transition-smooth">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{course.title}</h3>
                          <p className="text-muted-foreground">{course.institute}</p>
                        </div>
                        <Badge variant="secondary">
                          {course.completedLessons}/{course.totalLessons} lessons
                        </Badge>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Next Lesson:</p>
                          <p className="font-medium">{course.nextLesson}</p>
                        </div>
                        <Button variant="hero" className="ml-4">
                          <PlayCircle className="mr-2 h-4 w-4" />
                          Continue Learning
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Learning Streak</CardTitle>
                  <CardDescription>Your consistent learning journey</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">15</div>
                    <p className="text-muted-foreground">Days in a row</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>This Week's Goal</CardTitle>
                  <CardDescription>Complete 5 lessons</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Lessons completed</span>
                      <span>3/5</span>
                    </div>
                    <Progress value={60} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index}>
                  <CardContent className="flex items-center space-x-4 p-6">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <achievement.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{achievement.name}</h3>
                      <p className="text-sm text-muted-foreground">Earned on {achievement.date}</p>
                    </div>
                    <Badge variant="secondary">Completed</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Upcoming Deadlines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingDeadlines.map((deadline, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div>
                        <h4 className="font-medium">{deadline.task}</h4>
                        <p className="text-sm text-muted-foreground">{deadline.course}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{deadline.due}</p>
                        <Badge variant="warning" className="mt-1">Due Soon</Badge>
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

export default StudentDashboard;