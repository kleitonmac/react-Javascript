import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext";

// Hook personalizado para consumir o TitleColorContext
// Centraliza o acesso ao contexto e evita repetição de código
export const useTitleColorContext = () => {

    // Obtém o contexto
    const context = useContext(TitleColorContext);

    // Garantia de segurança:
    // Se o hook for usado fora do Provider,
    // lançamos um erro explícito para facilitar o debug
    if (!context) {
        throw new Error(
            "useTitleColorContext deve ser usado dentro de TitleColorContextProvider"
        );
    }

    // Retorna o estado (color) e o dispatch
    return context;
};
