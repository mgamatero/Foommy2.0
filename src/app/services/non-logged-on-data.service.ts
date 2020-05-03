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
        chefName: 'Mike Non Logged On',
        image: 'https://image.flaticon.com/icons/png/512/306/306003.png',
        cuisine: 'Mediterranean',
        diningOptions: ['Dine in','Takeout'],
        location:"Tustin,CA",
hours: 'M-F 11:30-9PM',
theDiningArea:'We have a 6 seat table in our family patio. Eat with our family, or with privacy as you need.',
howToGetThere:'We are really close to the Tustin Ranch exit by the 5 fwy',
additionalInfo:'Our dining experience is best for quiet and relaxed times with family/friends.  Loud behavior is not tolerated.'
      },
      {
        id: 'BBBBB',
        chefName: '2nd Mike Non Logged On',
        image:
          'https://www.1400foodlab.com/wp-content/uploads/Chef-icon-600x600.jpg',
        cuisine: 'Indian',
        diningOptions: ['Dine in','Takeout'],
        location:"Costa Mesa,CA",
        hours: 'Sat-Sun Noontime only',
        theDiningArea:'Table of 8 at our garage area.',
        howToGetThere:'Close to the 405f fwy, Harbor exit',
        additionalInfo:'Bring alcohol but you need to share with the host.  No rude behavior.  Kids welcome'
      }
    ];
  }

  getNonLoggedOnData(): any {
    return this.nonLoggedOnChefs;
  }
}
