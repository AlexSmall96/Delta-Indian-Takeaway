/**
 * @vitest-environment jsdom
 */
import React from 'react'
import Menu from '../pages/Menu'
import '@testing-library/jest-dom/vitest';
import { screen, render, cleanup, act  } from '@testing-library/react';
import { test, expect, afterEach} from 'vitest';
import { categories, menuItems } from '../data';
import userEvent from '@testing-library/user-event';

afterEach(() => {
    cleanup()
})

const user = userEvent.setup()

test('All categories should be displayed with NON VEGETARIANS STARTERS as default', () => {
    // Render component
    const { container } = render(<Menu />)
    // All categories should be present
    categories.map(cat => expect(screen.getAllByText(cat.name)[0]).toBeInTheDocument())
    // Non vegetarian starters is shown underneath
    const nonVegText = screen.getAllByText('NON VEGETARIAN STARTERS')
    expect(nonVegText).toHaveLength(2)
    // Should be bold in categories list
    expect(nonVegText[0]).toHaveClass('_selected_df6fdc')
    // Assert only one category is bold
    const boldCategories = container.getElementsByClassName('_selected_df6fdc')
    expect(boldCategories).toHaveLength(1)
})

test('Correct menu items are displayed depending on category.', async () => {
    // Render component
    render(<Menu />) 
    const selectedCat = 'NON VEGETARIAN STARTERS'  
    // All menu items in default category should be present
    const nonVegItems = menuItems.filter(item => item.category === selectedCat)
    nonVegItems.map(item => expect(screen.getByText(item.name)).toBeInTheDocument())
    // No other menu items should be present
    let otherItems = menuItems.filter(item => item.category !== selectedCat)
    otherItems.map(item => expect(screen.queryByText(item.name)).not.toBeInTheDocument())
    // Select new category
    const newCat = screen.getByText('TANDOORI DISHES')
    await user.click(newCat)
    // Only Tandoori dishes should now be present
    const tandooriItems = menuItems.filter(item => item.category === 'TANDOORI DISHES')
    tandooriItems.map(item => expect(screen.getByText(item.name)).toBeInTheDocument())
    // No other menu items should be present
    otherItems = menuItems.filter(item => item.category !== 'TANDOORI DISHES')
    otherItems.map(item => expect(screen.queryByText(item.name)).not.toBeInTheDocument())    
})

test('When screen width goes below 768px, categories list is rendered as dropdown', () => {
    // Set screen width
    act(() => {
        global.innerWidth = 700;
        global.dispatchEvent(new Event('resize'));
    });
    // Render component
    render(<Menu />) 
    // Form should be present
    const select = screen.getByRole('combobox')
    expect(select).toBeInTheDocument()
    // Options should be categories
    const options = screen.getAllByRole('option')
    const categoryNames = categories.map(cat => cat.name)
    const optionsText = options.map(option => option.text)
    expect(optionsText).toEqual(categoryNames)
})