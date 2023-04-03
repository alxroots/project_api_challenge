/**
 * RetryAction Component
 * 
 * This component displays a button that allows users to retry an action when there is an error.
 * - Can be reused across multiple screens of the app.
 */

import { Button, Flex, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

const RetryActionWrapper = styled(Flex)`
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const RetryActionContent = styled(Flex)`
  flex-direction: column;
  align-items: center;
`;

const RetryActionTitle = styled(Text)`
  font-size: 2xl;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const RetryActionButton = styled(Button)`
  margin-top: 1rem;
`;

type OnRetryFn = () => void;

interface RetryActionProps {
  onRetry: OnRetryFn;
}

export function RetryAction({ onRetry }: RetryActionProps) {
  return (
    <RetryActionWrapper>
      <RetryActionContent>
        <RetryActionTitle>Oops! Something went wrong.</RetryActionTitle>
        <RetryActionButton colorScheme="teal" onClick={onRetry}>
          Try Again
        </RetryActionButton>
      </RetryActionContent>
    </RetryActionWrapper>
  );
}
