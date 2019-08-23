import {fetchItems,addItem, removeItem , submitOrder } from './types'
import {combineReducers} from 'redux'

const State = {
    userId: "",
    items:[],
    orderItems: []
}

 function itemReducer(state=State, action) {
     console.log(state)
   switch (action.type) {
       case fetchItems:
           return{
            ...state,
            items:action.items
           } 
         
    default:
         return   state
   }

}

function manageOrderReducer(state=State, action)
{

    switch (action.type) {
        
        case addItem:
             let  orderItems=state.orderItems
                  action.item.orderId=orderItems.length+1;
                  orderItems.push(action.item)
                 
            return{
             ...state,
             orderItems:orderItems
            } 
        case   removeItem:
                let  orderItemss=state.orderItems
                let neww=orderItemss.filter(item=>{
                if(item.orderId==action.item.id)return false
                      return true})
                console.log(neww)
                return{...state,orderItems:neww} 

        case submitOrder:
                return{...state,orderItems:[]} 

     default:
          return   state
    }
}



let reducer=combineReducers({
    products:itemReducer,
    manageOrder:manageOrderReducer,
    
})
export default reducer;