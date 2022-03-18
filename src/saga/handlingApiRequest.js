import * as fetch from "./fatchRequest";
import {call, put, takeEvery} from 'redux-saga/effects'
import * as actions from '../reducers/allActions/mainAction'
import {typee} from '../reducers/allType'

//saga handling the reading info from the database
function* apiHandle(){
 
   try{ 
    const usersRequest=yield call(fetch.fetchInfo())
    console.log('saga is being read the request')
    //console.log(usersRequest)
    yield put(typee.USER_READ_REQUEST,usersRequest)
    
   }catch(e){
     // yield put({type:'USER_FAIL',error:e})
     console.log('saga faces error')
     yield put(typee.USER_FAIL,e)
   }    
}

//saga handles the create request from the database
function* apiCreate(){
  try{
    const userRead=yield call(fetch.createInfo())
    console.log('saga has been able to read')
    yield put(typee.USER_CREATE_REQUEST,userRead)
  }catch(e){
      yield put(typee.USER_FAIL,e)
  }
}


//saga handles the update request from the databsae
function* apiUpdate(){
  try{
     const userUpdate=yield call(fetch.updateInfo())
     console.log('saga able to update the request')
     yield put(typee.USER_UPDATE_REQUEST,userUpdate)
  }catch(e){
    console.log('saga face error'+e)
    yield put(typee.USER_FAIL,e)
  }
}

// saga handles the delete request
function* apiDelete(){
  try{
   const userDelete=yield call(fetch.deleteInfo())
   console.log('saga be able to delete users')
   yield put(typee.USER_DELETE_REQUEST,userDelete)
  }catch(e){
     console.log('saga faces error '+e)
     yield put(typee.USER_DELETE_REQUEST,e)
  }
}

export  function* allRequest(){
    yield takeEvery(typee.USER_READ_REQUEST,apiHandle)
    yield takeEvery(typee.USER_CREATE_REQUEST,apiCreate)
    yield takeEvery(typee.USER_UPDATE_REQUEST,apiUpdate)
    yield takeEvery(typee.USER_DELETE_REQUEST,apiDelete)
}