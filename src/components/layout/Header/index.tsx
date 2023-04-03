/**
 * Header Component
 * 
 * This component displays the header of the app, which typically includes the app title and logo.
 * - Can be reused across multiple screens of the app.
 */

import { Flex, Box, Text } from "@chakra-ui/react";
import styled from "styled-components";

const HeaderContainer = styled(Box)`
  background-color: #319795;
  color: #fff;
`;

const Logo = styled(Text)`
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
`;

export function Header() {
  return (
    <HeaderContainer py={4} px={6}>
      <Flex alignItems="center" justifyContent="space-between">
        <Logo>My Awesome App</Logo>
      </Flex>
    </HeaderContainer>
  );
}