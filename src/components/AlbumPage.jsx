import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";

const AlbumPage = () => {
  const params = useParams();
  const [albumObj, setAlbumObj] = useState({});
  const [trackList, setTrackList] = useState([]);

  const albumFetch = async () => {
    try {
      let resp = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + params.albumId, {
        method: "GET",
      });

      if (resp.ok) {
        let albumObj = await resp.json();
        setAlbumObj(albumObj);
        setTrackList(albumObj.tracks.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    albumFetch();
  }, []);

  useEffect(() => {
    console.log(albumObj);
  }, [albumObj]);

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={9} className="offset-md-3 mainPage">
          <Row className="mb-3">
            <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
              <Link>TRENDING</Link>
              <Link>PODCAST</Link>
              <Link>MOODS AND GENRES</Link>
              <Link>NEW RELEASES</Link>
              <Link>DISCOVER</Link>
            </Col>
          </Row>
          <Row>
            <Col md={3} className="pt-5 text-center" id="img-container">
              {albumObj ? (
                <>
                  <img src={albumObj.cover} class="card-img img-fluid" alt="Album" />
                  <div class="mt-4 text-center">
                    <p class="album-title">{albumObj.title}</p>
                  </div>
                  <div class="mt-4 text-center">
                    <button id="btnPlay" class="btn btn-success" type="button">
                      Play
                    </button>
                  </div>
                </>
              ) : (
                ""
              )}
            </Col>
            <Col md={8} className="p-5">
              <Row>
                <Col md={10} className="mb-5" id="trackList">
                  <div>
                    {albumObj
                      ? trackList.map(track => (
                          <div class="py-3 trackHover">
                            <a href="#" class="card-title trackHover px-3" style={{ color: "white" }}>
                              {track.title}
                            </a>
                            <small class="duration" style={{ color: "white" }}>
                              {Math.floor(
                                parseInt(track.duration) / 60 // setting the duration minutes
                              )}
                              :
                              {parseInt(track.duration) % 60 < 10
                                ? "0" + (parseInt(track.duration) % 60) // checking che duration seconds, if they are less than 10 a 0 is prefixed
                                : parseInt(track.duration) % 60}
                            </small>
                          </div>
                        ))
                      : ""}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <SideBar />
      </Row>
    </Container>
  );
};

export default AlbumPage;
