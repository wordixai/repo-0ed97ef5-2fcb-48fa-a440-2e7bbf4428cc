import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, UserPlus, Calendar, FileText, Clock } from "lucide-react";

const quickActions = [
  {
    title: "Add Employee",
    description: "Register a new employee",
    icon: UserPlus,
    action: () => console.log("Add employee"),
    variant: "default" as const
  },
  {
    title: "New Leave Request",
    description: "Submit time off request",
    icon: Calendar,
    action: () => console.log("New leave request"),
    variant: "outline" as const
  },
  {
    title: "Generate Report",
    description: "Create HR reports",
    icon: FileText,
    action: () => console.log("Generate report"),
    variant: "outline" as const
  },
  {
    title: "Clock In/Out",
    description: "Record attendance",
    icon: Clock,
    action: () => console.log("Clock in/out"),
    variant: "outline" as const
  }
];

export function QuickActions() {
  return (
    <Card className="animate-slide-in">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Frequently used HR operations</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action) => (
            <Button
              key={action.title}
              variant={action.variant}
              className="h-auto p-4 flex flex-col items-center space-y-2"
              onClick={action.action}
            >
              <action.icon className="h-5 w-5" />
              <div className="text-center">
                <div className="font-medium text-sm">{action.title}</div>
                <div className="text-xs text-muted-foreground">{action.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}