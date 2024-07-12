import React, { useState } from 'react';
import ContractTable from './components/ContractTable.jsx';
import ContractFormDrawer from './components/ContractFormDrawer.jsx';
import './App.css'
import ProjectFormDrawer from './components/ProjectFormDrawer.jsx';
import Dashboard from './components/Dashboard.jsx';
import Tickets from './components/Tickets.jsx';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isProjectDrawerOpen, setIsProjectDrawerOpen] = useState(false);
  const [isDashboardOpen,setIsDashboardOpen]=useState(false);
  const [isTicketsOpen,setIsTicketsOpen]=useState(false);

  const handleTicketsOpen=()=>{
    setIsTicketsOpen(true);
  }

  const handleTicketsClose=()=>{
    setIsTicketsOpen(false);
  }

  const handleDashboardOpen = () => {
    setIsDashboardOpen(true);
  };

  const handleDashboardClose=()=>{
    setIsDashboardOpen(false);
  }

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
      <ContractTable onAddClick={handleDrawerOpen}  onAddProjectClick={handleProjectDrawerOpen} onAddDashboardClick={handleDashboardOpen} onAddTicketsClick={handleTicketsOpen}/>
      <ContractFormDrawer open={isDrawerOpen} onClose={handleDrawerClose} />
      <ProjectFormDrawer open={isProjectDrawerOpen} onClose={handleProjectDrawerClose} />
      <Dashboard open={isDashboardOpen} onClose={handleDashboardClose}/>
      <Tickets open={isTicketsOpen} onClose={handleTicketsClose} />
    </div>
  );
}

export default App;
