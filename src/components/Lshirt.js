import React from 'react';
import './LshirtStyle.css';
//import boc from '../assets/boc.jpg';
import pic from '../assets/pic.png';
//import picc from '../assets/picc.png';
import TshirtOne from '../assets/TshirtOne.jpg';
import TshirtTwo from '../assets/TshirtTwo.jpg';
import TshirtThird from '../assets/TshirtThird.jpg';
import ShirtTwo from '../assets/ShirtTwo.jpg';
import ShirtOne from '../assets/ShirtOne.jpg';
import ShirtThird from '../assets/ShirtThird.jpg';

const Lshirt = () => {
  return (
  
      <div className="container">
          <div className="content">
              <div className="image1">
                  <img src={TshirtOne} alt="" />
                  <h1>20</h1>
              </div>
              
              <div className="image1">
                  <img src={TshirtTwo} alt="" />
                  <h1>20</h1>
              </div>

              <div className="image1">
                  <img src={TshirtThird} alt="" />
                  <h1>40</h1>
              </div>

              <div className="image1">
                  <img src={ShirtOne} alt="" />
                  <h1>40</h1>
              </div>

              <div className="image1">
                  <img src={ShirtTwo} alt="" />
                  <h1>40</h1>
              </div>

              <div className="image1">
                  <img src={ShirtThird} alt="" />
                  <h1>40</h1>
              </div>

              <div className="image1">
                  <img src={pic} alt="" />
                  <h1>40</h1>
              </div>
          </div>
            
      </div>
  
  );
}

export default Lshirt;
