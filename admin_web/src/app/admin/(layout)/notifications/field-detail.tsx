'use client'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"

type NotificationsFieldDetailProps = {
    open: boolean
    onShow: () => void
}

const NotificationsFieldDetail = ({ open, onShow }: NotificationsFieldDetailProps) => {
    return (
        <Sheet open={open} onOpenChange={onShow}>
            <SheetContent className='sm:max-w-sm md:w-[700px] md:max-w-[700px]'>
                <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default NotificationsFieldDetail
