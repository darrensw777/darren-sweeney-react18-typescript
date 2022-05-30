import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Gallery } from "containers";

describe("Gallery container", () => {
    beforeEach(() => {
        render(<Gallery />, { wrapper: MemoryRouter });
    });

    test("renders the page title", () => {
        const headerTitle = screen.getByRole("heading", { level: 1 });
        expect(headerTitle).toBeInTheDocument();
    });

    test("renders the page description", () => {
        const { container } = render(<Gallery />, { wrapper: MemoryRouter });
        const subtitleElement = container.querySelectorAll(".sub-title");
        expect(subtitleElement.length).toBe(1);
    });
});
