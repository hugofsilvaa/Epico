import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./GameDetails.css";
import ShowMoreText from "react-show-more-text";


export default function GameDetails(props) {
  const [gameMore, setGameMore] = useState([]);
  const gameId = props.match.params.id;

  useEffect(() => {
    axios
      .get(
        `https://www.boardgameatlas.com/api/search?ids=${gameId}&pretty=true&client_id=JLBr5npPhV&skip`
      )
      .then((res) => {
        setGameMore(res.data.games[0]);
      });
  }, [gameId]);

  return (
    <div className="background">
      <div className="back">
            <Link to={{ pathname: "/games/1" }} className="backbutton">Go back</Link>
      </div>
    <div className="GameCard">
      <h2>{gameMore.name}</h2>
      <h3>{gameMore.year_published}</h3>
      <img src={gameMore.image_url} alt={gameMore.name} />
      <br/>
      <p className="rating">Rating: {gameMore.average_user_rating}</p>
      <p>Complexity: {gameMore.average_learning_complexity}</p>
        {/* <p>{gameMore.primary_publisher.name}</p> */}
        <p>Minimum Players: {gameMore.min_players}</p>
        <p>Maximum Players: {gameMore.max_players}</p>
        <p>Minimum Playtime: {gameMore.min_playtime}</p>
        <p>Maximum Playtime: {gameMore.max_playtime}</p>
        <p className="description">{gameMore.description_preview}</p>
    </div>
    </div>
  );
}
