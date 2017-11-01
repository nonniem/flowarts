let defaultPicture = [];
export function pictures(prevPictures = defaultPicture, action){
    let newPictures = [...prevPictures];
    switch(action.type){
        case "ADD_PICTURE":
            newPictures.push(action.pictures);
            return newPictures;

        case "LOAD_PICTURE":
            return action.pictures;

        case "DELETE_PICTURE":
            return newPictures.filter((picture)=>{
                return action.id !== picture._id
            });

            default:
                return prevPictures;
    }
}
