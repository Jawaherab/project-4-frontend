import apiUrl from '../apiConfig';
import Axios from 'axios'


export const index = (user) => {
    return  Axios({
        method:'GET',
        url: apiUrl + '/trees',
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}

export const All = (user) => {
    return  Axios({
        method:'GET',
        url: apiUrl + '/dashboard',
    })
}


export const show = (user, treeId) => {
    return Axios({
        method:'GET',
        url: apiUrl + `/trees/${treeId}`,
        // headers:{
        //     "Authorization":`Bearer ${user.token}`
        // }
    })
}


export const create = (user, newTree) => {
    return Axios({
        method:'POST',
        url:apiUrl + '/trees',
        headers:{
            "Authorization":`Bearer ${user.token}`
        },
        data:{
            tree: newTree
        }
    })
}


export const destroy = (user, treeId) => {
    return Axios({
        method:"DELETE",
        url:apiUrl + `/trees/${treeId}`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}



export const update = (user,updateTree,treeId) => {
    return Axios({
        method:'PUT',
        url:apiUrl + `/trees/${treeId}`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        },
        data:{
            tree:updateTree
        }
    })
}



// export default GoogleApiWrapper({
//     apiKey: 'https://www.google.com/maps/embed/v1/MODE?key=AIzaSyDhGUWbhyJqfEQ_ZnMLoHw0pyH0o1myVr0&parameters'
//   })(MapContainer);
