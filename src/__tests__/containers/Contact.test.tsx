import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Contact } from "containers";

describe("Contact container", () => {
    beforeEach(() => {
        render(<Contact />, { wrapper: MemoryRouter });
    });

    test("renders the page title", () => {
        const headerTitle = screen.getByRole("heading", { level: 1 });
        expect(headerTitle).toBeInTheDocument();
    });

    test("renders the page description", () => {
        const { container } = render(<Contact />, { wrapper: MemoryRouter });
        const subtitleElement = container.querySelectorAll(".sub-title");
        expect(subtitleElement.length).toBe(1);
    });
});
