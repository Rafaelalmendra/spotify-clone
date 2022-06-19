import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Footer from './components/Footer';

//contexts
import { AuthContextProvider } from './contexts/AuthContext';

//styles
import GlobalStyle from './styles/global';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <GlobalStyle />
      <App />
      <Footer />
    </AuthContextProvider>
  </React.StrictMode>
);
