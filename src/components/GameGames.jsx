import React from "react";
import "./GameHomePage/GameHomePage.css";
import ShowMoreText from "react-show-more-text";
import { Link } from "react-router-dom";

export default function GameGames({ game }) {
  return (
    <>
      <div className='gamepage'>
        <div className='game-container'>
          <div className='text'>
          <h1>{game.name}</h1>
            <div className="flexcontainer">
            <Link to={{ pathname: `/game/${game.id}` }}>
            <div className='photo'>
              <img src={game.images.large} alt='game cards' />
            </div>
            </Link>
            <div className='game-details'>
              <p>Rating: {game.average_user_rating.toFixed(1)}</p>
              <p>Min. Players: {game.min_players}</p>
              <p>Designer: {game.primary_designer.name}</p>
            </div>
            <ShowMoreText
              lines={5}
              more='Show more'
              less='Show less'
              className='content-css'
              anchorClass='my-anchor-css-class'
              expanded={false}
              width={500}>
              <p className='game-description'>{game.description_preview}</p>
            </ShowMoreText>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
