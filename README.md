# Jammming

This application allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account.

## Project Overview

The tools used to build this application were React, Javascript, HTML, CSS.

The app was created using [Vite](https://vitejs.dev/) with the option _React + Javascript_.

### External Dependencies

- The **_dotenv_** package was used in order to obscure the Spotify Client ID from the client and from the github repo (by adding a **_.env_** file in [.gitignore](.gitignore)).

## Installation Instructions

- Clone this repo or download project as a ZIP file from Github.
- Install all dependencies by running `npm install`.
- Create a new app in your Spotify developer account.
- **IMPORTANT:** create a file with the filename **_.env_** and add your Client Id key and your redirect URI with the following format:
  `VITE_SPOTIFY_CLIENT_ID = YOUR_ID`<br>
  `VITE_SPOTIFY_REDIRECT_URI = http://localhost:5173/`
- To run the web server and the application use `npm run dev`.

## Usage

- The user can search for a song in the Search Bar.
- Afterwards he can view the results and add songs to his selection.
- He can also remove songs from his selection.
- Finally he can give his playlist a name and save it in his account.

When the first API call to Spotify is made, the user has to login in his account in order to authorize the app with access to the account.

## Future Improvements

- Add loading indicators for the search.
- Add better looking error messages.
- Improve CSS for the entire app.
- Improve the tracks view with thumbnails etc.
