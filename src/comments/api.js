import apiUrl from '../apiConfig'
import axios from 'axios'

export const index = (user, treeId) => {
  console.log("treeId")
  console.log(user)
  return axios({
    method: 'GET',
    url: apiUrl + `/trees/${treeId}/comments`,
    headers: {
        'Authorization': `Bearer ${user.token}`
      }
  })
} 

  
export const show = (user, commentId) => {
  
    return axios({
      method: 'GET',
      url: apiUrl + `/comments/${commentId}`,
    //   headers: {
    //       'Authorization': `Bearer ${user.token}`
    //     }
    })
  }


  export const create = (user, newComment, treeId) => {
    return axios({
      method: 'POST', 
      url: apiUrl + `/trees/${treeId}/comments`,
      headers: {
          'Authorization': `Bearer ${user.token}`
        }, 
        data:{
          comment: newComment
        }
    })

  } 
  // '/trees/:tree_id/comments'

  export const update = (user, updateComment, commentId) => {
    return axios({
      method: 'PUT', 
      url: apiUrl + `/comments/${commentId}`,
      headers: {
          'Authorization': `Bearer ${user.token}`
        }, 
        data:{
          comment: updateComment
        }
    })
  }
  
  export const destroy = (user, commentId) => {
    return axios({
      method: 'DELETE', 
      url: apiUrl + `/comments/${commentId}`,
      headers: {
          'Authorization': `Bearer ${user.token}`
        }
    })
  }




// import apiUrl from '../apiConfig';
// import Axios from 'axios'


// export const index = (user, treeId) => {
//     // console.log('tree id', treeId)
//     return  Axios({
//         method:'GET',
//         url: apiUrl + `/trees/${treeId}/comments`,
//         // headers:{
//         //     "Authorization":`Bearer ${user.token}`
//         // }
//     })
// }


// export const show = ( user, commentId) => {
//     return Axios({
//         method:'GET',
//         url: apiUrl + `/comments/${commentId}`,
//         headers:{
//             "Authorization":`Bearer ${user.token}`
//         } 
//     })
// }


// export const create = (user, newComment, treeId) => {
//     return Axios({
//         method:'tree',
//         url:apiUrl + `/trees/${treeId}/comments/`,
//         // headers:{
//         //     "Authorization":`Bearer ${user.token}`
//         // },
//         data:{
//             comment: newComment
//         }
//     })
// }


// export const destroy = (user, commentId) => {
//     return Axios({
//         method:"DELETE",
//         url:apiUrl + `/comments/${commentId}`,
//         headers:{
//             "Authorization":`Bearer ${user.token}`
//         }
//     })
// }



// export const update = (user,updateComment,commentId) => {
//     return Axios({
//         method:'PUT',
//         url:apiUrl + `/comments/${commentId}`,
//         headers:{
//             "Authorization":`Bearer ${user.token}`
//         },
//         data:{
//             comment:updateComment
//         }
//     })
// }

