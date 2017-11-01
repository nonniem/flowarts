export function loadPicture(picture){
    return {
        type: "LOAD_PICTURE",
        picture
    }
}

export function addPicture(picture){
    return{
        type: "ADD_PICTURE",
        picture
    }
}

export function deletePicture(index){
    return {
        type: "DELETE_PICTURE",
        index
    }
}
