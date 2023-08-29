import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IssuesList from "./pages/IssuesList";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <IssuesList />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
