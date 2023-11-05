import styled from 'styled-components';
import { Navigate } from 'react-router-dom';

const Header = styled.header``;

function AppRoute() {
  const authenticated = false;

  if (!authenticated) return <Navigate to='/login' />;

  return (
    <div>
      <Header>Header</Header>
    </div>
  );
}

export default AppRoute;
