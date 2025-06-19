import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Lightbulb, Microscope, Rocket } from "lucide-react"

// Sample activity data
const activities = [
  {
    id: 1,
    title: "Dinosaur Fossil Excavation",
    description: "Create a DIY fossil dig experience at home",
    icon: Microscope,
    category: "Hands-on",
  },
  {
    id: 2,
    title: "Volcano Science Experiment",
    description: "Build a model volcano and learn about eruptions",
    icon: Rocket,
    category: "Science",
  },
  {
    id: 3,
    title: "Prehistoric Animals Book",
    description: "Explore 'When Dinosaurs Roamed the Earth'",
    icon: BookOpen,
    category: "Reading",
  },
]

export function SuggestedActivities() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Suggested Activities</CardTitle>
          <CardDescription>Personalized activities based on your child's interests</CardDescription>
        </div>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted transition-colors">
              <div className="bg-primary/10 p-2 rounded-full">
                <activity.icon className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{activity.title}</h4>
                  <span className="text-xs text-muted-foreground">{activity.category}</span>
                </div>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
              </div>
              <Button variant="ghost" size="sm">
                <Lightbulb className="h-4 w-4 mr-2" />
                Try It
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
