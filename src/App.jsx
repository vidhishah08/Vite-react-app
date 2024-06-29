import React, { useState } from 'react';
import ContractTable from './components/ContractTable.jsx';
import ContractFormDrawer from './components/ContractFormDrawer.jsx';
import './App.css'

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="App">
      <ContractTable onAddClick={handleDrawerOpen} />
      <ContractFormDrawer open={isDrawerOpen} onClose={handleDrawerClose} />
    </div>
  );
}

export default App;
