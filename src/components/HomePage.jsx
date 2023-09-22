import { Button, Col, Container, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";

const HomePage = props => {
  const [popRandomArtists, setPopRandomArtist] = useState([]);
  const [popPick, setPopPick] = useState([]);

  const [rockRandomArtists, setRockRandomArtist] = useState([]);
  const [rockPick, setRockPick] = useState([]);

  const [hhRandomArtists, setHHRandomArtist] = useState([]);
  const [hhPick, setHHPick] = useState([]);

  const [serched, setSerched] = useState([]);
  const [serchedPick, setSerchedPick] = useState([]);

  const pickRandomPop = () => {
    for (let i = 0; i < 4; i++) {
      let artist = props.generi.popArtists[Math.floor(Math.random() * props.generi.popArtists.length)];
      if (!popRandomArtists.includes(artist)) {
        setPopRandomArtist(artist);
      }
    }
  };

  const pickRandomRock = () => {
    for (let i = 0; i < 4; i++) {
      let artist = props.generi.rockArtists[Math.floor(Math.random() * props.generi.rockArtists.length)];
      if (!rockRandomArtists.includes(artist)) {
        setRockRandomArtist(artist);
      }
    }
  };

  const pickRandomHH = () => {
    for (let i = 0; i < 4; i++) {
      let artist = props.generi.hipHopArtists[Math.floor(Math.random() * props.generi.hipHopArtists.length)];
      if (!hhRandomArtists.includes(artist)) {
        setHHRandomArtist(artist);
      }
    }
  };

  const popFetch = async artistName => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName, {
        method: "GET",
      });
      if (resp.ok) {
        const artistArry = await resp.json();
        setPopPick(artistArry.data);
        // console.log(artistArry.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const rockFetch = async artistName => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName, {
        method: "GET",
      });
      if (resp.ok) {
        const artistArry = await resp.json();
        setRockPick(artistArry.data);
        // console.log(artistArry.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const HHFetch = async artistName => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName, {
        method: "GET",
      });
      if (resp.ok) {
        const artistArry = await resp.json();
        setHHPick(artistArry.data);
        // console.log(artistArry.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const SerchedFetch = async artistName => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + serched, {
        method: "GET",
      });
      if (resp.ok) {
        const artistArry = await resp.json();
        setSerchedPick(artistArry.data);
        // console.log(artistArry.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const OnSubmitSerched = async event => {
    event.preventDefault();
    await SerchedFetch();
  };

  useEffect(() => {
    pickRandomPop();
    pickRandomRock();
    pickRandomHH();
  }, []);

  useEffect(() => {
    if (popRandomArtists !== false) {
      popFetch(popRandomArtists);
      rockFetch(rockRandomArtists);
      HHFetch(hhRandomArtists);
    }
  }, [popRandomArtists]);

  useEffect(() => {
    console.log(serchedPick);
  }, [serchedPick]);

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={9} className="offset-md-3 mainPage">
          <Row>
            <Form onSubmit={OnSubmitSerched}>
              <FormControl
                type="text"
                placeholder="Cerca"
                className="w-50 mt-5"
                onChange={event => setSerched(event.target.value)}
              />
              <Button type="submit">Serch</Button>
            </Form>
            <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
              <Link>TRENDING</Link>
              <Link>PODCAST</Link>
              <Link>MOODS AND GENRES</Link>
              <Link>NEW RELEASES</Link>
              <Link>DISCOVER</Link>
            </Col>
          </Row>
          <Row>
            <Col xs={10}>
              <div id="searchResults">
                <h2>Search Results</h2>
                <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                  {serchedPick.length > 0
                    ? serchedPick.slice(0, 4).map(song => (
                        <div class="col text-center">
                          <Link to={"/AlbumPage/" + song.album.id}>
                            <img class="img-fluid" src={song.album.cover} alt="1" />
                          </Link>
                          <p>
                            <Link to={"/AlbumPage/" + song.album.id}>
                              Album: "
                              {song.album.title.length < 16
                                ? `${song.album.title}`
                                : `${song.album.title.substring(0, 16)}...`}
                              "<br />
                            </Link>
                            <Link to={"/ArtistPage/" + song.artist.id}>Artist: ${song.artist.name}</Link>
                          </p>
                        </div>
                      ))
                    : ""}
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={10}>
              <div id="rock">
                <h2>Rock Classics</h2>
                <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
                  {rockPick.length > 0
                    ? rockPick.slice(0, 4).map(song => (
                        <div class="col text-center">
                          <Link to={"/AlbumPage/" + song.album.id}>
                            <img class="img-fluid" src={song.album.cover} alt="1" />
                          </Link>
                          <p>
                            <Link to={"/AlbumPage/" + song.album.id}>
                              Album: "
                              {song.album.title.length < 16
                                ? `${song.album.title}`
                                : `${song.album.title.substring(0, 16)}...`}
                              "<br />
                            </Link>
                            <Link to={"/ArtistPage/" + song.artist.id}>Artist: ${song.artist.name}</Link>
                          </p>
                        </div>
                      ))
                    : ""}
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={10}>
              <div id="pop">
                <h2>Pop Culture</h2>
                <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection">
                  {popPick.length > 0
                    ? popPick.slice(0, 4).map(song => (
                        <div class="col text-center">
                          <Link to={"/AlbumPage/" + song.album.id}>
                            <img class="img-fluid" src={song.album.cover} alt="1" />
                          </Link>
                          <p>
                            <Link to={"/AlbumPage/" + song.album.id}>
                              Album: "
                              {song.album.title.length < 16
                                ? `${song.album.title}`
                                : `${song.album.title.substring(0, 16)}...`}
                              "<br />
                            </Link>
                            <Link to={"/ArtistPage/" + song.artist.id}>Artist: ${song.artist.name}</Link>
                          </p>
                        </div>
                      ))
                    : ""}
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={10}>
              <div id="hiphop">
                <h2>#HipHop</h2>
                <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="hipHopSection">
                  {hhPick.length > 0
                    ? hhPick.slice(0, 4).map(song => (
                        <div class="col text-center">
                          <Link to={"/AlbumPage/" + song.album.id}>
                            <img class="img-fluid" src={song.album.cover} alt="1" />
                          </Link>
                          <p>
                            <Link to={"/AlbumPage/" + song.album.id}>
                              Album: "
                              {song.album.title.length < 16
                                ? `${song.album.title}`
                                : `${song.album.title.substring(0, 16)}...`}
                              "<br />
                            </Link>
                            <Link to={"/ArtistPage/" + song.artist.id}>Artist: ${song.artist.name}</Link>
                          </p>
                        </div>
                      ))
                    : ""}
                </Row>
              </div>
            </Col>
          </Row>
        </Col>
        <SideBar />
      </Row>
    </Container>
  );
};

export default HomePage;
