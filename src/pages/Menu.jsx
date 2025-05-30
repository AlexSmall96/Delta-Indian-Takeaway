import React, { useEffect, useState } from "react"
import { Container, Row, Col, Form } from "react-bootstrap";
import menuItems from '../data'
import useWindowDimensions from "../hooks/useWindowDimensions";

const Menu = () => {
    // Initialise state variables
    const [category, setCategory] = useState('NON VEGETARIAN STARTERS')
    const [items, setItems] = useState([])

    // Initalise width using hook
    const { width } = useWindowDimensions()

    // Use effect to update items shown when category changes
    useEffect(() => {
        setItems(menuItems.filter(item => item.category === category))
    }, [category])

    // Handle form change for small screens
    const handleChange = (event) => {
        setCategory(event.target.value)
    }

    // Define menu categories array
    const categories = [
        'NON VEGETARIAN STARTERS',
        'VEGETARIAN STARTERS',
        'TANDOORI DISHES',
        'DELTA SPECIALITIES',
        'DELTA CLASSICS',
        'BIRYANI',
        'MACH (FISH) DISHES',
        'VEGETARIAN MAIN DISHES',
        'EUROPEAN SELECTION',
        'SABZI - SIDE DISHES',
        'RICE',
        'BREADS',
        'POPADUMS AND CHUTNEYS',
        'DESSERTS',
        'BALTI & RECOMMENDED SET DINNERS'
    ]

    return (
        <Container>
            {/* NOTE */}
            <h3>FOOD ALLERGY?</h3>
            <p>
                Management advises that food prepared here may contain or have come in contact with peanuts, pine nuts, soybeans, 
                milk, eggs, wheat, shellfish or fish. Therefore we cannot guarantee that traces of the above allergens are not present in our dishes.
            </p>
            <p>
                Please ask a member of staff when placing your order. Thank you.
            </p>
            {/* MENU CATEGORIES */}
            {width >= 768?
                /* LIST FOR LARGE SCREENS */
                <Row>
                    {categories.map(cat => <Col md='2' onClick={() => setCategory(cat)}>{cat}</Col>)}
                </Row>

            :   
                /* DROPDOWN FOR SMALL SCREENS */ 
                <Form.Select onChange={handleChange}>
                    {categories.map(cat => <option>{cat}</option>)}
                </Form.Select>}
            {/* MENU ITEMS */}
            <Row>
                {items.map(item => 
                <>
                    <p>{item.name}, {item.description}, {item.price}</p>
                </>)}
            </Row>
        </Container>
    )
};

export default Menu
