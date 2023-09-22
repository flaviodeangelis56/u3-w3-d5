import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Shuffle from "./playerbuttons/Shuffle.png";
import Previous from "./playerbuttons/Previous.png";
import Play from "./playerbuttons/Play.png";
import Next from "./playerbuttons/Next.png";
import Repeat from "./playerbuttons/Repeat.png";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const MyNavBar = () => {
  const track = useSelector(state => state.jobs.jobs.content);

  useEffect(() => {
    console.log(track[0]);
  }, [track]);

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row>
        <Col lg={10} className="offset-lg-2">
          <Container>
            <Row>
              <Col xs={6} md={4} lg={2} className=" offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
                <Row>
                  <Col>
                    <Link>
                      <img src={Shuffle} alt="shuffle" />
                    </Link>
                  </Col>
                  <Col>
                    <Link>
                      <img src={Previous} alt="shuffle" />
                    </Link>
                  </Col>
                  <Col>
                    <Link>
                      <img src={Play} alt="shuffle" />
                    </Link>
                  </Col>
                  <Col>
                    <Link>
                      <img src={Next} alt="shuffle" />
                    </Link>
                  </Col>
                  <Col>
                    <Link>
                      <img src={Repeat} alt="shuffle" />
                    </Link>
                  </Col>
                </Row>
              </Col>
              <Col>
                {track.length > 0 ? (
                  <div className="d-flex">
                    {
                      <img
                        src={track[0].album.cover}
                        alt="album cover"
                        style={{ maxWidth: "70px" }}
                        className="mx-4 "
                      />
                    }
                    <p className="text-white">{track[0].title}</p>
                  </div>
                ) : (
                  ""
                )}
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className="justify-content-center playBar py-3">
              <Col xs={8} md={6}>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default MyNavBar;
