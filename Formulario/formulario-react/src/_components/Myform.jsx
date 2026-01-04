// Importando o hook useState para gerenciar estados (inputs controlados)
import { useState } from "react";
import "./Myform.css";

// Componente MyForm recebe "user" como props (caso seja edição)
const MyForm = ({ user }) => {
  // controlled inputs (inputs controlados por estado)

  // Gerenciamento de Inputs com useState
  // Se existir um usuário, inicia com os dados dele; caso contrário, começa vazio
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(); // sem valor inicial definido
  const [password, setPassword] = useState(user ? user.password : "");

  // Função para atualizar o estado do nome toda vez que o input mudar
  const handleName = (e) => {
    setName(e.target.value); // pega o valor do input e passa para o state
  };

  // Função que é executada ao enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // previne o recarregamento da página
    console.log("Enviando o formulario");
    console.log(name);  // mostra o valor do nome no console
    console.log(email); // mostra o valor do email no console
  };

  // JSX retornado pelo componente
  return (
    // Evento onSubmit chama a função de envio
    <form onSubmit={handleSubmit}>
      {/* Criando um formulário */}
      <div>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="name"
          placeholder="Digite seu nome"
          onChange={handleName} // chama a função handleName ao alterar
          value={name}          // valor controlado pelo state "name"
        />
      </div>

      <div>
        {/* Label envolvendo input: acessibilidade e agrupamento */}
         <label>
          {/* Simplificando State: sem função externa */}
          <span>Email:</span>
          <input
            type="email"
            name="email"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)} // atualiza diretamente no state
            value={email} // valor controlado pelo state "email"
          />

          {/* Campo de senha controlado */}
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)} // atualização via arrow function
            value={password} // valor controlado pelo state "password"
          />
        </label>
      </div>

      <div>
        {/* Botão de envio do formulário */}
        <input type="submit" value="Enviar" />
      </div>
    </form>
  );
};

// Exportando o componente para ser usado em outras partes da aplicação
export default MyForm;
