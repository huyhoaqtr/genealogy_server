import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

type Props = {
    title: string
    content: string
    desc?: string
}

const TotalCardComponent = ({ title, content, desc }: Props) => {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-normal">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{content}</div>
                {
                    desc && <p className="text-xs text-muted-foreground">
                        {desc}
                    </p>
                }
            </CardContent>
        </Card>
    )
}

export default TotalCardComponent