/**
 * @vitest-environment jsdom
 */
import React from 'react'
import Image from '../components/Image'
import '@testing-library/jest-dom/vitest';
import { screen, render } from '@testing-library/react';
import { test, expect} from 'vitest';

test('Image should be rendered with correct source, height, width and alt text.', () => {
    // Render component
    const src = 'https://res.cloudinary.com/dojzptdbc/image/upload/v1749028793/IMG_3558_eilqga.jpg' 
    render(<Image src={src}  height={100} alt='A variety of dishes from the menu'/>)
    // Find image
    const image = screen.getByRole('img', {name:'A variety of dishes from the menu'})
    // Should have correct source, height and width
    expect(image.src).toBe(src)
    expect(image.width).toBe(100)
    expect(image.height).toBe(100)
    // Should have correct class
    expect(image.classList[0]).toBe('_image_ece26d')
})