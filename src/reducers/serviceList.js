import { nanoid } from 'nanoid';
import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  FILTER_SERVICE,
} from '../actions/actionTypes';

const initialState = {
  services: [
    { id: nanoid(), name: 'Замена стекла', price: 21000 },
    { id: nanoid(), name: 'Замена дисплея', price: 25000 },
  ],
  filtered: [],
  activeFilter: '',
};

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const { id, name, price } = action.payload;
      if (id) {
        const editing = state.services.find((service) => service.id === id);
        editing.name = name;
        editing.price = price;
        return { ...state };
      }
      return {
        ...state,
        services: [
          ...state.services,
          { id: nanoid(), name, price: Number(price) },
        ],
      };
    case REMOVE_SERVICE:
      const { removeId } = action.payload;
      return {
        ...state,
        services: state.services.filter((service) => service.id !== removeId),
        filtered: state.filtered.filter((service) => service.id !== removeId),
      };
    case FILTER_SERVICE:
      const { setFilter } = action.payload;
      if (!setFilter) return { ...state, activeFilter: '', filtered: [] };
      const filteredServices = state.services.filter((service) =>
        service.name.toLowerCase().includes(setFilter.toLowerCase())
      );
      return {
        ...state,
        activeFilter: setFilter,
        filtered: filteredServices,
      };
    default:
      return state;
  }
}
