import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";

const recentActivities = [
  {
    id: 1,
    type: 'leave_request',
    user: 'John Doe',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    action: 'submitted a vacation request',
    time: '2 hours ago',
    status: 'pending'
  },
  {
    id: 2,
    type: 'attendance',
    user: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5cc?w=150&h=150&fit=crop&crop=face',
    action: 'clocked in late',
    time: '3 hours ago',
    status: 'noted'
  },
  {
    id: 3,
    type: 'new_employee',
    user: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    action: 'joined the Finance department',
    time: '1 day ago',
    status: 'completed'
  },
  {
    id: 4,
    type: 'performance',
    user: 'Emily Davis',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    action: 'completed quarterly review',
    time: '2 days ago',
    status: 'approved'
  }
];

const getActivityIcon = (type: string) => {
  switch (type) {
    case 'leave_request':
      return <Calendar className="h-4 w-4" />;
    case 'attendance':
      return <Clock className="h-4 w-4" />;
    case 'new_employee':
      return <User className="h-4 w-4" />;
    default:
      return <User className="h-4 w-4" />;
  }
};

const getStatusVariant = (status: string) => {
  switch (status) {
    case 'pending':
      return 'secondary';
    case 'approved':
      return 'default';
    case 'completed':
      return 'default';
    default:
      return 'secondary';
  }
};

export function RecentActivity() {
  return (
    <Card className="animate-slide-in">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest updates and actions in the system</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={activity.avatar} alt={activity.user} />
                <AvatarFallback>
                  {activity.user.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium leading-none">
                    {activity.user}
                  </p>
                  <div className="flex items-center space-x-1">
                    {getActivityIcon(activity.type)}
                    <Badge variant={getStatusVariant(activity.status)} className="text-xs">
                      {activity.status}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {activity.action}
                </p>
                <p className="text-xs text-muted-foreground">
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}