/**
 * DetailScreen Component
 * 
 * This component displays the details of a selected question and allows user interactions.
 * - The component is shown when a row is selected in the "List Screen" or when the app is opened with the detail screen URL.
 * - Allows users to navigate back to the listing.
 * - Conveys all the information of the object using appropriate visualization widgets.
 * - Users can share the content with others via the "Share Screen".
 * - Users can vote on a particular answer using a button, triggering a call to the API endpoint to update the question.
 */

import { LoadingScreen } from "components/LoadingScreen";
import { QuestionCard } from "components/QuestionCard";
import { RetryAction } from "components/RetryAction";
import { useParams, useNavigate} from "react-router-dom";
import { shareContent, useQuestion, vote,  } from "services/useApi";
import { Button, HStack, Icon, VStack } from '@chakra-ui/react';
import { FiShare2 } from 'react-icons/fi';

export function DetailScreen(){
  const { id } = useParams<{ id: string }>();
  const { data: question, isLoading, isError, refetch } = useQuestion(Number(id));
  const navigate = useNavigate();

  const handleShare = async () => {
    try {
      const destination_email = "sample@example.com";
      const content_url = window.location.href;
      await shareContent(destination_email, content_url);
      alert("Conteúdo compartilhado com sucesso!");
    } catch (error) {
      alert("Ocorreu um erro ao compartilhar o conteúdo. Tente novamente.");
    }
  };;

  const handleVote = async (choice: string) => {
    try {
      await vote(Number(id), choice);
      alert('Voto registrado com sucesso!');
      refetch(); // Atualiza os dados da pergunta
    } catch (error) {
      alert('Ocorreu um erro ao registrar o voto. Tente novamente.');
    }
  };
  
  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <RetryAction onRetry={refetch}/>
  }
  return (
    <VStack spacing={4}>
    <QuestionCard questionData={question} onVote={handleVote}/>
    <HStack spacing="4">

    <Button size="lg" onClick={() => navigate(-1)} colorScheme="red">
      Back
    </Button>
    <Button size="lg" onClick={handleShare} leftIcon={<Icon as={FiShare2} />} colorScheme="blue">
      Share
    </Button>
    </HStack>
  </VStack>
  )
}