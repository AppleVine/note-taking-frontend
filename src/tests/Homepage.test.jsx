// When vising the root route, expect the rendered content to include
// "Note Taking Application" as per the contents of Homepage.jsx


// Render: mock browser rendering system
// Screen: provides acces to virtual, mocked react app.
import { render, screen } from "./customNotesRenderer"

// Adds jest-compatible matcher functions focused on react apps.
import "@testing-library/jest-dom"

// Components that we want to test:
import Homepage from "../pages/Homepage"

// Jest test:
test("Homepage displays a title", () => {
    // Set up the "page" of content to render.
    // This uses the custom "render" function from customNotesRenderer. 
    const { container } = render(<Homepage />);

    // Do human-like actions to the "rendered" content. 
    let seenTitle = screen.getByText("Note Taking Application")

    // Jest matcher/expecter statements.
    // Assertion to confirm expected behaviour / results.

    expect(seenTitle).toBeTruthy();

})