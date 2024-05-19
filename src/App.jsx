import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import { Loader } from './components';
import { AuthProvider } from './context/auth';
import { LoaderProvider, useLoader } from './context/loader';

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <LoaderProvider>
          <AuthProvider>
            <AppLoader />
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </AuthProvider>
        </LoaderProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;

function AppLoader() {
  const { isLoading } = useLoader();
  return isLoading ? <Loader /> : null;
}
