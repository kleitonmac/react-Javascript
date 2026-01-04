import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { CounterContextProvider } from './context/CounterContext.jsx';
import { TitleColorContextProvider } from './context/TitleColorContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Criando o Provider */}
    <BrowserRouter>
    {/* Com o react Router */}
      <CounterContextProvider>
        {/*5-- Criando contexto complexo */}
        <TitleColorContextProvider>
          <App />
        </TitleColorContextProvider>
      </CounterContextProvider>
    </BrowserRouter>
  </StrictMode>
);