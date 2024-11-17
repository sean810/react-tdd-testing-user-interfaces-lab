import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

test("displays an image of yourself with appropriate alt text", () => {
    // Arrange
    render(<App />);
  
    // Act
    const image = screen.getByAltText(/image of myself/i);
  
    // Assert
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", expect.stringContaining("."));
  });
  test("displays a second-level heading with the text `About Me`", () => {
    // Arrange
    render(<App />);
  
    // Act
    const heading = screen.getByRole("heading", { level: 2, name: /about me/i });
  
    // Assert
    expect(heading).toBeInTheDocument();
  });
  test("displays a paragraph with your biography", () => {
    // Arrange
    render(<App />);
  
    // Act
    const paragraph = screen.getByText(/this is my biography/i);
  
    // Assert
    expect(paragraph).toBeInTheDocument();
  });
  test("displays links to GitHub and LinkedIn", () => {
    // Arrange
    render(<App />);
  
    // Act
    const githubLink = screen.getByRole("link", { name: /github/i });
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
  
    // Assert
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "https://github.com/your-username");
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/in/your-profile");
  });
        
