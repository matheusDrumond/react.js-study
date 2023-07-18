const CarDetails = ({brand, km, color, newCar}) => {
    // Utilizando o destructuring, eu já acesso todas as propriedados do objeto recebido de props,
    // e a utilização deles posteriormente é simplificada
    return (
        <div>
            <ul>
                <li>Marca do carro: {brand}</li>
                <li>Km: {km}</li>
                <li>Cor do carro: {color}</li>
                {newCar ? (
                    <li>Este carro é novo</li>
                ):(
                    <li>Este carro não é novo</li>
                )}
            </ul>
        </div>
    )
}

export default CarDetails