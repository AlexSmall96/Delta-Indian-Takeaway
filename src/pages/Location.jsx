import React, { useEffect, useState } from "react"
import styles from '../styles/Location.module.css'
import { ButtonGroup, Button } from "react-bootstrap";
import { motion } from 'framer-motion';

const Location = () => {
	
	// Initialize map variables
	const [mapUrl, setMapUrl] = useState('')
	const [type, setType] = useState('roadmap')

	// Fetch static google map for background image
	useEffect(() => {
		const fetchMap = async () => {
			try {
				const response = await fetch(`http://localhost:3001/map?type=${type}`)
				const blob = await response.blob();
        		const objectUrl = URL.createObjectURL(blob);
        		setMapUrl(objectUrl);
			} catch (err) {
				console.log(err)
			}
		}
		fetchMap()
	}, [type])

	// Set values for page fade animation
	const pageFade = {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
	}

	return (
		<motion.div variants={pageFade} initial="initial" animate="animate" exit="exit">	
			{/* INFORMATION ON LOCATION */}
			<div className={styles.locationText}>
				<h4>Come Visit Us</h4>
				<p>We are located just steps away from the famous Murrayfield and Roseburn bars as well as a short walk away from Edinburgh's Murrayfield Stadium - the home of Scottish Rugby.</p>
			</div>
			{/* STATIC GOOGLE MAP AS BACKGROUND IMAGE */}
			<div className={styles.backgroundMap} style={{backgroundImage: `url('${mapUrl}')`}}>
				<ButtonGroup className={styles.toggleMap}>
					<Button variant="light" onClick={() => setType('roadmap')}>Map</Button>
					<Button variant="light" onClick={() => setType('hybrid')}>Satellite</Button>
				</ButtonGroup>
				<Button className={styles.directions} variant='light'>
					<a target='_blank' rel="noreferrer" href='https://www.google.com/maps/dir//27+Roseburn+Terrace,+Edinburgh+EH12+5NG/@55.9484367,-3.2367662,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4887c7accedae949:0xf44a5da22899ca4e!2m2!1d-3.2344121!2d55.9454082?entry=ttu&g_ep=EgoyMDI1MDYyOS4wIKXMDSoASAFQAw%3D%3D'>Directions</a>
				</Button>
			</div>		
		</motion.div>
    )
};

export default Location

