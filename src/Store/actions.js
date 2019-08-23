import {fetchItems,addItem,removeItem,submitOrder} from './types'

export function addItemToOrder(item) {
   
    return { type: addItem, item }
  }

  export function fetchItemsFromBackend() {
 
  let  items=[{_id:"11111",name:"product one",price:1000,quantity:100,imageName:"a.jpeg",categorie:"test1",subcategorie:"subCat1",rating:3,descreption:"this product is very good and very good tany"}
    ,{_id:"22",name:"product Two",price:5000,quantity:200,imageName:"ll.jpeg",categorie:"test1",subcategorie:"subCat2",rating:4,descreption:"this product is very good and very good tany"}
    ,{_id:"555",name:"product Three",price:9000,quantity:500,imageName:"b.jpeg",categorie:"test1",subcategorie:"subCat1",rating:2,descreption:"this product is very good and very good tany"}
    ,{_id:"666",name:"product four",price:1000,quantity:100,imageName:"a.jpeg",categorie:"test1",subcategorie:"subCat2",rating:3,descreption:"this product is very good and very good tany"}
    ,{_id:"77",name:"product  five",price:1000,quantity:200,imageName:"ll.jpeg",categorie:"test1",subcategorie:"subCat2",rating:4,descreption:"this product is very good and very good tany"}
    ,{_id:"888",name:"product six",price:10000,quantity:500,imageName:"b.jpeg",categorie:"test1",subcategorie:"subCat2",rating:2,descreption:"this product is very good and very good tany"},
    {_id:"999",name:"product seven",price:1000,quantity:100,imageName:"a.jpeg",categorie:"test1",subcategorie:"subCat1",rating:3,descreption:"this product is very good and very good tany"}
    ,{_id:"1010",name:"product eight",price:2000,quantity:200,imageName:"ll.jpeg",categorie:"test1",subcategorie:"subCat2",rating:4,descreption:"this product is very good and very good tany"}
    ,{_id:"12",name:"product nine",price:9000,quantity:500,imageName:"b.jpeg",categorie:"test1",subcategorie:"subCat2",rating:2,descreption:"this product is very good and very good tany"}]
  
      return {type:fetchItems,items:items}

}
  export function removeItemFromOrder(item) {
    return { type: removeItem, item }
  }

  export function submitOrderTobackend(order) {
   
    //send the order To the Backed using axios for example or fetch 
  
    return { type: submitOrder}
  }


