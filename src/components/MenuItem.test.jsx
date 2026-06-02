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
    render(<MenuItem item={standardItem} />)
    // Correct text should be displayed
    const textSections = ["Murghi Tikka (Chicken) Kebab", "Marinated and then barbecued chicken kebab.", "£5.00" ]
    textSections.map(text => expect(screen.getByText(text)).toBeInTheDocument())
    // No chilly icons should be present
    const icons = screen.queryAllByLabelText('spicy')
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
    const singleIcon = screen.getAllByLabelText('spicy')
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
    cleanup()    
    // Render component
    render(<MenuItem item={verySpicyitem} />)
    // Should be 2 chilly icons
    const doubleIcon = screen.getAllByLabelText('spicy')
    expect(doubleIcon).toHaveLength(2)
})