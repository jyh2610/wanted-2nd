import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { styled } from 'styled-components';

import GlobalStyle from './GlobalStyle';
import Detail from './pages/detail/Detail';
import Error from './pages/Error/Error';
import IssuesList from './pages/IssuesList/IssuesList';
import Nav from './pages/Nav';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <IssuesList />,
    },
    {
      path: '/detail/:id',
      element: <Detail />,
    },
    {
      path: '*',
      element: <Error />,
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
  width: 60vw;
  height: 90vh;
  margin: 20px auto;
`;
