import React, { useState, useEffect } from "react";
import "../GameHomePage/GameHomePage.css";
import GameHomePage from "../GameHomePage/GameHomePage";
import Loader from "react-loader-spinner";
import axios from "axios";

export default function Home() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(
          "https://www.boardgameatlas.com/api/search?name=&pretty=true&client_id=JLBr5npPhV&limit=1&random=true"
        )
        .then((res) => setGames(res.data.games))
        .finally(() => setLoading(!loading));
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <Loader
          className='loading'
          type='ThreeDots'
          color='#000'
          height={80}
          width={80}
        />
      ) : (
        games.map((game) => (
          <div key={game.id}>
            <GameHomePage game={game} />
          </div>
        ))
      )}
    </div>
  );
}
