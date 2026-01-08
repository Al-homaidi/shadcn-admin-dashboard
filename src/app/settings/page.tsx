"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"

const SettingsPage = () => {
    const [activeTab, setActiveTab] = useState("account")

    return (
        <div className="flex flex-col gap-4 p-4">
            <h1 className="text-2xl font-bold">Settings</h1>

            <div className="w-full max-w-4xl space-y-4">
                {/* Custom Tabs */}
                <div className="grid w-full grid-cols-3 bg-muted p-1 rounded-lg">
                    <button
                        onClick={() => setActiveTab("account")}
                        className={`text-sm font-medium py-1.5 transition-all rounded-md ${activeTab === "account" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:bg-background/50"}`}
                    >
                        Account
                    </button>
                    <button
                        onClick={() => setActiveTab("notifications")}
                        className={`text-sm font-medium py-1.5 transition-all rounded-md ${activeTab === "notifications" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:bg-background/50"}`}
                    >
                        Notifications
                    </button>
                    <button
                        onClick={() => setActiveTab("appearance")}
                        className={`text-sm font-medium py-1.5 transition-all rounded-md ${activeTab === "appearance" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:bg-background/50"}`}
                    >
                        Appearance
                    </button>
                </div>

                {activeTab === "account" && (
                    <Card>
                        <CardHeader>
                            <CardTitle>Account Information</CardTitle>
                            <CardDescription>Update your profile details and personal information.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First name</Label>
                                    <Input id="firstName" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last name</Label>
                                    <Input id="lastName" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="john.doe@example.com" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="bio">Bio</Label>
                                <textarea
                                    id="bio"
                                    placeholder="Tell us a little about yourself"
                                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                            </div>
                            <div className="flex justify-end">
                                <Button>Save Changes</Button>
                            </div>
                        </CardContent>
                    </Card>
                )}

                {activeTab === "notifications" && (
                    <Card>
                        <CardHeader>
                            <CardTitle>Notifications</CardTitle>
                            <CardDescription>Manage how you receive notifications.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between p-4 border rounded-lg">
                                <div className="space-y-0.5">
                                    <Label className="text-base">Email Notifications</Label>
                                    <p className="text-sm text-muted-foreground">Receive daily digests of your activity.</p>
                                </div>
                                <Checkbox />
                            </div>
                            <div className="flex items-center justify-between p-4 border rounded-lg">
                                <div className="space-y-0.5">
                                    <Label className="text-base">Push Notifications</Label>
                                    <p className="text-sm text-muted-foreground">Receive real-time alerts on your device.</p>
                                </div>
                                <Checkbox checked />
                            </div>
                            <div className="flex items-center justify-between p-4 border rounded-lg">
                                <div className="space-y-0.5">
                                    <Label className="text-base">Marketing Emails</Label>
                                    <p className="text-sm text-muted-foreground">Receive news and updates from our team.</p>
                                </div>
                                <Checkbox />
                            </div>
                        </CardContent>
                    </Card>
                )}

                {activeTab === "appearance" && (
                    <Card>
                        <CardHeader>
                            <CardTitle>Appearance</CardTitle>
                            <CardDescription>Customize the look and feel of the application.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="space-y-2 cursor-pointer">
                                    <div className="h-24 rounded-lg bg-slate-100 border-2 border-primary"></div>
                                    <p className="text-sm font-medium text-center">Light</p>
                                </div>
                                <div className="space-y-2 cursor-pointer">
                                    <div className="h-24 rounded-lg bg-slate-900 border-2 border-transparent hover:border-primary"></div>
                                    <p className="text-sm font-medium text-center">Dark</p>
                                </div>
                                <div className="space-y-2 cursor-pointer">
                                    <div className="h-24 rounded-lg bg-linear-to-br from-slate-100 to-slate-900 border-2 border-transparent hover:border-primary"></div>
                                    <p className="text-sm font-medium text-center">System</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    )
}

export default SettingsPage
