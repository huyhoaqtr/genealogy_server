
import { AppSidebar } from "@/components/global/app-sidebar"
import BreadCrumbComponent from "@/components/global/bread-crumb"

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
                        <BreadCrumbComponent />
                    </div>
                </header>
                {children}
            </SidebarInset>
        </SidebarProvider>
    )
}

export default DashboardLayout