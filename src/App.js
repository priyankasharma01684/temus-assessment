import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Navigate,Routes } from 'react-router-dom';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import ServiceDetail from './components/ServiceDetails';
import './App.css'


const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [serviceDetailInfo, setServiceDetailInfo] = useState(null);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const openServiceDetail = (providerName, api) => {
    setSelectedProvider(providerName);
    setSidebarOpen(false);
    setServiceDetailInfo(api); 
  };

  return ( 
      <Router>
      <div className="app">
        <Routes>
        <Route path="/" element={<Home openSidebar={openSidebar} />} />
        <Route path="/detail/:providerName" element={<ServiceDetail api={serviceDetailInfo} />} />
        </Routes>
        
      {isSidebarOpen && <Sidebar openServiceDetail={openServiceDetail} />}
      </div>
    </Router>
  
  );
};


export default App;

