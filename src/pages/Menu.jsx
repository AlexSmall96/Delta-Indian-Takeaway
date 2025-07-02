import React, { useEffect, useState } from "react"
import { Container, Row, Col, Form } from "react-bootstrap";
import { menuItems, categories } from '../data'
import useWindowDimensions from "../hooks/useWindowDimensions";
import MenuItem from "../components/MenuItem";
import styles from '../styles/Menu.module.css';
import appStyles from '../App.module.css'

const Menu = () => {
    // Initialise state variables
    const [category, setCategory] = useState(categories[0])
    const [items, setItems] = useState([])

    // Initalise width using hook
    const { width } = useWindowDimensions()

    // Use effect to update items shown when category changes
    useEffect(() => {
        setItems(menuItems.filter(item => item.category === category.name))
    }, [category])

    // Handle form change for small screens
    const handleChange = (event) => {
        setCategory(categories.filter(cat => cat.name === event.target.value)[0])
    }

    return (
        <Container className={appStyles.largeVerticalMargin}>
            {/* NOTE */}
            <div className={styles.notice}>
                <h5><strong>FOOD ALLERGY?</strong></h5>
                <p>
                    Management advises that food prepared here may contain or have come in contact with peanuts, pine nuts, soybeans, 
                    milk, eggs, wheat, shellfish or fish. Therefore we cannot guarantee that traces of the above allergens are not present in our dishes.
                </p>
                <p className={appStyles.largeVerticalMargin}>
                    <em>Please ask a member of staff when placing your order. Thank you.</em>
                </p>
            </div>
            {/* MENU CATEGORIES */}
            {width >= 768?
                /* LIST FOR LARGE SCREENS */
                <>
                    <Row className="justify-content-md-center">
                        {categories.map(cat => <Col className={category.name === cat.name? styles.selected : styles.category} key={cat.name} sm='auto' onClick={() => setCategory(cat)}>{cat.name}</Col>)}
                    </Row>
                    <Row className={styles.title}>
                        <h5>{category.name}</h5>
                    </Row>
                </>
            :   
                /* DROPDOWN FOR SMALL SCREENS */ 
                <Form.Select onChange={handleChange} value={category.name}>
                    {categories.map(cat => <option key={cat.name} className={styles.option}>{cat.name}</option>)}
                </Form.Select>}
            {/* CATEGORY DESCRIPTION */}
            <Row className={`${styles.description} ${appStyles.blueFont}`}>
                {category.description}
            </Row>
            {/* MENU ITEMS */}
            <Row>
                {items.map(item => 
                    <MenuItem key={item.name} item={item} className={styles.blueFont}/>
                )}
            </Row>
        </Container>
    )
};

export default Menu
