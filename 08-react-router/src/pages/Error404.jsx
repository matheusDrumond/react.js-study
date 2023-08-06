import { Link } from "react-router-dom"

const Error404 = () => {
  return (
    <div>
        <h1>404</h1>
        <h2>Não há nada aqui :)</h2>
        <Link to={'/'}><button>Voltar</button></Link>
    </div>
  )
}

export default Error404