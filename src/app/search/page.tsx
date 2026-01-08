import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const recentSearches = [
    "User analytics",
    "Revenue reports",
    "System settings",
    "New users",
]

const suggestedResults = [
    { title: "Dashboard Overview", category: "Page", url: "/" },
    { title: "Payment History", category: "Reports", url: "/payments" },
    { title: "User Management", category: "Admin", url: "/users" },
    { title: "Profile Settings", category: "Settings", url: "/settings" },
]

const SearchPage = () => {
    return (
        <div className="flex flex-col gap-6 p-4 max-w-4xl mx-auto">
            <div className="space-y-2">
                <h1 className="text-2xl font-bold">Search</h1>
                <p className="text-muted-foreground">Find pages, settings, and users across the platform.</p>
            </div>

            <div className="flex gap-2">
                <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search anything..."
                        className="pl-8 w-full md:w-2/3 lg:w-1/2"
                    />
                </div>
                <Button>Search</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Recent Searches</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {recentSearches.map((term) => (
                                <Button key={term} variant="outline" size="sm" className="rounded-full">
                                    {term}
                                </Button>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Suggested</CardTitle>
                        <CardDescription>Based on your activity</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            {suggestedResults.map((result) => (
                                <li key={result.title} className="flex items-center justify-between p-2 hover:bg-muted rounded-md cursor-pointer transition-colors">
                                    <div>
                                        <p className="font-medium text-sm">{result.title}</p>
                                        <p className="text-xs text-muted-foreground">{result.category}</p>
                                    </div>
                                    <span className="text-xs text-muted-foreground">Jump to &rarr;</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default SearchPage
