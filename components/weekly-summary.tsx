"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function WeeklySummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Summary</CardTitle>
        <CardDescription>A personalized summary of your child's learning journey this week</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-muted p-4 rounded-lg">
          <p className="text-sm">
            "This week, Avani explored dinosaurs and ancient animals. She was particularly interested in how they became
            extinct and what the world looked like millions of years ago. She also showed interest in volcanoes and
            their role in Earth's history."
          </p>
          <div className="text-xs text-muted-foreground mt-4 text-right">March 18, 2025</div>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">Suggested Conversation Starters</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                1
              </span>
              <span>"If you could travel back in time to see dinosaurs, which period would you visit and why?"</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                2
              </span>
              <span>"What do you think causes volcanoes to erupt? Let's look it up together!"</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                3
              </span>
              <span>"Would you like to visit a natural history museum this weekend?"</span>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
