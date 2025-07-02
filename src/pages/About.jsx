import React from "react"
import styles from '../styles/About.module.css'
import { motion } from 'framer-motion';


const About = () => {

	// Set values for page fade animation
	const pageFade = {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
	}

    return (
    	<motion.div variants={pageFade} initial="initial" animate="animate" exit="exit">
			{/* DELTA EXPERIENCE AND BACKGROUND IMAGE */}
      		<div className={styles.experience}>
          		<div className={styles.aboutText}>
          			<h3>The Delta Experience</h3>
          			<p>
            			We take our name from the fertile delta of the Ganges-Brahmaputra river in Bangladesh where the richness of the earth and climate combine to create some of the finest produce in the world.
          			</p>
          			<p>
            			We have lovingly recreated the mouth-watering flavours and subtle aromas of the classical dishes of our homeland. Traditional techniques and spices have also been inspiration for fine new dishes designed to excite the adventurous palate.
            		</p>
            		<p>
            			Classic and contemporary themes intertwine to give Delta itself a unique style. The best new take away and home delivery service is housed in modern surroundings. But Delta is part of an established group of award-winning restaurants - our chefs have been serving Edinburgh for a generation.
            		</p>
            		<p>
            			Delta is everything you would expect from an authentic Indian restaurant and a good deal more. Choose from the full range of old favourites - or treat yourself to something new. Why not try some of our tempting fish and vegetable dishes? We only use the best ingredients and all dishes are cooked fresh on the premises.
          			</p>
          		</div>
        	</div>   
			{/* INFORMATION */}
          	<div className={styles.aboutText}>
            	<p>We are open 7 days a week serving great Indian food from 5:00pm to 11:00pm.</p>
            	<p>We are pleased to provide special Banquet Dinners for larger parties as part of our Outside Catering service. Please call 0131 346 8973 or 0131 347 8868 to speak to Management with your enquiry.</p>
            	<p>We accept cash and all major debit/credit cards (Visa, Access).
              		<br />
                	<strong>Please note that debit/credit cards are only accepted for collection orders only and not for delivery orders.</strong>
            	</p>
            	<p>Delta Indian Takeaway offers a delivery service for orders over £15 (£2 delivery charge applies).</p>
            	<p>This is not fast food and there may be a little delay as we prepare your meal to order. Please note that time given orders are only estimates. Enjoy the Delta Experience!</p>
            	<p>Call us now on 0131 346 8973 or 0131 347 8868 to place your order!</p>
          	</div>
      	</motion.div>
    )
};

export default About
