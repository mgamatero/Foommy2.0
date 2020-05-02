import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NonLoggedOnDataService {
  nonLoggedOnChefs: any;
  constructor() {
    this.nonLoggedOnChefs = [
      {
        chefName: 'Mike Non Logged On',
        image: 'https://image.flaticon.com/icons/png/512/306/306003.png',
        cuisine: 'Mediterranean',
      },
      {
        chefName: '2nd Mike Non Logged On',
        image:
          'https://www.1400foodlab.com/wp-content/uploads/Chef-icon-600x600.jpg',
        cuisine: 'Indian',
      },
    ];
  }

  getNonLoggedOnData():any{
    return this.nonLoggedOnChefs;
  }
}
