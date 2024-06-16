import { useState } from "react";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import "./App.css";

const result = {
  href: "https://api.spotify.com/v1/me/shows?offset=0&limit=20",
  limit: 20,
  next: "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  offset: 0,
  previous: "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  total: 4,
  items: [
    {
      album: {
        album_type: "compilation",
        total_tracks: 9,
        available_markets: ["CA", "BR", "IT"],
        external_urls: {
          spotify: "string",
        },
        href: "string",
        id: "2up3OPMp9Tb4dAKM2erWXQ",
        images: [
          {
            url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
            height: 300,
            width: 300,
          },
        ],
        name: "Master of Puppets",
        release_date: "1981-12",
        release_date_precision: "year",
        restrictions: {
          reason: "market",
        },
        type: "album",
        uri: "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
        artists: [
          {
            external_urls: {
              spotify: "string",
            },
            href: "string",
            id: "string",
            name: "Metallica",
            type: "artist",
            uri: "string",
          },
        ],
      },
      artists: [
        {
          external_urls: {
            spotify: "string",
          },
          followers: {
            href: "string",
            total: 0,
          },
          genres: ["Prog rock", "Grunge"],
          href: "string",
          id: "string",
          images: [
            {
              url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
              height: 300,
              width: 300,
            },
          ],
          name: "Metallica",
          popularity: 0,
          type: "artist",
          uri: "string",
        },
      ],
      available_markets: ["string"],
      disc_number: 0,
      duration_ms: 0,
      explicit: false,
      external_ids: {
        isrc: "string",
        ean: "string",
        upc: "string",
      },
      external_urls: {
        spotify: "string",
      },
      href: "string",
      id: "12456",
      is_playable: false,
      linked_from: {},
      restrictions: {
        reason: "string",
      },
      name: "Master of Puppets",
      popularity: 0,
      preview_url: "string",
      track_number: 0,
      type: "track",
      uri: "string",
      is_local: false,
    },
    {
      album: {
        album_type: "compilation",
        total_tracks: 9,
        available_markets: ["CA", "BR", "IT"],
        external_urls: {
          spotify: "string",
        },
        href: "string",
        id: "2up3OPMp9Tb4dAKM2erWXQ",
        images: [
          {
            url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
            height: 300,
            width: 300,
          },
        ],
        name: "Number of the Beast",
        release_date: "1981-12",
        release_date_precision: "year",
        restrictions: {
          reason: "market",
        },
        type: "album",
        uri: "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
        artists: [
          {
            external_urls: {
              spotify: "string",
            },
            href: "string",
            id: "string",
            name: "Iron Maiden",
            type: "artist",
            uri: "string",
          },
        ],
      },
      artists: [
        {
          external_urls: {
            spotify: "string",
          },
          followers: {
            href: "string",
            total: 0,
          },
          genres: ["Prog rock", "Grunge"],
          href: "string",
          id: "string",
          images: [
            {
              url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
              height: 300,
              width: 300,
            },
          ],
          name: "Iron Maiden",
          popularity: 0,
          type: "artist",
          uri: "string",
        },
      ],
      available_markets: ["string"],
      disc_number: 0,
      duration_ms: 0,
      explicit: false,
      external_ids: {
        isrc: "string",
        ean: "string",
        upc: "string",
      },
      external_urls: {
        spotify: "string",
      },
      href: "string",
      id: "5664",
      is_playable: false,
      linked_from: {},
      restrictions: {
        reason: "string",
      },
      name: "Number of the Beast",
      popularity: 0,
      preview_url: "string",
      track_number: 0,
      type: "track",
      uri: "string",
      is_local: false,
    },
  ],
};

function App() {
  const [tracks, setTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("");

  const searchSpotify = (searchTerm) => {
    console.log(`Searching Spotify for "${searchTerm}"`);
    setTracks(result.items);
  };

  const onPlaylistNameChange = (value) => {
    setPlaylistName(value);
  };

  return (
    <>
      <h1 className="text-3xl font-bold m-3">Jammming</h1>
      <div className="h-screen w-screen flex flex-col items-center">
        <div className="w-11/12 h-full">
          <SearchBar search={searchSpotify} />
          <div className="flex-1 p-4 grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
            <SearchResults tracks={tracks} />
            <Playlist name={playlistName} tracks={tracks} onNameChange={onPlaylistNameChange} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
