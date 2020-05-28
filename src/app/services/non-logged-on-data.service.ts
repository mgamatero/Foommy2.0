import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NonLoggedOnDataService {
  nonLoggedOnChefs: any;
  constructor() {
    this.nonLoggedOnChefs = [
      {
        id: 'AAAAA',
        aboutKitchen:
          'Welcome to my humble kitchen.  I specialize in Italian-Asian Fusion.  You will enjoy not only our food, but the whole dining experience as well!',
        chefName: 'Chef Sunny',
        placeDesc:
          'Homely little dining area.  Pretty casual vibe here.  Staff and family members are part of this kitchen as we serve you.',
          theDiningArea:
           'We have a tables in our patio area. Eat with our family, or with privacy as you need.',
         additionalInfo:
           'Alcohol is not served.  You can bring a bottle of wine, only if you share',
        street: '1234 Any St',
        city: 'Tustin',
        state: 'CA',
        howToGetThere:
          'We are by the 5 fwy, Tustin Ranch exit.  Close to Costco',
        diningOptions: ['Dine in', 'Takeout'],
        paymentMethod: ['Venmo', 'ApplePay', 'Paypal', 'Cash', 'Other'],
        availability: 'MWF noontime only',
        seatingCapacity: '6 guests',
        advanceReservation: 'Same Day',
        prepTime: '2 day notice',
        image: 'https://tse4.mm.bing.net/th?id=OIP.lttKwfeg7Y9XcX_NKMKy3QHaHa&pid=Api&P=0'

      },
      {
        id: 'BBBBB',
        aboutKitchen:
          'Family kitchen experience. This is a loud, fun, casual experience. You might even be asked to help cook!  Homely little dining area.  Pretty casual vibe here.  Staff and family members are part of this kitchen as we serve you.',
        chefName: 'Cucina de Mike',
        placeDesc:
          'Family kitchen to experience for you. This is a loud, fun, casual experience.',
          theDiningArea:
          'Nice patio setup under a string of patio lights.',
        additionalInfo:
          'Kitchen staff and family members are in/out of my kitchen. Be aware of this.',
          street: '9987 Main St',
        city: 'Anaheim Hills',
        state: 'CA',
        howToGetThere:
          '55/91 Fwy intersection, close to Shell gas station.',
        diningOptions: ['Dine in'],
        paymentMethod: ['Venmo', 'ApplePay', 'Paypal', 'Cash', 'Other'],
        availability: 'MWF noontime only',
        seatingCapacity: '4 guests',
        advanceReservation: 'Same Day',
        prepTime: '2 day notice',
        image:
          'https://tse3.mm.bing.net/th?id=OIP.kxjCHP_LdPIF_Y8nh6-r-QHaIg&pid=Api&P=0'
             },
    ];
  }

  getNonLoggedOnData(): any {
    return this.nonLoggedOnChefs;
  }

  getNonLoggedOnDataByID(id): any {
    const byId = this.nonLoggedOnChefs.filter((chefs) => {
      return chefs.id === id;
    });
    // console.log('tempchefbyid: ', byId)
    return byId;
  }
}
