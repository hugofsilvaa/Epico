import React from "react";
import "./GameHomePage.css";
import ShowMoreText from "react-show-more-text";
import HomePageTitle from "../HomePageTitle/HomePageTitle";
import { Link } from "react-router-dom";

export default function GameHomePage({ game }) {
  return (
    <>
    <div className="background">
      <div className='homepage'>
        <div className="introduction">
        <HomePageTitle />
        </div>
        <div className='featuredcontainer'>
          <div className='titlephoto'>
            <Link to={{ pathname: `/game/${game.id}` }}>
              <div className='photo'>
                <img src={game.images.large} alt='game cover' />
              </div>
            </Link>
          </div>
          <div className='text'>
            <h2>{game.name}</h2>
            <div className="flex">
            <div className='game-details'>
              <p>Rating {game.average_user_rating.toFixed(1)}</p>
              <p>Min. Players {game.min_players}</p>
              <p>Designer: {game.primary_designer.name}</p>
            </div>
            <div className="showmore">
            <p>Description</p>
            <ShowMoreText
              lines={5}
              more='Show more'
              less='Show less'
              className='content-css'
              anchorClass='my-anchor-css-class'
              expanded={false}
              width={505}>
              <p className='game-description'>{game.description_preview}</p>
            </ShowMoreText>
            </div>
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
        <br />
        <br />
      </div>
    </div>
    </>
  );
}
