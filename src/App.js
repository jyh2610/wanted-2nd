import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IssuesList from "./pages/IssuesList/IssuesList";
import Detail from "./pages/detail/Detail";

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
  return <RouterProvider router={router} />;
}

export default App;
