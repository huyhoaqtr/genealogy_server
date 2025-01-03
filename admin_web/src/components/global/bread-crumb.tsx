'use client'
import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
} from "@/components/ui/breadcrumb"
import { usePathname } from 'next/navigation'

const BreadCrumbComponent = () => {
    const navigateMap = {
        "/admin/dashboard": "Dashboard",
        "/admin/notifications": "Thông báo",
        "/admin/finance": "Tài chính",
        "/admin/account": "Tài khoản",
        "/admin/family": "Dòng họ"
    }

    const pathname = usePathname();

    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                    {navigateMap[pathname as keyof typeof navigateMap]}
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default BreadCrumbComponent