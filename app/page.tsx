import { DashboardHeader } from "@/components/dashboard-header"
import { InterestMap } from "@/components/interest-map"
import { WeeklySummary } from "@/components/weekly-summary"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <DashboardHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InterestMap />
        <WeeklySummary />
      </div>

      <div className="flex justify-center mt-4">
        <Button size="lg" className="gap-2" asChild>
          <Link href="https://v0-curiosity-dashboard-elzgiy.vercel.app" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" />
            View Full Dashboard
          </Link>
        </Button>
      </div>
    </div>
  )
}
