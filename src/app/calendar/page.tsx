
"use client"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

const CalendarPage = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())

    return (
        <div className="flex flex-col gap-4 p-4">
            <h1 className="text-2xl font-bold">Calendar</h1>
            <div className="flex flex-col md:flex-row gap-4">
                <Card className="w-fit h-fit">
                    <CardHeader>
                        <CardTitle>My Schedule</CardTitle>
                        <CardDescription>Manage your daily events</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border"
                        />
                    </CardContent>
                </Card>

                <Card className="flex-1">
                    <CardHeader>
                        <CardTitle>Upcoming Events</CardTitle>
                        <CardDescription>You have 3 events today.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border">
                                    <div className="w-2 h-12 bg-primary rounded-full"></div>
                                    <div>
                                        <h3 className="font-semibold">Team Meeting {i}</h3>
                                        <p className="text-sm text-muted-foreground">10:00 AM - 11:30 AM</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default CalendarPage
