import React, { useState } from 'react';
import './SearchPage.css';

export default function SearchPage() {
  const [token, setToken] = useState('');
  const [query, setQuery] = useState('');
  const [playlists, setPlaylists] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setError('');
    if (!token) {
      setError('Token is required');
      return;
    }
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=playlist&limit=10`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (!response.ok) {
        if (response.status === 401) {
          setError('Invalid or expired token');
        } else {
          setError(`Error ${response.status}`);
        }
        setPlaylists([]);
        return;
      }
      const data = await response.json();
      setPlaylists(data.playlists.items || []);
    } catch (err) {
      setError('Failed to fetch data');
      setPlaylists([]);
    }
  };

  return (
    <div className="search-page">
      <h1>Playlist Search</h1>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Paste Spotify token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="token-input"
        />
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search playlists"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </div>
      </form>
      {error && <p className="error">{error}</p>}
      <ul className="results">
        {playlists.map((pl) => (
          <li key={pl.id}>
            <a
              href={pl.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
            >
              {pl.name}
            </a>
            <span className="details">
              {' '}– {pl.owner.display_name} ({pl.tracks.total} tracks)
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
