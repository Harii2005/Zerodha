import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero.js";

describe("Hero Component", () => {
  test("render Hero Image", () => {
    render(<Hero />);

    const HeroImage = screen.getByAltText("Zerodha Home Hero");
    expect(HeroImage).toBeInTheDocument();
    expect(HeroImage).toHaveAttribute("src", "/assets/homeHero.png");
  });
  test("renders signup button", () => {
    render(<Hero />);
    const signupButton = screen.getByRole("button", { name: "SignUp for free" });
    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveClass("btn-primary");
  });
});
