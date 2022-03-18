import {typee} from '../allType'
import { view } from '../../saga/fatchRequest'
//create the second actions
export const teraName=()=>{
    return{
        type:typee.USER_NAME
    }
}

//create the third action
export const teraGender=()=>{
    return{
        type:typee.USER_GENDER
    }

}

//create the other action
export const teraSalary=()=>{
    return{
        type:typee.USER_SALARY
    }
}

//create action creator that hold the database response
export const gain=(ress)=>{
    return {
        type:'ress'
    }
}

export const user_get_request=()=>{
    return {
        type:typee.USER_READ_REQUEST,
        payload:view.readUsers
    }
}

export const user_create_request=()=>{
     return{
         type:typee.USER_CREATE_REQUEST,
         payload:view.createUsers
     }
}

export const user_update_request=()=>{
    return{
        type:typee.USER_UPDATE_REQUEST,
        payload:view.updateUsers
    }
}

export const user_delete_request=()=>{
    return{
        type:typee.USER_DELETE_REQUEST,
        payload:view.deleteUsers
    }
}

export const user_fail=(error)=>{
    return{
        type:typee.USER_FAIL,
        message:error
    }
}