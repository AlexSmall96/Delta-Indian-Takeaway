/**
 * @vitest-environment jsdom
 */
import React from 'react'
import MenuItem from '../components/MenuItem'
import '@testing-library/jest-dom/vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { test, expect, afterEach} from 'vitest';

afterEach(() => {
    cleanup()
})

test('Correct text should be displayed on a standard item, with no chilly icons or VG flag.', () => {
    // Define standard item data
    const standardItem = {
		name: "Murghi Tikka (Chicken) Kebab",
		description: "Marinated and then barbecued chicken kebab.",
		price: "£5.00",
		category: "NON VEGETARIAN STARTERS"
	}
    // Render component
    const { container } = render(<MenuItem item={standardItem} />)
    // Correct text should be displayed
    const textSections = ["Murghi Tikka (Chicken) Kebab", "Marinated and then barbecued chicken kebab.", "£5.00" ]
    textSections.map(text => expect(screen.getByText(text)).toBeInTheDocument())
    // Dots should be present
    const dotsDiv = container.getElementsByClassName('_dotted_f8ff20')
    expect(dotsDiv).toHaveLength(1)
    // No chilly icons should be present
    const icons = container.getElementsByClassName('fa-pepper-hot')
    expect(icons).toHaveLength(0)
    // No VG flag should be present
    const vgText = screen.queryByText('VG')
    expect(vgText).not.toBeInTheDocument()
})

test('Correct number of chilly icons should be displayed with an item with spice level, and VG flag should be displayed if present in data.', () => {
    // Define item with spice level and VG flag	
    const spicyItem = {
		name: "Sabzi Jalfrezie",
		description: "Mixed vegetables cooked in a blend of fresh ingredients, in a medium hot savoury sauce.",
		price: "£7.60",
		category: "VEGETARIAN MAIN DISHES",
		spice: 1,
		vegetarian: true
	}
    // Render component
    let obj = render(<MenuItem item={spicyItem} />)  
    // 1 chilly icon should be present
    const singleIcon = obj.container.getElementsByClassName('fa-pepper-hot')
    expect(singleIcon).toHaveLength(1)
    // VG flag should be present
    const vgText = screen.getByText('VG')
    expect(vgText).toBeInTheDocument() 
    // Use different item with two chilly icons
    const verySpicyitem = {
		name: "Sabzi Jalfrezie",
		description: "Mixed vegetables cooked in a blend of fresh ingredients, in a medium hot savoury sauce.",
		price: "£7.60",
		category: "VEGETARIAN MAIN DISHES",
		spice: 2,
		vegetarian: true
	}    
    // Render component
    obj = render(<MenuItem item={verySpicyitem} />)
    // Should be 2 chilly icons
    const doubleIcon = obj.container.getElementsByClassName('fa-pepper-hot')
    expect(doubleIcon).toHaveLength(2)
})

test('Dotted line should not be present if item belongs to DELTA CLASSICS and has no price listed', () => {
    // Define item in DELTA CLASSICS CATEGORY with no price (general dish without meat choice)
    const classicItem = {
		name: "Vindaloo",
		description: "A hot classic curry to make your palate dance.",
		price: null,
		category: "DELTA CLASSICS",
		spice: 3
	}
    // Render component
    let obj = render(<MenuItem item={classicItem} />)  
    // Should be no dotted line
    const nullDottedLine = obj.container.getElementsByClassName('_dotted_f8ff20')
    expect(nullDottedLine).toHaveLength(0)
    // Define item in DELTA CLASSICS CATEGORY with no price (meat choice included)
    const meatChoice = 	{
		name: "Prawn",
		description: null,
		price: "£8.70",
		category: "DELTA CLASSICS"
	}
    // Render component
    obj = render(<MenuItem item={meatChoice} />)    
    // Dotted line should be present
    const dottedLine = obj.container.getElementsByClassName('_dotted_f8ff20')
    expect(dottedLine).toHaveLength(1)  

})