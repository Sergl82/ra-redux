import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, addService } from '../actions/actionCreators';

export default function ServiceForm() {
  const item = useSelector((state) => state.serviceForm);
  const dispatch = useDispatch();

  const resetForm = () => {
    dispatch(changeServiceField('id', ''));
    dispatch(changeServiceField('name', ''));
    dispatch(changeServiceField('price', ''));
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addService(item.id, item.name, item.price));
    resetForm();
  };

  const handleReset = (evt) => {
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
			<h2>{item.id? 'Edit' : 'Add'} service:</h2>
      <input name="name" onChange={handleChange} value={item.name} />
      <input name="price" onChange={handleChange} value={item.price} />
      <button type="submit">Save</button>
      {item.id && <button type="reset">Cancel</button>}
    </form>
  );
}
