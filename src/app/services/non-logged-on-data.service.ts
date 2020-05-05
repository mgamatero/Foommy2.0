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
          'Welcome to my humble kitchen.  I will cook in front of you, enjoy the food, company and make a friend in me.',
        chefName: 'Mike Non Logged On',
        placeDesc:
          'Homely little dining area.  Pretty casual vibe here.  Staff and family members are part of this kitchen as we serve you.',
          theDiningArea:
           'We have a 6 seat table in our family patio. Eat with our family, or with privacy as you need.',
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
        image: 'https://assets.kraftfoods.com/recipe_images/opendeploy/118519_640x428.jpg'

      },
      {
        id: 'BBBBB',
        aboutKitchen:
          'Welcome to my humble kitchen.  I will cook in front of you, enjoy the food, company and make a friend in me.',
        chefName: '2nd Chef - Non Logged On',
        placeDesc:
          'Family kitchen to experience for you. This is loud, fun, casual.',
          theDiningArea:
          'Nice patio setup under a string of patio lights.',
        additionalInfo:
          'Kitchen staff and family members are in/out of my kitchen.',
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
          'https://tse1.mm.bing.net/th?id=OIP.8D_rb6Akp-e8rX0_bOYYkwHaFj&pid=Api&P=0&w=231&h=174'
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
