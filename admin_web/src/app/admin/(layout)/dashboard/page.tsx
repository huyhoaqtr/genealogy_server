import { BarChartComponent } from "@/app/admin/(layout)/dashboard/bar-chart"
import { LineChartComponent } from "@/app/admin/(layout)/dashboard/line-chart"
import { PieChartComponent } from "@/app/admin/(layout)/dashboard/pie-chart"
import TotalCardComponent from "@/components/global/total-card"
import TotalRevenueCard from "@/app/admin/(layout)/dashboard/total-revenue-card"
export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0 ">
      <div className="grid auto-rows-min gap-4 md:grid-cols-4">
        {
          Array.from({ length: 4 }).map((_, i) => (
            <TotalCardComponent
              key={i}
              title='Total Revenue'
              content='1,000,000'
              desc='This month'
            />
          ))
        }
      </div>
      <div className="grid auto-rows-min gap-4 md:grid-cols-7">
        <div className="col-span-2">
          <PieChartComponent className="max-h-[20rem] min-h-[20rem]" />
        </div>
        <div className="col-span-3">
          <BarChartComponent className="max-h-[20rem] min-h-[20rem]" />
        </div>
        <div className="col-span-2">
          <TotalRevenueCard className="max-h-[20rem] min-h-[20rem]" />
        </div>
      </div>
      <div className="max-h-[25rem]">
        <LineChartComponent />
      </div>
      <div className="h-8" />
    </div>

  )
}
