import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Detail from "./pages/detail/Detail";
import Nav from "./pages/Nav";
import GlobalStyle from "./GlobalStyle";
import IssuesList from "./pages/IssuesList/IssuesList";
import { styled } from "styled-components";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <IssuesList />,
    },
    {
      path: "/detail",
      element: <Detail />,
    },
  ]);
  return (
    <RootLayout>
      <Nav />
      <GlobalStyle />
      <RouterProvider router={router} />
    </RootLayout>
  );
}

export default App;

const RootLayout = styled.div`
  border: 1px solid black;
  width: 90vw;
  height: 100vh;
  margin: auto;
`;
