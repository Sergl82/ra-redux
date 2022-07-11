import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeService, changeServiceField } from '../actions/actionCreators';

function ServiceList() {
  const { services, filtered } = useSelector((state) => state.serviceList);
  const dispatch = useDispatch();

  const resetForm = () => {
    dispatch(changeServiceField('id', ''));
    dispatch(changeServiceField('name', ''));
    dispatch(changeServiceField('price', ''));
  };

  const handleRemove = (id) => {
    dispatch(removeService(id));
    resetForm();
  };

  const handleEdit = (editId) => {
    const editItem = services.find((item) => item.id === editId);
    const { id, name, price } = editItem;
    dispatch(changeServiceField('id', id));
    dispatch(changeServiceField('name', name));
    dispatch(changeServiceField('price', price));
  };

 const items = filtered.length ? filtered : services;
  const itemsList = items.map((o) => (
    <li key={o.id}>
      {o.name} {o.price}
      <button onClick={() => handleEdit(o.id)}>✎</button>
      <button onClick={() => handleRemove(o.id)}>✕</button>
    </li>
  ));

  return <ul>{itemsList}</ul>;
}

export default ServiceList;
