import { BarChartComponent } from "@/app/admin/(layout)/dashboard/bar-chart"
import { LineChartComponent } from "@/app/admin/(layout)/dashboard/line-chart"
import { PieChartComponent } from "@/app/admin/(layout)/dashboard/pie-chart"
import TotalCardComponent from "@/app/admin/(layout)/dashboard/total-card"
import TotalRevenueCard from "@/app/admin/(layout)/dashboard/total-revenue-card"
import { AppSidebar } from "@/components/app-sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
type Props = {
    children: React.ReactNode
}

const DashboardLayout = ({ children }: Props) => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="#">
                                        Dashboard
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                {children}
            </SidebarInset>
        </SidebarProvider>
    )
}

export default DashboardLayout