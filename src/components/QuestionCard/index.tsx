/**
 * QuestionCard Component
 * 
 * This component displays a card containing the details of a single question.
 * - Can be reused across multiple screens of the app.
 */

// components/QuestionCard.tsx
import {
  Box,
  Text,
  VStack,
  Image,
  Heading,
  StackDivider,
  HStack,
  Progress,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import styled from '@emotion/styled';

interface Choice {
  choice: string;
  votes: number;
}

interface Question {
  id: number;
  question: string;
  image_url: string;
  thumb_url: string;
  published_at: string;
  choices: Choice[];
}

interface QuestionCardProps {
  questionData: Question;
  onVote: (choice: string) => void;
}

const StyledBox = styled(Box)`
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const QuestionCard: React.FC<QuestionCardProps> = ({ questionData, onVote}) => {
  const { question, image_url, choices } = questionData;
  const bgColor = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.700', 'gray.200');

  const totalVotes = choices.reduce((acc, choice) => acc + choice.votes, 0);

  return (
    <StyledBox w="100%" maxW="600px" p={6} bg={bgColor}>
      <VStack align="start" spacing={6}>
        <Heading size="lg" color={textColor}>
          {question}
        </Heading>
        <Image src={image_url} alt={question} borderRadius="lg" />
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch"
          width="100%"
        >
          {questionData.choices.map((choice, index) => (
          <Box key={index}>
            <HStack justifyContent="space-between">
              <Text color={textColor}>{choice.choice}</Text>
              <Text color={textColor} fontWeight="bold">
                {((choice.votes / totalVotes) * 100).toFixed(2)}%
              </Text>
            </HStack>
            <Progress
              mt={2}
              value={(choice.votes / totalVotes) * 100}
              borderRadius="md"
              size="xs"
              colorScheme="blue"
            />
            <Button size="sm" onClick={() => onVote(choice.choice)}>
              Vote
            </Button>
          </Box>
        ))}
      </VStack>
    </VStack>
    </StyledBox>
  );
};
