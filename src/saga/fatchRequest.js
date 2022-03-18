import axios from 'axios'

export const view={
    createUsers:[],
    readUsers:[],
    updateUsers:[],
    deleteUsers:[] 
}

export const fetchInfo=axios.get('http://localhost:7000/employee/api/read/employeeInfo')
                      .then((response)=>{
                          console.log('response is comming from saga api call')
                          console.log(response.data)
                          view.readUsers=response.data
                          //return response.data
                      }).catch((e)=>{
                          console.log('api call error from saga')
                          return e
                      })

export const createInfo= axios.post('http://localhost:7000/employee/api/creat/employeeInfo')
                        .then((response)=>{
                        console.log('employee has been created sucessfully...')
                        view.createUsers=response.data
                        console.log(response.data)
                      // window.location.reload()
                      }).catch((e)=>{
                   console.log('unable to send the requiest due to '+e)
                       })


export const deleteInfo=axios.get('http://localhost:7000/employee/api/read/employeeInfo')         
                             .then((response)=>{
                                //this.setState({users:response.data})
                                view.deleteUsers=response.data
                                console.log(response.data)
                           }).catch((e)=>{
                             alert('unable to send the request due to '+e)
                            })
                                
                            
export const updateInfo=axios.put('http://localhost:7000/employee/api/update/employeeInfo/')
                        .then((response)=>{
                                 console.log(response.data)
                        // alert('Employee '+this.state.name+' updated succesfully')
                        view.updateUsers=response.data
                          document.querySelector('.edit').style.display='none'
                          //window.location.reload()
                         }).catch((e)=>{
                            alert("updating problems "+e)
                             })                            
                             