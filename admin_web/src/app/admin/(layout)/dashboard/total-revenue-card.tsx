'use client'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import React from 'react'
import { LineChart, Line } from 'recharts'

type Props = {
    className?: string
}

const data = [
    {
        revenue: 10400,
        subscription: 240,
    },
    {
        revenue: 14405,
        subscription: 300,
    },
    {
        revenue: 9400,
        subscription: 200,
    },
    {
        revenue: 8200,
        subscription: 278,
    },
    {
        revenue: 7000,
        subscription: 189,
    },
    {
        revenue: 9600,
        subscription: 239,
    },
    {
        revenue: 11244,
        subscription: 278,
    },
    {
        revenue: 26475,
        subscription: 189,
    },
]

const chartConfig = {
    revenue: {
        label: "Revenue",
        color: "hsl(var(--primary))",
    },
    subscription: {
        label: "Subscriptions",
        color: "hsl(var(--primary))",
    },
} satisfies ChartConfig

const TotalRevenueCard = ({ className }: Props) => {
    return (
        <Card className={className}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-normal">Total Revenue</CardTitle>
            </CardHeader>
            <CardContent className="pb-0">
                <div className="text-2xl font-bold">$15,231.89</div>
                <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                </p>
                <ChartContainer config={chartConfig} className="h-[80px] w-full">
                    <LineChart
                        data={data}
                        margin={{
                            top: 5,
                            right: 10,
                            left: 10,
                            bottom: 0,
                        }}
                    >
                        <ChartTooltip
                            cursor={false}
                            content={
                                <ChartTooltipContent
                                    indicator="line"
                                    nameKey="visitors"
                                    hideLabel
                                />
                            }
                        />

                        <Line
                            type="monotone"
                            strokeWidth={2}
                            dataKey="revenue"
                            stroke="var(--color-revenue)"
                            activeDot={{
                                r: 6,
                            }}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

export default TotalRevenueCard