interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  image: string;
  phoneNumber: string;
  wasteWeight: string;
  level: string;
  points: string;
  isVerified: string;
  otp: string;
  verificationToken: string;
  created_at: string;
  updated_at: string;
}

interface Register {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
}

interface Order {
  id: string;
  orderId: string;
  userId: string;
  items: [OrderItem];
  totalWeight: string;
  totalPrice: string;
  date: string;
  address: string;
  city: {
    id: string;
    name: string;
  };
  state: {
    id: string;
    name: string;
  };
  pickupType: "Home" | "Station";
  images: [
    {
      file: FormData;
    }
  ];
  status: "Approved" | "Pending" | "Cancelled" | "Completed";
  point: number;
}

interface WasteItem {
  name: string;
  weight: string | number;
  price: string;
  image: File;
  video: File;
  description: string;
  instructions: [
    {
      id: string;
      description: string;
    }
  ];
}

interface OrderItem {
  name: string;
  category: "Metal" | "Paper" | "Condemned Battery" | "Rubber" | "Plastic";
  weight: string | number;
  price: string;
  point: number;
  date: string;
  address: string;
  image: File;
  video: File;
}

interface CancelledOrder {
  orderId: string;
  name: string;
  price: number;
  image: string;
  weight: string;
  date: string;
  address: string;
  status: string;
}
