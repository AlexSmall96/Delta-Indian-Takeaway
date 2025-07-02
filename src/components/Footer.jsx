import React from "react"
import styles from '../styles/Footer.module.css'
import { Container, Row, Col, Image } from "react-bootstrap";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <Container className={styles.footerChild}>
                <Row className={`${styles.footerText} justify-content-md-center`}>
                    {/* ADDRESS */}
                    <Col sm={12} md={4}>
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
                    <Col sm={12} md={4}>
                        <h5>Contact Us</h5>
                        <p>
                            0131 346 8973
                            <br />
                            0131 347 8868
                        </p>
                    </Col>
                    {/* OPENING HOURS */}
                    <Col sm={12} md={4}>
                        <h5>Opening Hours</h5>
                        <p>Mon - Sun: 5pm - 11pm</p>
                    </Col>
                    {/* FACEBOOK, GITHUB AND LINKEDIN LINKS */}
                    <Col sm={12} className={styles.author}> 
                        Website developed by Alex Small
                        <a href='https://github.com/AlexSmall96' target="_blank"  rel="noreferrer"><i className="fa-brands fa-square-github fa-lg"></i></a>
                        <a href='https://www.linkedin.com/in/alex-small-a8977116b/' target="_blank"  rel="noreferrer"><i className="fa-lg fa-brands fa-linkedin"></i></a>
                    </Col>
                    <Col sm={12}>
                        © 2025 Delta Indian Takeaway
                        <a href='https://www.facebook.com/DeltaIndianTakeaway' target="_blank"  rel="noreferrer">
                            <Image src='https://res.cloudinary.com/dojzptdbc/image/upload/v1749115399/facebook_logos_PNG19757_ck2ntz.png' width={20} />
                        </a>
                    </Col>

                </Row>
            </Container>
        </div>
    )
};

export default Footer
