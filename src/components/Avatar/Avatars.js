// import { render, screen } from "@testing-library/react";
// import { logRoles } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import Avatar from "./Avatar";

// test("Al dar click sobre el boton del perfil la app debe mostrar la pagina de error404", () => {
//   //RESPUESTA AL ERROR DEL PROMPT
//   //https://stackoverflow.com/questions/55088482/jest-not-implemented-window-alert
//   const jsdomPrompt = global.prompt;
//   global.prompt = () => {
//     return "nicolas";
//   };
//   window.localStorage = {
//     set:
//   }

//   const user = userEvent.setup();

//   const { container } = render(<Avatar />);
//   logRoles(container);

//   const profileLink = screen.getByRole("img", { name: /profilePic/i });
//   expect(profileLink).toBeInTheDocument();

//   //expect(screen.getByText("/")).toBeInTheDocument();

//   global.prompt = jsdomPrompt;
// });

// test("renders learn react link", () => {
//   // render(<App />);
//   // const linkElement = screen.getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();
//   // console.log(window.innerWidth);
//   // window.innerWidth = 600;
//   // console.log(window.innerWidth);
// });
