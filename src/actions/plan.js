import * as types from './action-type.js';

export function addPlan(item) {
    return {
        type: types.ADD,
        item
    };
}

export function deletePlan(id) {
    return {
        type: types.DELECT,
        id
    };
}

export function editPlan(id, item) {
    return {
        type: types.EDIT,
        id,
        item
    };
}

export function show(show, item) {
    return {
        type: types.SHOW,
        show,
        item: item || {id: '', title: '', content: ''}
    };
}
