export interface User {
  name: string;
  email: string;
  avatar: string;
}

export interface Stats {
  visitors: number;
  posts: number;
  revenue: number;
  orders: number;
}

export interface Commission {
  rate: number;
  currentBalance: number;
  dueDate: string;
  paymentEmail: string | null;
}

export interface Links {
  trackingLink: string;
  couponCode: string;
}

export interface EarningsCalculation {
  currentPosts: number;
  potentialEarnings: number;
}

