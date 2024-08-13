
import React from 'react';
import './twosplit.css'
import toast from './frenchtoast.jpg'


const TwoSplit = () => {
  return (
    <div className="menu-container">
       <div className="menu-image">
        <img src={toast} alt="Menu Item" />
    </div>
    <div className="menu-content">
        <h2>Le Catering</h2>
        <h3>Tradition since 1900</h3>
<p style={{color: 'black'}}>The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.</p> 
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
           
    </div>
   
</div>
    
  );
};

export default TwoSplit;