// Componente CarDetails recebendo as propriedades (props) via desestruturação
// Cada item passado como atributo no componente pai será recebido aqui
const CarDetails = ({ brand, color, name, km, newCar }) => {
  return (
    <div>
        {/* Título da seção */}
        <h2>Detalhe do carro</h2>

        {/* Lista com as informações do carro usando as props recebidas */}
        <ul>
            <li>Marca: {brand}</li>         {/* Mostra a marca do carro */}
            <li>Cor: {color}</li>           {/* Mostra a cor */}
            <li>Nome: {name}</li>           {/* Nome ou modelo do carro */}
            <li>Quilometragem: {km}</li>    {/* Quilometragem atual */}
        </ul>

        {/* Renderização condicional:
            Se newCar for true → Mostra que o carro é novo
            Se newCar for false → Mostra que é usado */}
        {newCar && <p>Este é um carro novo!</p>}
        {!newCar && <p>Este é um carro usado!</p>}
    </div>
  )
}

// Exporta o componente para ser usado em outros arquivos
export default CarDetails
