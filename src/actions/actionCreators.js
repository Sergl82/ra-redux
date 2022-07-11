import { ADD_SERVICE, REMOVE_SERVICE, FILTER_SERVICE, CHANGE_SERVICE_FIELD, CHANGE_FILTER_FIELD } from './actionTypes';

export function addService(id, name, price) {
  return {type: ADD_SERVICE, payload: {id, name, price}};
}

export function removeService(removeId) {
  return { type: REMOVE_SERVICE, payload: {removeId}};
}

export function filterService(setFilter) {
  return {type: FILTER_SERVICE, payload: {setFilter}};
}

export function changeServiceField(name, value) {
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}

export function changeFilterField(filter) {
  return {type: CHANGE_FILTER_FIELD, payload: {filter}}
}
