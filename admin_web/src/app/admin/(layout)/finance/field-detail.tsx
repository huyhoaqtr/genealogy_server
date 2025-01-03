'use client'
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from '@/components/ui/drawer'
import React from 'react'

type Props = {
    open: boolean
    onShow: () => void
}

const FinanceFieldDetail = ({ open, onShow }: Props) => {
    return (
        <Drawer open={open} onOpenChange={onShow}>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>

    )
}

export default FinanceFieldDetail