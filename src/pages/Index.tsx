import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { 
  Users, 
  Building2, 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  Clock 
} from "lucide-react";
import { mockEmployees, mockDepartments, mockLeaveRequests } from "@/lib/mockData";

const Index = () => {
  const totalEmployees = mockEmployees.length;
  const activeEmployees = mockEmployees.filter(emp => emp.status === 'active').length;
  const totalDepartments = mockDepartments.length;
  const pendingLeaveRequests = mockLeaveRequests.filter(req => req.status === 'pending').length;
  const totalPayroll = mockEmployees.reduce((sum, emp) => sum + emp.salary, 0);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <div className="flex flex-1 items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold">HR Dashboard</h1>
              <p className="text-sm text-muted-foreground">Welcome to the HR Management System</p>
            </div>
            <div className="text-sm text-muted-foreground">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>
        </header>
        
        <main className="flex-1 space-y-6 p-6">
          {/* Stats Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              title="Total Employees"
              value={totalEmployees}
              description={`${activeEmployees} active employees`}
              icon={Users}
              trend={{ value: 12, isPositive: true }}
            />
            <StatsCard
              title="Departments"
              value={totalDepartments}
              description="Active departments"
              icon={Building2}
            />
            <StatsCard
              title="Pending Requests"
              value={pendingLeaveRequests}
              description="Leave requests awaiting approval"
              icon={Calendar}
              trend={{ value: -8, isPositive: false }}
            />
            <StatsCard
              title="Monthly Payroll"
              value={`$${(totalPayroll / 12).toLocaleString()}`}
              description="Total monthly payroll"
              icon={DollarSign}
              trend={{ value: 5, isPositive: true }}
            />
          </div>

          {/* Main Content Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Recent Activity - Takes 2 columns on large screens */}
            <div className="lg:col-span-2">
              <RecentActivity />
            </div>
            
            {/* Quick Actions - Takes 1 column */}
            <div>
              <QuickActions />
            </div>
          </div>

          {/* Additional Stats */}
          <div className="grid gap-4 md:grid-cols-3">
            <StatsCard
              title="Attendance Rate"
              value="94.5%"
              description="This month's attendance"
              icon={Clock}
              trend={{ value: 2, isPositive: true }}
            />
            <StatsCard
              title="Employee Satisfaction"
              value="4.2/5"
              description="Based on recent surveys"
              icon={TrendingUp}
              trend={{ value: 8, isPositive: true }}
            />
            <StatsCard
              title="Training Completed"
              value="78%"
              description="Employees completed mandatory training"
              icon={Users}
              trend={{ value: 15, isPositive: true }}
            />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Index;