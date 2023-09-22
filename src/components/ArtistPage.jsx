import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";

const ArtistPage = () => {
  const params = useParams();
  const [Artist, setArtist] = useState({});
  const [artistFetch, setArtistFetch] = useState([]);

  const artistIdFetch = async () => {
    try {
      let resp = await fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + params.artistId, {
        method: "GET",
      });

      let ArtistObj = await resp.json();
      setArtist(ArtistObj);
    } catch (error) {
      console.log(error);
    }
  };

  const artist = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + Artist.name, {
        method: "GET",
      });
      let ArtistArry = await resp.json();
      setArtistFetch(ArtistArry.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log(params.artistId);
    artistIdFetch();
    artist();
  }, []);
  useEffect(() => {
    console.log(Artist);
  }, [Artist]);

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={9} className="offset-md-3 mainPage">
          <Row className="row mb-3">
            <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
              <Link>TRENDING</Link>
              <Link>PODCAST</Link>
              <Link>MOODS AND GENRES</Link>
              <Link>NEW RELEASES</Link>
              <Link>DISCOVER</Link>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={10} className="mt-5">
              <h2 className="titleMain">{Artist.name}</h2>
              <div id="followers">followers: {Artist.nb_fan}</div>
              <div className="d-flex justify-content-center" id="button-container">
                <Button className="btn btn-success mr-2 mainButton" id="playButton">
                  PLAY
                </Button>
                <Button className="btn btn-outline-light mainButton" id="followButton">
                  FOLLOW
                </Button>
              </div>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={10} className="offset-1 col-md-10 col-lg-10 p-0">
              <div className="mt-4 d-flex justify-content-start">
                <h2 className="text-white font-weight-bold">Tracks</h2>
              </div>
              <div className="pt-5 mb-5">
                <Row id="apiLoaded">
                  {artistFetch.length > 0
                    ? artistFetch.map(song => (
                        <div class="col-sm-auto col-md-auto text-center mb-5">
                          <Link to={"/AlbumPage/" + song.album.id}>
                            <img
                              class="img-fluid"
                              src={song.album.cover_medium} // creating the album image anchor
                              alt="1"
                            />
                          </Link>
                          <p>
                            <Link>
                              Track: "$
                              {
                                song.title.length < 16 ? `${song.title}` : `${song.title.substring(0, 16)}...` // setting the track title, if it's longer than 16 chars cuts the rest
                              }
                              "
                            </Link>
                            <br />
                            <Link to={"/AlbumPage/" + song.album.id}>
                              Album: "$
                              {
                                song.album.title.length < 16
                                  ? `${song.album.title}`
                                  : `${song.album.title.substring(0, 16)}...` // setting the track title, if it's longer than 16 chars cuts the rest
                              }
                              "
                            </Link>
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

export default ArtistPage;
