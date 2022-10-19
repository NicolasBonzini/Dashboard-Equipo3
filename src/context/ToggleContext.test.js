import { useContext } from "react";
import { ToggleContext, ToggleProvider } from "./ToggleContext";
import { logRoles, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
import { act } from "react-dom/test-utils";

describe("ToggleContext", () => {
  test("User click the hamburgue menu", async () => {
    const user = userEvent.setup();

    const { container } = render(
      <ToggleProvider>
        <BurgerMenu />
      </ToggleProvider>
    );

    const buttonWithToggleFunction = screen.getByRole("button", {
      name: "menuButton",
    });

    const nameOfClassBeforeToggle = screen.getByTestId(/burger-menu null/i);
    expect(nameOfClassBeforeToggle.dataset.testid).toMatch(/burger-menu null/i);

    await user.click(buttonWithToggleFunction);

    const namesOfClassAfterToggle = screen.getByTestId(/burger-menu change/i);
    expect(namesOfClassAfterToggle.dataset.testid).toMatch(
      /burger-menu change/i
    );
  });
});
