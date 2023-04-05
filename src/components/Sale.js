import React from 'react';
import './Sale.css';

import meridian4Sale from '../assets/meridian4-sale.jpg';
import plalionSale from '../assets/plalion-sale.jpg';
import eaSportsSale from '../assets/ea-sports-sale.jpg';

const SaleItem = ({ imgSrc, title }) => {
  return (
    <div className="sale-item">
      <a href="#" className="sale-link">
        <img src={imgSrc} alt="" className="sale-image" />
      </a>
      <h2 className="sale-title">{title}</h2>
      <a href="#" className="sale-link">
        <p className="sale-button">Save Now</p>
      </a>
    </div>
  );
};

const Sale = () => {
  return (
    <div className="sale-wrapper">
      <div className="sale-container">
        <SaleItem imgSrc={meridian4Sale} title="Meridian4 Publisher Sale" />
        <SaleItem imgSrc={plalionSale} title="Plalion Publisher Sale" />
        <SaleItem imgSrc={eaSportsSale} title="EA SPORTS PGA TOUR Deluxe Edition" />
      </div>
    </div>
  );
};

export default Sale;
