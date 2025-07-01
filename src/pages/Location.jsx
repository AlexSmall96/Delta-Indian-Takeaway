import React, { useEffect, useState } from "react"
import styles from '../styles/Location.module.css'

const Location = () => {
	
	// Initialize map url variable
	const [mapUrl, setMapUrl] = useState('')

	// Fetch static google map for background image
	useEffect(() => {
		const fetchMap = async () => {
			try {
				const response = await fetch(`http://localhost:3001/map`)
				const blob = await response.blob();
        		const objectUrl = URL.createObjectURL(blob);
        		setMapUrl(objectUrl);
			} catch (err) {
				console.log(err)
			}
		}
		fetchMap()
	}, [])

	return (
		<>	
			{/* INFORMATION ON LOCATION */}
			<div className={styles.locationText}>
				<h4>Come Visit Us</h4>
				<p>We are located just steps away from the famous Murrayfield and Roseburn bars as well as a short walk away from Edinburgh's Murrayfield Stadium - the home of Scottish Rugby.</p>
			</div>
			{/* STATIC GOOGLE MAP AS BACKGROUND IMAGE */}
			<div className={styles.backgroundMap} style={{backgroundImage: `url('${mapUrl}')`}}>
			</div>		
		</>
    )
};

export default Location

