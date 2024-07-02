import React, { useState } from 'react';
import ContractTable from './components/ContractTable.jsx';
import ContractFormDrawer from './components/ContractFormDrawer.jsx';
import './App.css'
import ProjectFormDrawer from './components/ProjectFormDrawer.jsx';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isProjectDrawerOpen, setIsProjectDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleProjectDrawerOpen = () => {
    setIsProjectDrawerOpen(true);
  };

  const handleProjectDrawerClose = () => {
    setIsProjectDrawerOpen(false);
  };

  return (
    <div className="App">
      <ContractTable onAddClick={handleDrawerOpen}  onAddProjectClick={handleProjectDrawerOpen}/>
      <ContractFormDrawer open={isDrawerOpen} onClose={handleDrawerClose} />
      <ProjectFormDrawer open={isProjectDrawerOpen} onClose={handleProjectDrawerClose} />
    </div>
  );
}

export default App;
