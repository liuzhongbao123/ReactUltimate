import {
    ADDNUM
} from './type';

let initState = {
    arr: [{
        count: 0
    }]
};

export default (state = initState, actions) => {
    let { type, text } = actions;
    switch (type) {
        case "ADDNUM":
            {
                return {...state, arr: [...text] };
            };
        case "UPDATE":
            {
                return {...state, arr: [...text] };
            };
        case "PLUS":
            {
                return {...state, arr: [...text] };
            };
        default:
            {
                return state;
            };
    };
};