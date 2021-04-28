import React, { useState } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import * as gameBoardShops from '../gameBoardShops.json';
import './Map.css';
import ReactLeafletSearch from 'react-leaflet-search';

export default function Mapping() {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleIsFavourite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className='background'>
      <div className="introcontainer">
        <br/>
        <br/>
      <div className='intro'>
        <p>
          You're on vacation in another country and want to stop at a cozy board
          cafe, for a hot chocolate and a game?
        </p>
        <p>
          Or perhaps you would like to check out local game stores... maybe
          you'll find that board game you've been looking for for ages...{' '}
        </p>
      </div>
      <div>
        <h2>
          Well then this map is for you! Find all the board game cafes and
          stores worldwide!
        </h2>
        </div>
      </div>
      <br />
      <Map center={[46.68, 23.03]} zoom={4}>
        <ReactLeafletSearch
          position='topleft'
          inputPlaceholder='Search...'
          showMarker={false}
          zoom={6}
          closeResultsOnClick={true}
          openSearchOnLoad={false}
          className='search'
        />

        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {gameBoardShops.gameBoardShops.map((shop) => (
          <Marker key={shop.id} position={[shop.latitude, shop.longitude]}>
            <Popup>
              <div className='popup-card'>
                <h2 className='card-text'>{shop.shopName}</h2>
                <p className='card-text'>
                  <strong>Address:</strong> {shop.address}
                </p>
                <p className='card-text'>
                  <strong>Website:</strong>{' '}
                  <a href={shop.website}>{shop.website}</a>
                </p>
                <p className='card-text'>
                  <strong>Phone:</strong> {shop.phone}
                </p>
                <img className='images' src={shop.img} alt='shops' />
              </div>
              <div className='fav-button'>
                <p>My fav shop</p>
                <button className='favorite' onClick={handleIsFavourite}>
                  {isFavorite ? '❤️' : '🤍'}
                </button>
                {isFavorite && <p>Thank you for Fav us</p>}
              </div>
            </Popup>
          </Marker>
        ))}
      </Map>
      <div>
          <p className="suggestion">If your favorite place does not appear on the map, send us a message through our contact page!</p>
        </div>
    </div>
  );
}
