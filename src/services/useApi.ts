import { useQuery } from 'react-query';
import api from './api';

export function useQuestions(filter: string) {
  return useQuery(['questions', filter], async () => {
    const { data } = await api.get('/questions', { params: { filter } });
    return data;
  });
}
export function useHealthCheck() {
  return useQuery('healthCheck', async () => {
    const { data } = await api.get('/health');
    return data;
  });
}
export function useQuestion(id: number) {
  return useQuery(["questions", id], async () => {
    const { data } = await api.get(`/questions/${id}`);
    return data;
  });
}

export async function shareContent(destination_email: string, content_url: string) {
  const response = await api.post('/share', null, {
    params: {
      destination_email,
      content_url,
    },
  });
  return response;
}

export async function vote(questionId: number, choice: string) {
  const response = await api.put(`/questions/${questionId}`, { choice });
  return response;
}
