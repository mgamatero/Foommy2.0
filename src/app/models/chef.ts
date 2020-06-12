export interface ChefModel {
  id: string;
  foommyImage: string;
  chefName: string;
  aboutKitchen: string;
  placeDesc: string;
  theDiningArea: string;
  additionalInfo: string;
  availableDays: string;
  availableTimes: string;
  contactEmail: string;
  contactPhone: string;
  city: string;
  state: string;
  howToGetThere: string;
  diningOptions: string[];
  paymentMethod: string[];
  availability: string;
  seatingCapacity: string;
  advanceReservation: string;
  prepTime: string;
  cuisineType: string;
}

// id: 'AAAAA',---
//       aboutKitchen:----
//         'Welcome to my humble kitchen.  I specialize in Italian-Asian Fusion.  You will enjoy not only our food, but the whole dining experience as well!',
//       chefName: 'Chef Sunny',----
//       placeDesc:-----
//         'Homely little dining area.  Pretty casual vibe here.  Staff and family members are part of this kitchen as we serve you.',
//         theDiningArea:
//          'We have a tables in our patio area. Eat with our family, or with privacy as you need.',
//        additionalInfo:
//          'Alcohol is not served.  You can bring a bottle of wine, only if you share',
//       street: '1234 Any St',
//       city: 'Tustin',
//       state: 'CA',
//       howToGetThere:
//         'We are by the 5 fwy, Tustin Ranch exit.  Close to Costco',
//       diningOptions: ['Dine in', 'Takeout'],
//       paymentMethod: ['Venmo', 'ApplePay', 'Paypal', 'Cash', 'Other'],
//       availability: 'MWF noontime only',
//       seatingCapacity: '6 guests',
//       advanceReservation: 'Same Day',
//       prepTime: '2 day notice',
//       image: 'https://tse4.mm.bing.net/th?id=OIP.lttKwfeg7Y9XcX_NKMKy3QHaHa&pid=Api&P=0'-----
