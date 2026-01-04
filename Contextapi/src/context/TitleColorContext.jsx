// Importa as APIs necessárias do React
// createContext → cria um contexto global
// useReducer → gerencia estados baseados em ações (actions)
import { createContext, useReducer } from "react";

// Criação do contexto responsável pela cor do título
// Este contexto será consumido por qualquer componente
// que precise acessar ou alterar a cor do título
export const TitleColorContext = createContext();

// Reducer responsável por controlar as mudanças de estado
// Ele recebe:
// state  → estado atual
// action → objeto que descreve a ação disparada
const titleColorReducer = (state, action) => {

    // O switch define como o estado muda
    // de acordo com o tipo da action
    switch (action.type) {

        // Altera a cor para vermelho
        case "RED":
            return { 
                ...state, 
                color: "red" 
            };

        // Altera a cor para azul
        case "BLUE":
            return { 
                ...state, 
                color: "blue" 
            };

        // Altera a cor para verde
        case "GREEN":
            return { 
                ...state, 
                color: "green" 
            };

        // Caso a action não exista, o estado atual é mantido
        default:
            return state;
    }
};

// Provider do contexto
// Ele envolve os componentes da aplicação
// e disponibiliza o estado e o dispatch globalmente
export const TitleColorContextProvider = ({ children }) => {

    // useReducer retorna:
    // state    → estado atual do contexto
    // dispatch → função usada para disparar ações
    const [state, dispatch] = useReducer(
        titleColorReducer,
        { color: "green" } // estado inicial
    );

    // Log apenas para fins didáticos/debug
    console.log("TitleColorContext state:", state);

    return (
        // Provider fornece os valores do contexto
        // ...state → expõe as propriedades do estado (color)
        // dispatch → permite alterar o estado a partir dos componentes
        <TitleColorContext.Provider value={{ ...state, dispatch }}>
            {children}
        </TitleColorContext.Provider>
    );
};
