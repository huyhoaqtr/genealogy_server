import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'



const TotalCardComponent = () => {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-normal">Subscriptions</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-muted-foreground">
                    +180.1% from last month
                </p>

            </CardContent>
        </Card>
    )
}

export default TotalCardComponent