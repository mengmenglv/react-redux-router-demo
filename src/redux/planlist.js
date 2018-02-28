import * as types from '../actions/action-type.js';
import data from '../data/db.js'
const initialState = {
    show: false,
    planlist: data,
    editItem: {
        id: '',
        title: '',
        content: ''
    }
};

const planReducer = function (state = initialState, action) {
    let list = state.planlist;
    switch (action.type) {
        case types.ADD:
            list.push(action.item);
            return Object.assign({}, state, {planlist: list});
        case types.EDIT:
            list.map((v, k) => {
                if (v.id === action.id) {
                    v.title = action.item.title;
                    v.content = action.item.content;
                }
            })
            return Object.assign({}, state, {planlist: list});
        case types.DELECT:
            let newstate = list.filter((item) => item.id != action.id);
            return Object.assign({}, state, {planlist: newstate});
            ;
        case types.SHOW:
            return Object.assign({}, state, {show: action.show, editItem: action.item || {
                id:'',title:'',content:''
            }});
    }
    return state;

}

export default planReducer;