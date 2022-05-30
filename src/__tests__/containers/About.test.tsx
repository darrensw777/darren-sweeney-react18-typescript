import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { About } from "containers";

describe("About container", () => {
    beforeEach(() => {
        render(<About />, { wrapper: MemoryRouter });
    });

    test("renders the page title", () => {
        const headerTitle = screen.getByRole("heading", { level: 1 });
        expect(headerTitle).toBeInTheDocument();
    });

    test("renders the section title", () => {
        const headerTitle = screen.getByRole("heading", { level: 2 });
        expect(headerTitle).toBeInTheDocument();
    });

    test("renders the sub-section title", () => {
        const headerTitle = screen.getByRole("heading", { level: 3 });
        expect(headerTitle).toBeInTheDocument();
    });

    test("renders the page description", () => {
        const { container } = render(<About />, { wrapper: MemoryRouter });
        const subtitleElement = container.querySelectorAll(".sub-title");
        expect(subtitleElement.length).toBe(1);
    });
});
