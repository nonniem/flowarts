import {main} from "./main";

const state = {
    pictures: []
}

const reducer = function(prevState = state, action){
    return{
        pictures: pictures(prevState.pictures, action)
    }
}

export default reducer;
