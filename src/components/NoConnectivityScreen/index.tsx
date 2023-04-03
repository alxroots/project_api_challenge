/**
 * NoConnectivityScreen Component
 * 
 * This component monitors the Internet connectivity of the app and displays a notification when the connection is lost.
 * - The screen remains visible as long as there is no Internet connection.
 * - When a connection is regained, the user is returned to the state where they were before.
 */

import { Box, Center, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Container = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
`;

const Overlay = styled(Center)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 1;
`;

const Message = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  color: red;
  z-index: 2;
`;

export function NoConnectivityScreen() {
  return (
    <Container>
      <Overlay>
        <Message>No internet connection</Message>
      </Overlay>
    </Container>
  );
}