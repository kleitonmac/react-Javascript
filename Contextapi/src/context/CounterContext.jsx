// Importa as APIs necessárias do React
// createContext → cria um contexto global
// useState → controla um estado simples
import { createContext, useState } from "react";

// 1 -- Criação do contexto do contador
// Este contexto será responsável por armazenar
// e compartilhar o valor do contador na aplicação
export const CounterContext = createContext();

// Provider do CounterContext
// Ele envolve os componentes que precisam acessar o contador
export const CounterContextProvider = ({ children }) => {

    // Estado do contador
    // counter   → valor atual
    // setCounter → função para atualizar o valor
    const [counter, setCounter] = useState(10);

    return (
        // Provider disponibiliza o estado e a função de atualização
        <CounterContext.Provider value={{ counter, setCounter }}>
            {children}
        </CounterContext.Provider>
    );
};
