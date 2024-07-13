const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    // Check for access token match in URL
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);

      // Clear the parameters from the URL
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },

  async search(term) {
    const accessToken = this.getAccessToken();
    const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    try {
      if (response.ok) {
        const responseJSON = await response.json();
        if (!responseJSON.tracks) {
          return [];
        }
        return responseJSON.tracks.items.map((track) => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0]?.name,
          album: track.album.name,
          uri: track.uri,
        }));
      }
    } catch (error) {
      console.log(error);
      return [];
    }
  },

  async savePlaylist(name, trackUris) {
    if (!name || !trackUris.length) {
      return;
    }

    const accessToken = this.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userId;

    console.log(`Saving playlist ${name} with trackURIs ${trackUris}`);

    const userResponse = await fetch(`https://api.spotify.com/v1/me`, { headers: headers });
    try {
      if (userResponse.ok) {
        const responseJSON = await userResponse.json();
        userId = responseJSON.id;

        const createPlaylistResponse = await fetch(
          `https://api.spotify.com/v1/users/${userId}/playlists`,
          {
            method: "POST",
            headers: headers,
            body: JSON.stringify({ name: name }),
          }
        );
        if (createPlaylistResponse.ok) {
          const createPlaylistResponseJSON = await createPlaylistResponse.json();
          const playlistId = createPlaylistResponseJSON.id;
          const savePlaylistResponse = await fetch(
            `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
            {
              method: "POST",
              headers: headers,
              body: JSON.stringify({ uris: trackUris }),
            }
          );
          console.log(savePlaylistResponse);
        }
      }
    } catch (error) {
      console.log(error);
    }
  },
};

export default Spotify;
