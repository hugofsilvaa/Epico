import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './GamePage.css';
import GameGames from './GameGames';
import axios from 'axios';

export default function Games() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFiltered, setIsFiltered] = useState(false);
  const params = useParams();
  const pageNumber = params.pageNumber ? parseInt(params.pageNumber, 10) : 1;

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(
          `https://www.boardgameatlas.com/api/search?&skip=${
            pageNumber - 1
          }&pretty=true&client_id=JLBr5npPhV`
        )
        .then((res) => setGames(res.data.games))
        .finally(() => setLoading(!loading));
    };
    fetchData();
  }, [pageNumber]);

  return (
    <div className='background2'>
      <section>
        <div className='GameList'>
          <div>
          <Link to={`/games/${pageNumber - 25}`} className="pagebutton">Prev</Link>
          </div>
          <button
            className='GameButton'
            onClick={() => setIsFiltered(!isFiltered)}>
            {isFiltered ? 'All games' : 'Best games'}
          </button>
          <div>
          <Link to={`/games/${pageNumber + 25}`} className="pagebutton">Next</Link>
          </div>
        </div>
        <div>
          {!isFiltered
            ? games.map((game) => (
                <div key={game.id}>
                  <GameGames game={game} />
                </div>
              ))
            : games
                .filter((game) => game.average_user_rating > 4)
                .map((game) => (
                  <div key={game.id}>
                    <GameGames game={game} />
                  </div>
                ))}
        </div>
      </section>
      )
    </div>
  );
}
