import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "./ThemeContext";
import userEvent from "@testing-library/user-event";
import LinksNavegationSideBar from "../components/LinksNavegationSideBar/LinksNavegationSideBar";
import { MemoryRouter } from "react-router-dom";

describe("ThemeContext", () => {
  test("Change to dark theme", async () => {
    const user = userEvent.setup();

    const { container } = render(
      <MemoryRouter>
        <ThemeProvider>
          <LinksNavegationSideBar />
        </ThemeProvider>
      </MemoryRouter>
    );

    const themeDefault = screen.getByTestId("");
    const label = screen.getByRole("button", { name: "★ ★" });

    expect(themeDefault.dataset.testid).toMatch("");

    await user.click(label);
    expect(themeDefault.dataset.testid).toMatch(/dark/i);
  });
});
