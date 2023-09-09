import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("should have Docs text", () => {
    render(<Home />);
    const myElem = screen.getByText("Docs");
    expect(myElem).toBeInTheDocument();
  });

  it('should contain the text "information"', () => {
    render(<Home />);
    const myElem = screen.getByText(/information/i);
    expect(myElem).toBeInTheDocument();
  });

  it("should have an image with alt text 'Vercel Logo'", () => {
    render(<Home />);
    const imageElement = screen.getByAltText("Vercel Logo");
    expect(imageElement).toBeInTheDocument();
  });

  it("should have an image with alt text 'Next.js Logo'", () => {
    render(<Home />);
    const imageElement = screen.getByAltText("Next.js Logo");
    expect(imageElement).toBeInTheDocument();
  });

  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: "Learn",
    });

    expect(heading).toBeInTheDocument();
  });


  it("should have a link with text 'Instantly deploy your Next.js site to a shareable URL with Vercel.'", () => {
    render(<Home />);
    const linkElement = screen.getByText(
      "Instantly deploy your Next.js site to a shareable URL with Vercel."
    );
    expect(linkElement).toBeInTheDocument();
  });

});
