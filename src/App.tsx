import { QuestionsListScreen } from 'components/QuestionsListScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/global.css';
import { LoadingScreen } from 'components/LoadingScreen';
import { RetryAction } from 'components/RetryAction';
import { useHealthCheck } from 'services/useApi';
import { DetailScreen } from 'components/DetailScreen';
import { useEffect, useState } from 'react';
import { NoConnectivityScreen } from 'components/NoConnectivityScreen';
import { Header } from 'components/layout/Header';

function AppContent({ status, refetch }: { status: string, refetch: () => void }) {
  const [isOnline, setIsOnline] = useState<boolean>(true);

  useEffect(() => {
    const handleOnlineStatus = () => setIsOnline(true);
    const handleOfflineStatus = () => setIsOnline(false);

    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOfflineStatus);

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOfflineStatus);
    };
  }, []);

  const handleRetry = () => {
    refetch();
  };

  return (
    <>
      {!isOnline && <NoConnectivityScreen />}
      {isOnline && (
        status === 'loading' ? <LoadingScreen /> :
          status === 'success' ? (
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<QuestionsListScreen />} />
                <Route path="/questions/:id" element={<DetailScreen />} />
              </Routes>
            </BrowserRouter>
          ) : <RetryAction onRetry={handleRetry} />
      )}
    </>
  );
}

export function App() {
  const { status, refetch } = useHealthCheck();

  return (
    <div>
      <Header />
      <AppContent status={status} refetch={refetch} />
    </div>
  );
}
