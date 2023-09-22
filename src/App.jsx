import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavBar from "./components/MyNavBar";
import HomePage from "./components/HomePage";
import SideBar from "./components/SideBar";
import { Component } from "react";
import ArtistPage from "./components/ArtistPage";
import AlbumPage from "./components/AlbumPage";

class App extends Component {
  state = {
    generi: {
      popArtists: ["maroon5", "coldplay", "onerepublic", "jamesblunt", "katyperry", "arianagrande"],
      rockArtists: ["queen", "u2", "thepolice", "eagles", "thedoors", "oasis", "thewho", "bonjovi"],
      hipHopArtists: ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"],
    },
  };
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <MyNavBar />
          <Routes>
            <Route path="/" element={<HomePage generi={this.state.generi} />} />
            <Route path="/ArtistPage/:artistId" element={<ArtistPage />} />
            <Route path="/AlbumPage/:albumId" element={<AlbumPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
