const ShowUserName = (props) => {
    // As props são recebidas em forma de objeto, e os nomes usados lá em App são como propriedados desse objeto 
    return (
        <div>
            <h2>Nome do usuário: {props.name}</h2>
            <h2>O nickname é: {props.userName}</h2>
        </div>
  )
}

export default ShowUserName