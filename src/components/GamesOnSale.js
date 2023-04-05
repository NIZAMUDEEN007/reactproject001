import React from 'react';
import './GamesOnSale.css';
import { Link } from 'react-router-dom';
import game1 from '../assets/gone.jpg';
import game2 from '../assets/gtwo.jpg';
import game3 from '../assets/gthree.jpg';
import game4 from '../assets/gfour.jpg';
import game5 from '../assets/gfive.jpg';

const sharedStyles = {
  fontFamily: "Inter, sans-serif",
  fontSize: "0.9rem",
  color: "rgb(226,226,226)"
};

const GameCard = ({ image, title, price, link }) => {
  return (
    <div className="game-card">
      <Link to={link}>
        <img src={image} alt={title} style={{ width: "213px", height: "283px", transition: "transform 0.2s ease-in-out" }} />
      </Link>
      <div className="game-details" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", padding: "10px" }}>
        <h3 className="game-title" style={sharedStyles}>{title}</h3>
        <div className="game-price" style={{ ...sharedStyles, fontSize: "1rem" }}>
          <span className="price">${price}</span>
        </div>
      </div>
    </div>
  );
};

const games = [
  {
    id: 1,
    title: "Assasins Creed:Valhalla",
    price: "29.99",
    image: game1,
    link: "/game1"
  },
  {
    id: 2,
    title: "Gripper",
    price: "39.99",
    image: game2,
    link: "/game2"
  },
  {
    id: 3,
    title: "Assasins Creed:Odyssey",
    price: "24.99",
    image: game3,
    link: "/game3"
  },
  {
    id: 4,
    title: "The Entropy Centre",
    price: "49.99",
    image: game4,
    link: "/game4"
  },
  {
    id: 5,
    title: "Danger Forever",
    price: "19.99",
    image: game5,
    link: "/game5"
  }
];

const GamesOnSale = () => {
  return (
    
    <div className="games-on-sale-wrapper">
      <div className="game-cards-container" style={{ display: "flex", gap: "20px" }}>
        {games.map((game) => (
          <GameCard key={game.id} title={game.title} price={game.price} image={game.image} link={game.link} />
        ))}
      </div>
    </div>
  );
};

export default GamesOnSale;
