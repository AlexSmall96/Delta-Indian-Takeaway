import React, { useState, useEffect } from 'react';
import styles from '../styles/ScrollToTop.module.css'
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {

	// State var to set visibility
  	const [visible, setVisible] = useState(false);

	// Toggle visibility based on how far user has scrolled
  	const toggleVisibility = () => {
		if (window.scrollY > 300) {
			setVisible(true);
		} else {
			setVisible(false);
		}
  	};

	// Handle click to scroll to top
  	const handleClick = () => {
    	window.scrollTo({ top: 0, behavior: 'smooth' });
  	};
	
  	useEffect(() => {
    	window.addEventListener('scroll', toggleVisibility);
    	return () => window.removeEventListener('scroll', toggleVisibility);
  	}, []);

  	return (
		<AnimatePresence>
			{visible && (
				<motion.button
					onClick={handleClick}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.4 }}
					className={styles.scrollButton}
				>
					<i className="fa-xl fa-solid fa-arrow-up"></i>
				</motion.button>
			)}
		</AnimatePresence>
  );
};

export default ScrollToTop;
