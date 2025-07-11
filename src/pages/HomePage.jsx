import React, {useEffect, useState} from "react"
import Carousel from 'react-bootstrap/Carousel';
import  { imageSrcs, imageAlts } from '../data'
import Image from "../components/Image";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { Col, Container, Row } from "react-bootstrap";
import styles from '../styles/HomePage.module.css'
import { motion } from 'framer-motion';

const HomePage = () => {
	// Initialise variables
	const [index, setIndex] = useState(0) // Index for carousel
	const [srcIndices, setSrcIndices] = useState([0, 3, 6, 9, 12]) // Indices for image sources - number of images shown in a carousel item depends on screen width
	const [step, setStep] = useState(3)  // Step variable to choose number of images shown, can be 1, 2 or 3
	const { width } = useWindowDimensions() // Screen width
	const [imageHeight, setImageHeight] = useState(0.3 * width) // Carousel Images height/width

	// Handle Select to change carousel item
	const handleSelect = (selectedIndex) => {
    	setIndex(selectedIndex);
  	};
	
	// Update src indices, step and image height when width changes
	useEffect(() => {

		// Updates step, image height, src indices and carousel index based on width
		const updateVariables = (step, widthFactor, arrayLength, arrayMult=1) => {
			setStep(step)
			setImageHeight(widthFactor * width)
			const indexArray = Array.from(Array(arrayLength).keys())
			setSrcIndices(
				indexArray.map(n => arrayMult * n)
			)
			setIndex(0)
		}

		// Call updateVariables with different values depending on width
		if (width < 576){
			updateVariables(1, 0.6, 15) // 1 image per carousel item
		} else if (width <= 991){
			updateVariables(2, 0.3, 7, 2) // 2 images per carousel item
		} else {
			updateVariables(3, 0.2, 5, 3) // 3 images per carousel item
		}
	}, [width])
	
	// Set values for page fade animation
	const pageFade = {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
	}

    return (
		<motion.div variants={pageFade} initial="initial" animate="animate" exit="exit">
			<div className={styles.carouselWrapper}>
				{/* CAROUSEL */}
				<Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme="dark" indicators={false}>
					{srcIndices.map(srcIndex => 
						<Carousel.Item key={srcIndex}>
							<Container>
								<Row className={styles.carouselChild}>
									{/* RENDER CURRENT IMAGES */}
									{imageSrcs.slice(srcIndex, srcIndex + step).map(
										(src, i) => {
											const altText = imageAlts[srcIndex + i]
											return (
												<Col lg={4} sm={6} xs={12} key={src}>
													<Image src={src} height={imageHeight} alt={altText} />
												</Col>
											)
										}             
									)}	
								</Row>
							</Container>
						</Carousel.Item>
					)}
				</Carousel>
			</div>
		</motion.div>
    )
};

export default HomePage
