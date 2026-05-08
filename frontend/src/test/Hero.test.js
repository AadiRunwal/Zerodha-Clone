import Hero from "../landing_page/home/Hero";
import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

describe("Homepage Hero Component", ()=>{       //----- Test Suite -----

    test("renders Hero Image", ()=>{        //----- Test Case for Hero Image -----
        render(<BrowserRouter><Hero /></BrowserRouter> );
        const heroImg = screen.getByAltText("Hero");
        expect(heroImg).toBeInTheDocument();
        expect(heroImg).toHaveAttribute("src","./media/homeHero.png");
    });
})