import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Layout from "layouts";

describe("Home container", () => {
    beforeEach(() => {
        render(
            <Layout>
                <></>
            </Layout>,
            { wrapper: MemoryRouter }
        );
    });

    test("renders the header", () => {
        const { container } = render(
            <Layout>
                <></>
            </Layout>,
            { wrapper: MemoryRouter }
        );
        const headerElement = container.querySelectorAll(".header");
        expect(headerElement.length).toBe(1);
    });

    test("renders the footer", () => {
        const { container } = render(
            <Layout>
                <></>
            </Layout>,
            { wrapper: MemoryRouter }
        );
        const footerElement = container.querySelectorAll(".footer");
        expect(footerElement.length).toBe(1);
    });
});
