import axios from "axios";
let picturesUrl = "http://localhost:4444/pictures/"

export function loadPicture(){
    return(dispatch)=>{
        axios.get(picturesUrl).then(response=>{
            dispatch ({
                type: "LOAD_PICTURE",
                pictures: response.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export function addPicture(picture){
    return(dispatch)=>{
        axios.post(picturesUrl, picture).then((response)=>{
                dispatch ({
                    type: "ADD_PICTURE",
                    pictures: response.data
            })
        })
    }}


export function deletePicture(id){
    return(dispatch)=>{
        axios.delete(picturesUrl + id).then((response)=>{
            dispatch({
                type: "DELETE_PICTURE",
                id
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }}
