export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    changePassword:boolean;
    onboardingStep: number;
    userType?: {
      createdAt: string;
      description: string;
      id: string;
      name: string;
      updatedAt: string
    };
    customer: {
      id: string;
      category: string;
      status: string
    }
  }