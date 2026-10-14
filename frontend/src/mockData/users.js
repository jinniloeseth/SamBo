const mockUsers = [
  {
    id: 1,
    name: "Jinni Løseth",
    username: "jinni",
    password: "password123",
    roomNumber: "152",
    role: "Student",
    featureSettings: null,
  },
    {
    id: 2,
    name: "Sammen Admin",
    username: "admin",
    password: "admin123",
    roomNumber: "",
    role: "Admin",
    featureSettings: {
      showEvents: true,
      showBuySellRent: true,
      showEquipmentBooking: true,
      showNearbyStudentDeals: true,
    },
  },
];

export default mockUsers;