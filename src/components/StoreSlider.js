import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import one from '../assets/gameone.jpg';
import two from '../assets/gametwo.jpg';
import three from '../assets/gamethree.jpg';
import four from '../assets/gamefour.jpg';
import five from '../assets/gamefive.jpg';
import six from '../assets/gamesix.jpg';

const games = [
  {
    name: 'Dead Island 2',
    image: one
  },
  {
    name: 'Tchia',
    image: two
  },
  {
    name: 'The Last of Us',
    image: three
  },
  {
    name: 'Honaki:Star Rail',
    image: four
  },
  {
    name: 'Red Fall',
    image: five
  },
  {
    name: 'Game Six',
    image: six
  }
];

const GameSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', marginLeft: '189px' }}>
      <div style={{ marginRight: '21px', width: '943px' }}>
        <Slider ref={sliderRef} {...settings}>
          {games.map((game, index) => (
            <div key={index}>
              <img src={game.image} alt={game.name} style={{ width: '943px', height: '528px' }} />
            </div>
          ))}
        </Slider>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '510px', marginTop: '10px' }}>
        {games.map((game, index) => (
          <div key={index} onClick={() => goToSlide(index)} style={{ width: '183px', height: '85px', border: 'none', borderRadius: '10px', cursor: 'pointer', marginBottom: '10px', fontFamily: 'Inter, sans-serif', textAlign: 'center', fontSize: '15px', color:'RGB(139 148 148)', backgroundColor: 'transparent', transition: 'background-color 0.3s' ,display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center'  }} 
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(42,43,43)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            {game.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameSlider;
