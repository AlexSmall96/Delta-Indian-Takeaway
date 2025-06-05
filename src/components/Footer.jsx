import React from "react"
import styles from '../styles/Footer.module.css'
import { Container, Row, Col, Image } from "react-bootstrap";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <Container className={styles.footerChild}>
                <Row className={styles.footerText}>
                    {/* ADDRESS */}
                    <Col xs={6} sm={{span:4, offset: 1}}>
                        <h5>Address</h5>
                        <p>
                            27 Roseburn Terrace
                            <br />
                            Edinburgh
                            <br />
                            EH12 5NG
                        </p>
                    </Col>
                    {/* CONTACT */}
                    <Col xs={6} sm={4}>
                        <h5>Contact Us</h5>
                        <p>
                            0131 346 8973
                            <br />
                            0131 347 8868
                        </p>
                    </Col>
                    {/* OPENING HOURS */}
                    <Col xs={6} sm={3}>
                        <h5>Opening Hours</h5>
                        <p>Mon - Sun: 5pm - 11pm</p>
                    </Col>
                    {/* FACEBOOK LINK */}
                    <Col xs={4} sm={{span:3, offset: 1}}>
                        © 2025 Delta Indian Takeaway
                    </Col>
                    <Col xs={2}  sm={{span:1, offset: 7}}>
                        <a href='https://www.facebook.com/DeltaIndianTakeaway' target="_blank">
                            <Image src='https://res.cloudinary.com/dojzptdbc/image/upload/v1749115399/facebook_logos_PNG19757_ck2ntz.png' width={40} />
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Footer
