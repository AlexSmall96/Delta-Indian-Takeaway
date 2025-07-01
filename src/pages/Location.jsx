import React, { useEffect, useState } from "react"
import styles from '../styles/Location.module.css'
import { ButtonGroup, Button } from "react-bootstrap";
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

	return (
		<>	
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
			</div>		
		</>
    )
};

export default Location

