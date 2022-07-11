import React from 'react';
import ServiceForm from './components/ServiceForm';
import ServiceFilter from './components/ServiceFilter';
import ServiceList from './components/ServiceList';
import 'mini.css';

function App() {
  return (
    <>
      <ServiceForm />
      <ServiceFilter />
      <ServiceList />
    </>
  );
}

export default App;
