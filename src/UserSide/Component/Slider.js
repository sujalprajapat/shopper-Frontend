import { Col, Row } from "react-bootstrap";
import slider1 from '../Image/slider1.jpg';
import slider2 from '../Image/slider2.jpg';
import slider3 from '../Image/slider3.jpg';
import slider4 from '../Image/slider4.jpg';
import slider5 from '../Image/slider5.png';
import slider6 from '../Image/slider6.jpg';
import slider7 from '../Image/slider7.jpg';
import slider8 from '../Image/slider8.png';
import slider9 from '../Image/slider9.png';
import slider10 from '../Image/slider10.png';
function Slider() {
    return (
        <>
            <section className="slider">
                <Row gap={5}>
                    <Col sm={3} >
                        <div className="slider_box1">
                            <img alt='discount' src={slider3} />
                        </div>
                        <div className="slider_box2">
                            <img alt='discount' src={slider5} />
                        </div>
                        <div className="slider_box3">
                            <img alt='discount' src={slider1} />
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="slider_box4">
                            <img alt='discount' src={slider7} />
                        </div>
                        <Row gap={5}>
                            <Col className="col-sm-6 col-12 my-2 my-sm-0">
                                <div className="slider_box5">
                                    <img alt='discount' src={slider6} />
                                </div>
                            </Col>
                            <Col className="col-sm-6 col-12 my-2 my-sm-0">
                                <div className="slider_box5">
                                    <img alt='discount' src={slider9} />
                                </div>
                            </Col>
                        </Row>
                        <div className="slider_box3">
                            <img alt='discount' src={slider10} />
                        </div>

                    </Col>
                    <Col sm={3} >
                        <div className="slider_box3">
                            <img alt='discount' src={slider2} />
                        </div>
                        <div className="slider_box1">
                            <img alt='discount' src={slider4} />
                        </div>
                        <div className="slider_box2">
                            <img alt='discount' src={slider8} />
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    )
}
export default Slider;