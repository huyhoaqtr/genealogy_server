/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Plus } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'


const CreateNotificationForm = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const form = useForm()

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <Dialog open={isOpen} defaultOpen={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
            <DialogTrigger>
                <Button >
                    <Plus />
                    <span>Tạo thông báo</span>
                </Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-sm md:w-[700px] md:max-w-[700px]'>
                <DialogHeader>
                    <DialogTitle>Tạo thông báo đến người dùng</DialogTitle>
                    <DialogDescription>
                        Điền thông tin để tạo thông báo đến người dùng ứng dụng của bạn.
                    </DialogDescription>
                </DialogHeader>
                <Form  {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tiêu đề</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Nhập tiêu đề"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="sendType"
                            render={() => (
                                <FormItem>
                                    <FormLabel>Loại tài khoản</FormLabel>
                                    <FormControl>
                                        <Select>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Chọn loại tài khoản" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Loại tài khoản</SelectLabel>
                                                    <SelectItem value="patriarch">Tộc trưởng</SelectItem>
                                                    <SelectItem value="all-account">Tất cả tài khoản</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormDescription />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="content"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nội dung</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Nhập nội dung"
                                            maxLength={1000}
                                            className='max-h-[500px] min-h-[150px]'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex justify-end space-x-2">
                            <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
                                Hủy
                            </Button>
                            <Button type="submit">
                                Tạo thông báo
                            </Button>
                        </div>
                    </form>
                </Form>

            </DialogContent>
        </Dialog >

    )
}

export default CreateNotificationForm