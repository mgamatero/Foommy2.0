import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NonLoggedOnDataService {
  nonLoggedOnChefs: any;
  nonLoggedOnDish: any;
  constructor(private http:HttpClient) {
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

    this.nonLoggedOnDish = [
      {
        "id": "11111",
        "chefOwner": "AAAAA",
        "dishName": "Rice Skillet",
        "dishType": "Side Dish",
        "dishDescription": "Delicious rice skillet dish.  Healthy, full of protein.  Spicy, tasy",
        "ingredients": [
          "Potatoes",
          "Rice",
          "Peas",
          "Garbanzo",
          "Carrots",
          "Seasoning"
        ],
        "dishImage": "https://i.pinimg.com/originals/2b/aa/bb/2baabb6129c498f48ac4118ae96edcdc.jpg"
      },
      {
        "id": "22222",
        "chefOwner": "AAAAA",
        "dishName": "Steak",
        "dishType": "Main",
        "dishDescription": "Steak - we suggest medium rare to medium well for this one",
        "ingredients": [
          "Angus Beef",
          "Potatoes",
          "Spinach"
        ],
        "dishImage": "https://realfood.tesco.com/media/images/Jimmys-Steak-for-two-4979eab2-67f7-4524-a62a-f54951b1df60-0-472x310.jpg"
      },
      {
        "id": "33333",
        "chefOwner": "BBBBB",
        "dishName": "Salmon with White Bean Salae",
        "dishType": "Main",
        "dishDescription": "Simple Salmon dish with our special seasoning.  This makes it not so simple anymore.",
        "ingredients": [
          "Salmon",
          "Seasoning",
          "Lettuce",
          "White Bean",
          "Olive Oil"
        ],
        "dishImage": "https://wildalaskasalmonandseafood.com/wp-content/uploads/2016/12/alaskasalmonwhitebeansalad-e1482946780221-300x300.jpg"
      },
      {
        "id": "44444",
        "chefOwner": "BBBBB",
        "dishName": "Drunken Chicken",
        "dishType": "Main",
        "dishDescription": "Chicken grilled over beer can.  Classic recipe.",
        "ingredients": [
          "Chicken",
          "Beer",
          "Seasoning"
        ],
        "dishImage": "https://vignette.wikia.nocookie.net/familyrecipes/images/4/49/Beer_can_chicken-01.jpg/revision/latest?cb=20110516131708"
      }
    ]
  }

  getNonLoggedOnChef(): any {
    return this.nonLoggedOnChefs;
  }

  getNonLoggedOnChefByID(id): any {
    const chefById = this.nonLoggedOnChefs.filter((chefs) => {
      return chefs.id === id;
    });
    // console.log('tempchefbyid: ', byId)
    return chefById;
  }








  getNonLoggedOnDishes(): any {
    return this.nonLoggedOnDish;
    // I CANNOT GET THIS TO WORK IN HTML??
    // this.http.get('../assets/data/notloggedon-dishes.json').subscribe(dishes=>{
    //   console.log(dishes);
    //   this.nonLoggedOnDish = dishes;
    //   return this.nonLoggedOnDish;
    // })
  }

  getNonLoggedOnDishesByID(id): any {
    const dishByChefId = this.nonLoggedOnDish.filter((dishes) => {
      return dishes.chefOwner === id;
    });
    // console.log('tempchefbyid: ', byId)
    return dishByChefId;
  }
}
