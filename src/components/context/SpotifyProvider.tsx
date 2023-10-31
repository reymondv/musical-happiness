import { useState } from 'react';
const SpotifyProvider = () => {
  const [user, setUser] = useState({});

  return <SpotifyProvider.Provider></SpotifyProvider.Provider>;
};

export default SpotifyProvider;
