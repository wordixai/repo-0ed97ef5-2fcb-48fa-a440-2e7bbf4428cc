import { Employee, Department, LeaveRequest, Attendance, Payroll, Performance } from '@/types/hr';

export const mockEmployees: Employee[] = [
  {
    id: '1',
    employeeId: 'EMP001',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@company.com',
    phone: '+1 (555) 123-4567',
    department: 'Engineering',
    position: 'Senior Software Engineer',
    salary: 95000,
    hireDate: '2022-01-15',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    address: {
      street: '123 Main St',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94102'
    },
    emergencyContact: {
      name: 'Jane Doe',
      relationship: 'Spouse',
      phone: '+1 (555) 987-6543'
    }
  },
  {
    id: '2',
    employeeId: 'EMP002',
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@company.com',
    phone: '+1 (555) 234-5678',
    department: 'Marketing',
    position: 'Marketing Manager',
    salary: 78000,
    hireDate: '2021-08-20',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5cc?w=150&h=150&fit=crop&crop=face',
    address: {
      street: '456 Oak Ave',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94103'
    },
    emergencyContact: {
      name: 'Mike Johnson',
      relationship: 'Spouse',
      phone: '+1 (555) 876-5432'
    }
  },
  {
    id: '3',
    employeeId: 'EMP003',
    firstName: 'Michael',
    lastName: 'Chen',
    email: 'michael.chen@company.com',
    phone: '+1 (555) 345-6789',
    department: 'Finance',
    position: 'Financial Analyst',
    salary: 68000,
    hireDate: '2023-03-10',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    address: {
      street: '789 Pine St',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94104'
    },
    emergencyContact: {
      name: 'Lisa Chen',
      relationship: 'Sister',
      phone: '+1 (555) 765-4321'
    }
  },
  {
    id: '4',
    employeeId: 'EMP004',
    firstName: 'Emily',
    lastName: 'Davis',
    email: 'emily.davis@company.com',
    phone: '+1 (555) 456-7890',
    department: 'HR',
    position: 'HR Specialist',
    salary: 62000,
    hireDate: '2022-11-05',
    status: 'on-leave',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    address: {
      street: '321 Elm St',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94105'
    },
    emergencyContact: {
      name: 'Robert Davis',
      relationship: 'Father',
      phone: '+1 (555) 654-3210'
    }
  },
  {
    id: '5',
    employeeId: 'EMP005',
    firstName: 'David',
    lastName: 'Wilson',
    email: 'david.wilson@company.com',
    phone: '+1 (555) 567-8901',
    department: 'Engineering',
    position: 'Product Manager',
    salary: 105000,
    hireDate: '2020-06-15',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    address: {
      street: '654 Maple Ave',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94106'
    },
    emergencyContact: {
      name: 'Mary Wilson',
      relationship: 'Spouse',
      phone: '+1 (555) 543-2109'
    }
  }
];

export const mockDepartments: Department[] = [
  {
    id: '1',
    name: 'Engineering',
    description: 'Software development and technical operations',
    managerId: '5',
    employeeCount: 25,
    budget: 2500000
  },
  {
    id: '2',
    name: 'Marketing',
    description: 'Brand management and customer acquisition',
    managerId: '2',
    employeeCount: 12,
    budget: 800000
  },
  {
    id: '3',
    name: 'Finance',
    description: 'Financial planning and accounting',
    managerId: '3',
    employeeCount: 8,
    budget: 600000
  },
  {
    id: '4',
    name: 'HR',
    description: 'Human resources and talent management',
    managerId: '4',
    employeeCount: 5,
    budget: 400000
  },
  {
    id: '5',
    name: 'Sales',
    description: 'Revenue generation and client relations',
    managerId: '1',
    employeeCount: 18,
    budget: 1200000
  }
];

export const mockLeaveRequests: LeaveRequest[] = [
  {
    id: '1',
    employeeId: '1',
    employeeName: 'John Doe',
    type: 'vacation',
    startDate: '2024-02-15',
    endDate: '2024-02-22',
    days: 6,
    reason: 'Family vacation to Hawaii',
    status: 'pending',
    submittedDate: '2024-01-20'
  },
  {
    id: '2',
    employeeId: '2',
    employeeName: 'Sarah Johnson',
    type: 'sick',
    startDate: '2024-01-18',
    endDate: '2024-01-19',
    days: 2,
    reason: 'Flu symptoms',
    status: 'approved',
    submittedDate: '2024-01-17',
    approvedBy: 'HR Manager',
    approvedDate: '2024-01-17'
  },
  {
    id: '3',
    employeeId: '4',
    employeeName: 'Emily Davis',
    type: 'maternity',
    startDate: '2024-03-01',
    endDate: '2024-05-01',
    days: 60,
    reason: 'Maternity leave',
    status: 'approved',
    submittedDate: '2024-01-15',
    approvedBy: 'HR Manager',
    approvedDate: '2024-01-16'
  }
];

export const mockAttendance: Attendance[] = [
  {
    id: '1',
    employeeId: '1',
    date: '2024-01-22',
    clockIn: '09:00',
    clockOut: '17:30',
    totalHours: 8.5,
    status: 'present'
  },
  {
    id: '2',
    employeeId: '2',
    date: '2024-01-22',
    clockIn: '08:45',
    clockOut: '17:15',
    totalHours: 8.5,
    status: 'present'
  },
  {
    id: '3',
    employeeId: '3',
    date: '2024-01-22',
    clockIn: '09:15',
    clockOut: '17:45',
    totalHours: 8.5,
    status: 'late'
  }
];

export const mockPayroll: Payroll[] = [
  {
    id: '1',
    employeeId: '1',
    employeeName: 'John Doe',
    period: 'January 2024',
    baseSalary: 7916.67,
    overtime: 500,
    bonuses: 1000,
    deductions: 1200,
    netPay: 8216.67,
    status: 'processed',
    payDate: '2024-01-31'
  },
  {
    id: '2',
    employeeId: '2',
    employeeName: 'Sarah Johnson',
    period: 'January 2024',
    baseSalary: 6500,
    overtime: 0,
    bonuses: 500,
    deductions: 950,
    netPay: 6050,
    status: 'paid',
    payDate: '2024-01-31'
  }
];

export const mockPerformance: Performance[] = [
  {
    id: '1',
    employeeId: '1',
    employeeName: 'John Doe',
    reviewPeriod: 'Q4 2023',
    overallRating: 4.5,
    goals: ['Complete project migration', 'Mentor junior developers', 'Improve code quality'],
    achievements: ['Successfully migrated 3 major systems', 'Mentored 2 junior developers', 'Reduced bug count by 30%'],
    areasForImprovement: ['Communication with stakeholders', 'Documentation'],
    reviewerId: '5',
    reviewerName: 'David Wilson',
    reviewDate: '2024-01-15',
    status: 'completed'
  }
];