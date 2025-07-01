// Proxy server used to get static google map for background image of location page
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3001;
require('dotenv').config();

// Google static maps api key
const API_KEY = process.env.STATIC_MAP_API_KEY;

// Define proxy server to get google maps image
app.get('/map', async (req, res) => {
	const type = req.query.type
	const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=27+Roseburn+Terrace,Edinburgh&zoom=16&size=2000x200&scale=4&maptype=${type}&style=feature:poi|visibility:off&key=${API_KEY}`;
	try {
		const response = await axios.get(mapUrl, { responseType: 'arraybuffer' });
		res.set('Content-Type', 'image/png');
		res.send(response.data);
	} catch (error) {
		res.status(500).send('Error fetching map');
	}
});

app.listen(PORT, () => {
  	console.log(`Server is online on port: ${PORT}`);
});