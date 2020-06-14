export interface DishModel {
  id?:string;
  chefOwnerID: string;
  dishName: string;
  dishType: string;
  cuisineType: string;
  dishDescription: string;
  ingredients: string[];
  allergens: string[];
  dishImage: string;
}

// {
//   "id": "11111",
//   "chefOwner": "AAAAA",
//   "dishName": "Rice Skillet",
//   "dishType": "Side Dish",
//   "dishDescription": "Delicious rice skillet dish.  Healthy, full of protein.  Spicy, tasy",
//   "ingredients": [
//     "Potatoes",
//     "Rice",
//     "Peas",
//     "Garbanzo",
//     "Carrots",
//     "Seasoning"
//   ],
// "allergens":[
// "eggs"
// ],
//   "dishImage": "https://i.pinimg.com/originals/2b/aa/bb/2baabb6129c498f48ac4118ae96edcdc.jpg"
// }
