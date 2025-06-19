"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Chart } from "@/components/ui/chart"

// Sample data for the interest distribution
const interestData = [
  { id: 1, name: "How Things Work", color: "#FF6B6B", current: 30, previous: 20, trend: "up" },
  { id: 2, name: "Big Questions", color: "#4ECDC4", current: 15, previous: 20, trend: "down" },
  { id: 3, name: "Creativity & Expression", color: "#FFD166", current: 20, previous: 15, trend: "up" },
  { id: 4, name: "World & Cultures", color: "#6A0572", current: 10, previous: 15, trend: "down" },
  { id: 5, name: "Nature & Life", color: "#1A936F", current: 20, previous: 25, trend: "down" },
  { id: 6, name: "Self & Emotions", color: "#C06C84", current: 5, previous: 5, trend: "stable" },
]

export function InterestMap() {
  // Prepare data for pie chart
  const pieChartData = {
    labels: interestData.map((item) => item.name),
    datasets: [
      {
        data: interestData.map((item) => item.current),
        backgroundColor: interestData.map((item) => item.color),
        borderColor: interestData.map((item) => item.color),
        borderWidth: 1,
      },
    ],
  }

  return (
    <Card className="col-span-1 md:col-span-1">
      <CardHeader>
        <div>
          <CardTitle>Interest Distribution</CardTitle>
          <CardDescription>This Week's Curiosity Distribution</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[350px] relative">
          <Chart
            type="pie"
            data={{
              labels: pieChartData.labels,
              datasets: pieChartData.datasets,
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: "right",
                },
                tooltip: {
                  callbacks: {
                    label: (context) => {
                      const label = context.label || ""
                      const value = context.raw || 0
                      return `${label}: ${value}%`
                    },
                  },
                },
              },
            }}
          />
        </div>
      </CardContent>
    </Card>
  )
}
