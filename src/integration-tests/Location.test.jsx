/**
 * @vitest-environment jsdom
 */
import Location from "../pages/Location";
import React from 'react';
import '@testing-library/jest-dom/vitest';
import setupTests from "../setupTests";
import { test, expect, vi } from 'vitest';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getMapType } from "../mocks/handlers";

setupTests()

const user = userEvent.setup()

test('Correct text and header should be displayed.', () => {
    // Render component
    render(<Location />)
    // Find header
    const header = screen.getByRole('heading', {name: 'Come Visit Us'})
    expect(header).toBeInTheDocument()
    // Find text
    const text = screen.getByText("We are located just steps away from the famous Murrayfield and Roseburn bars as well as a short walk away from Edinburgh's Murrayfield Stadium - the home of Scottish Rugby.")
    expect(text).toBeInTheDocument()
})

// Define mock image urls
const roadMapUrl = 'blob:http://mock-roadmap-url'
const hybridUrl = 'blob:http://mock-hybrid-url'

test('Background image loads with correct url, buttons are rendered and image url can be changed.', async () => {
    // Mock image url, change based on map type
    global.URL.createObjectURL = vi.fn(() => {
        const mapType = getMapType()
        return mapType === 'roadmap'? roadMapUrl : hybridUrl
    })
    // Render component
    const { container } = render(<Location />)
    // Placeholder background should be present
    let placeholderDiv = container.getElementsByClassName('_placeholder_2008d8')
    expect(placeholderDiv).toHaveLength(1)
    // Map background should not be present
    let mapDiv = container.getElementsByClassName('_backgroundMap_2008d8')
    expect(mapDiv).toHaveLength(0)
    // Map toggle button should not be present
    let toggle = screen.queryByRole('group')
    expect(toggle).not.toBeInTheDocument()
    // Link to directions should be present and have correct href
    const directionsLink = screen.getByRole('link')
    expect(directionsLink).toBeInTheDocument()
    expect(directionsLink).toHaveAttribute('href', "https://www.google.com/maps/dir//27+Roseburn+Terrace,+Edinburgh+EH12+5NG/@55.9484367,-3.2367662,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4887c7accedae949:0xf44a5da22899ca4e!2m2!1d-3.2344121!2d55.9454082?entry=ttu&g_ep=EgoyMDI1MDYyOS4wIKXMDSoASAFQAw%3D%3D")
    // Spinner and loading text should be present
    const spinner = container.getElementsByClassName('spinner-border')
    expect(spinner).toHaveLength(1)
    const loadingText = screen.getByText('Map loading...')
    expect(loadingText).toBeInTheDocument()
    // Wait for map to load with mock url
    await waitFor(() => {
        // Map background should be present
        mapDiv = container.getElementsByClassName('_backgroundMap_2008d8')
        expect(mapDiv).toHaveLength(1)
    })
    // Should have correct background image based on default map type = roadmap
    expect(mapDiv[0]).toHaveAttribute('style', `background-image: url(${roadMapUrl});`)
    // Placholder should not be present
    placeholderDiv = container.getElementsByClassName('_placeholder_2008d8')
    expect(placeholderDiv).toHaveLength(0)
    // Loading text should not be present
    expect(loadingText).not.toBeInTheDocument()
    // Map toggle should be present with correct button text
    toggle = screen.getByRole('group')
    expect(toggle).toBeInTheDocument()
    const mapButton = toggle.children[0]
    expect(mapButton.textContent).toBe('Map')
    const satButton = toggle.children[1]
    expect(satButton.textContent).toBe('Satellite')
    // Clicking satellite button should change background image
    await user.click(satButton)
    // Map url should change
    expect(mapDiv[0]).toHaveAttribute('style', `background-image: url(${hybridUrl});`)
})