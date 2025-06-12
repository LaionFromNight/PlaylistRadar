import React, { useEffect, useState } from 'react';
import './SpotifyAuth.css';

const CLIENT_ID = 'TestTest';
const SCOPES = ['playlist-read-public', 'user-read-email'];
const REDIRECT_URI = `${window.location.origin}/PlaylistRadar/callback`;

export default function SpotifyAuth({ onToken }) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.includes('access_token')) {
      const params = new URLSearchParams(hash.slice(1));
      const accessToken = params.get('access_token');
      if (accessToken) {
        localStorage.setItem('spotify_token', accessToken);
        setToken(accessToken);
        if (onToken) onToken(accessToken);
      }
      window.location.hash = '';
      return;
    }

    const stored = localStorage.getItem('spotify_token');
    if (stored) {
      setToken(stored);
      if (onToken) onToken(stored);
    }
  }, [onToken]);

  const login = () => {
    const params = new URLSearchParams({
      client_id: CLIENT_ID,
      response_type: 'token',
      redirect_uri: REDIRECT_URI,
      scope: SCOPES.join(' '),
      show_dialog: 'true',
    });
    window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
  };

  const logout = () => {
    localStorage.removeItem('spotify_token');
    window.location.reload();
  };

  if (!token) {
    return (
      <div className="spotify-auth">
        <button className="login-btn" onClick={login}>
          Login with Spotify
        </button>
      </div>
    );
  }

  return (
    <div className="spotify-auth">
      <p>Logged in to Spotify ✅</p>
      <button className="logout-btn" onClick={logout}>
        Log out
      </button>
    </div>
  );
}

