import React from 'react';

const Home = ({ openSidebar }) => {
  return (
    
    <React.Fragment>
      <div className="home-page"> 
      <button className='toggle-btn' onClick={openSidebar}>Explore web APIs</button>
    </div>
    </React.Fragment>
  );
};

export default Home;
