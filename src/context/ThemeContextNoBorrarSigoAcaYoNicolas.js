import { logRoles, render, screen } from "@testing-library/react";
import { ThemeProvider } from "./ThemeContext";
import userEvent from "@testing-library/user-event";

describe("ThemeContext", () => {
  test("User click in theme button", async () => {
    const user = userEvent.setup();

    const { container } = render(
      <ThemeProvider>
        <ButtonContext />
      </ThemeProvider>
    );

    logRoles(container);
  });
});
