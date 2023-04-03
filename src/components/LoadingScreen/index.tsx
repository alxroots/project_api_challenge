/**
 * LoadingScreen Component
 *
 * This component displays a loading screen while the server health is being checked.
 * - If the server health is OK, the application proceeds to the "List Screen".
 * - If the server health is NOT OK, the application displays a "Retry Action" widget.
 */
import { Spinner } from '@chakra-ui/react';
import styled from 'styled-components';

export function LoadingScreen() {
  return (
    <Container>
      <Spinner />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;