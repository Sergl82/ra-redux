import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilterField, filterService } from '../actions/actionCreators';

function ServiceFilter() {
  const {filter} = useSelector((state) => state.serviceFilter);
  const {activeFilter} = useSelector((state) => state.serviceList);
  const dispatch = useDispatch();

  const resetFilter = () => {
    dispatch(changeFilterField(''));
    dispatch(filterService(''));
  };

  const handleChange = (evt) => {
    const { value } = evt.target;
    dispatch(changeFilterField(value));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(filterService(filter));
  };

  const handleReset = () => {
    resetFilter();
  };

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <h2>Filter services:</h2>
      <div>Active filter: <span>{activeFilter || 'NO'}</span></div>      
      <input name="filter" onChange={handleChange} value={filter} />
      <button type="submit">Set</button>
      <button type="reset">Clear</button>
    </form>
  );
}

export default ServiceFilter;
