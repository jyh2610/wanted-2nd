import { styled } from 'styled-components';

import List from './components/List';

function IssuesList() {
  return (
    <RootLayout>
      <List />
    </RootLayout>
  );
}

export default IssuesList;

const RootLayout = styled.div`
  height: 90%;
  padding: 0 10px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
