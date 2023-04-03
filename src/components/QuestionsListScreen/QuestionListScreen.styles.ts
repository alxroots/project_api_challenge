import { Box, ListItem, Image} from '@chakra-ui/react';
import styled from 'styled-components';

export const SearchWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const AppWrapper = styled(Box)`
  padding: 2rem;
`;

export const StyledListItem = styled(ListItem)`
  cursor: pointer;
  padding: 1.5rem;
  background-color: #ffffff;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;

export const StyledImage = styled(Image)`
  width: 120px;
  height: 120px;
  border-radius: 8px;
  margin-bottom: 1rem;
  object-fit: cover;
`;

