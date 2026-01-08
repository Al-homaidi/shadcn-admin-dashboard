import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

const mails = [
    {
        id: 1,
        name: "William Smith",
        email: "williamsmith@example.com",
        subject: "Meeting Tomorrow",
        text: "Hi, let's meet tomorrow to discuss the project...",
        date: "10:23 AM",
        read: false,
    },
    {
        id: 2,
        name: "Alice Smith",
        email: "alicesmith@example.com",
        subject: "Re: Project Update",
        text: "I've updated the files as requested. Please review...",
        date: "Yesterday",
        read: true,
    },
    {
        id: 3,
        name: "Bob Johnson",
        email: "bobjohnson@example.com",
        subject: "Weekend Plans",
        text: "Are we still on for hiking this weekend?",
        date: "2 days ago",
        read: true,
    },
    {
        id: 4,
        name: "Emily Davis",
        email: "emilydavis@example.com",
        subject: "Design Review",
        text: "Can you take a look at the attached designs?",
        date: "3 days ago",
        read: true,
    }
]

const InboxPage = () => {
    return (
        <div className="flex flex-col gap-4 p-4 h-[calc(100vh-100px)]">
            <h1 className="text-2xl font-bold">Inbox</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
                {/* Mail List */}
                <Card className="col-span-1 h-full flex flex-col">
                    <CardHeader>
                        <CardTitle>Messages</CardTitle>
                        <CardDescription>You have {mails.filter(m => !m.read).length} unread messages.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 p-0">
                        <ScrollArea className="h-full">
                            <div className="flex flex-col gap-2 p-4 pt-0">
                                {mails.map((mail) => (
                                    <button
                                        key={mail.id}
                                        className={`flex items-start gap-4 p-4 rounded-lg border text-left transition-colors hover:bg-muted ${!mail.read ? "bg-muted/50 font-medium" : "bg-card"
                                            }`}
                                    >
                                        <Avatar>
                                            <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${mail.email}`} />
                                            <AvatarFallback>{mail.name[0]}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1 space-y-1">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-semibold">{mail.name}</span>
                                                <span className="text-xs text-muted-foreground">{mail.date}</span>
                                            </div>
                                            <div className="text-sm font-medium leading-none">{mail.subject}</div>
                                            <div className="text-xs text-muted-foreground line-clamp-2">
                                                {mail.text}
                                            </div>
                                        </div>
                                        {!mail.read && <div className="w-2 h-2 mt-2 rounded-full bg-primary" />}
                                    </button>
                                ))}
                            </div>
                        </ScrollArea>
                    </CardContent>
                </Card>

                {/* Mail Detail (Placeholder) */}
                <Card className="col-span-1 md:col-span-2 h-full flex flex-col justify-center items-center text-center p-8 text-muted-foreground">
                    <div className="max-w-md space-y-4">
                        <h3 className="text-lg font-semibold">Select a message</h3>
                        <p>Choose a message from the list to view its contents.</p>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default InboxPage
