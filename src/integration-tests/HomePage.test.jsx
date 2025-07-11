/**
 * @vitest-environment jsdom
 */
import React from 'react'
import HomePage from '../pages/HomePage'
import '@testing-library/jest-dom/vitest';
import { screen, render, cleanup, act } from '@testing-library/react';
import { test, expect, afterEach} from 'vitest';
import { imageSrcs, imageAlts } from '../data';

afterEach(() => {
    cleanup()
})

test('Correct number of images should be displayed depending on screen size.', () => {
    // Render component
    render(<HomePage />)
    // Set screen width to 1000px
    act(() => {
        global.innerWidth = 1000;
        global.dispatchEvent(new Event('resize'));
    });
    // Find images
    let images = screen.getAllByRole('img')
    // Should be 15
    expect(images).toHaveLength(15)
    // Set screen width to 800px
    act(() => {
        global.innerWidth = 800;
        global.dispatchEvent(new Event('resize'));
    });  
    // Find images
    images = screen.getAllByRole('img') 
    // Should now be 14
    expect(images).toHaveLength(14)
    // Set screen width to 300px
    act(() => {
        global.innerWidth = 300;
        global.dispatchEvent(new Event('resize'));
    });  
    // Find images
    images = screen.getAllByRole('img') 
    // Should now be 15
    expect(images).toHaveLength(15)    
})

test('Images should have correct source and alt text.', () => {
    // Render component
    render(<HomePage />)
    // Set screen width to 1000px
    act(() => {
        global.innerWidth = 1000;
        global.dispatchEvent(new Event('resize'));
    });
    // Find images
    const images = screen.getAllByRole('img')
    // Assert that sources are and alt text are correct
    imageSrcs.forEach((src, index) => {
        expect(images[index]).toHaveAttribute('src', src)
        expect(images[index]).toHaveAttribute('alt', imageAlts[index])
    })   

})
