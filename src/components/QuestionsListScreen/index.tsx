import { useNavigate } from "react-router-dom";
import { UnorderedList, Text, Badge, ListItem} from '@chakra-ui/react'

import { LoadingScreen } from "components/LoadingScreen";
import { useQuestions } from "services/useApi";
import { AppWrapper, StyledListItem, SearchWrapper, StyledImage } from "./QuestionListScreen.styles";
import { SearchBar } from "components/SearchBar";


interface Question {
  id: number;
  question: string;
  image_url: string;
  thumb_url: string;
  published_at: string;
  choices: Choice[];
}
interface Choice {
  choice: string;
  votes: number;
}

export function QuestionsListScreen() {
  const { data, isLoading } = useQuestions("");
  const navigate = useNavigate();


  function handleQuestionClick(questionId: number) {
    navigate(`/questions/${questionId}`);
  }

  if (isLoading) {
    return <LoadingScreen />;
  }


  console.log(data);
  return (
    <AppWrapper>
      <SearchWrapper>
        <SearchBar />
      </SearchWrapper>

      <UnorderedList style={{ marginTop: "2rem", listStyleType: "none"}}>
      {data.map((item: Question) => (
        <StyledListItem key={item.id} onClick={() => handleQuestionClick(item.id)}>
          <Text fontSize="md">{item.question}</Text>
          <StyledImage src={item.thumb_url} alt={`Thumbnail for question ${item.id}`} />
          <Text fontSize="sm">{item.published_at}</Text>
          <UnorderedList>
            {item.choices.map((choice: Choice, index: number) => (
              <ListItem key={index}>
                <Badge borderRadius="full" px="2" fontSize="0.8em" colorScheme="teal">
                  {choice.choice}
                </Badge>
                <Text as="span" ml="2" fontSize="sm" color="gray.600">
                  {choice.votes} votes
                </Text>
              </ListItem>
            ))}
          </UnorderedList>
        </StyledListItem>
      ))}
    </UnorderedList>
    </AppWrapper>
  );
}
