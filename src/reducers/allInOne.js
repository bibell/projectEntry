import {allRequest} from '../saga/handlingApiRequest'
import {typee} from './allType'
import * as allActions from './allActions/mainAction' 
//create reducer function that used for user salary
export const reducer=(state='',action)=>{
  
     if(action.type===typee.USER_SALARY){
        return state='salary must be number'
     }else{
         return state
     }
 }
 
 
 //now create the second reducers
 export const secondReducer=(state='',action)=>{
     if(action.type===typee.USER_GENDER){
         return state='M or F is only allowed'
     }
 }
 
 
 export const nameReducer=(state='',action)=>{
     if(action.type===typee.USER_NAME){
         return state='user name must be valid string'
     }
     else{
         return state
     }
 }

 //create the reducer that hanldes the database response
 
 export const responseReducers=(state={users:[],error:''},action)=>{
     if(action.type===typee.USER_READ_REQUEST){
         return {...state,users:action.payload}
     }
     else if(action.type===typee.USER_CREATE_REQUEST){
         return{
             ...state,
             users:action.payload
         }
     }

     else if(action.type===typee.USER_UPDATE_REQUEST){
         return{
             ...state,
             users:action.payload
         }
     }

     else if(action.type===typee.USER_DELETE_REQUEST){
         return{
             ...state,
             users:action.payload
         }
     }
     else if(action.type===typee.USER_FAIL){
         return {...state,error:action.e}
     }
     else{
         return state
     }
 }


 
 