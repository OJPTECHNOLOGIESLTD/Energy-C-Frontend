interface Order {
    id: string;
    userId: string;
    items: [
        {
            name: string;
            weight: string | number;
            price: string;
        }
    ]
    totalWeight: string;
    totalPrice: string;
    date: string;
    address: string;
    city: {
        id: string;
        name: string;
    }
    state: {
        id: string;
        name: string;
    }
    pickupType: string;
    images: [
        {
            file: FormData
        }
    ]
}

interface WasteItem {
    name: string;
    weight: string | number;
    price: string;
    image: File
    video: File
    description: string;
    instructions: [
        {
            id: string;
            name: string;
        }
    ]
}