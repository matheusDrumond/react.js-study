// Rota dinâmica
import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Product = () => {
    // Rotas dinâmicas
    const { id } = useParams(); // É id o nome da propriedade pois é foi como chamada na hora de criar a rota '/products/:id'

    // Carregamento dinâmico de dados 
    const url = 'http://localhost:3000/products/' + id
    const {data: product, loading, error} = useFetch(url)

    console.log(product);
  return (
    <>
        {error && <p>Erro no carregamento dos dados</p>}
        {loading && <p>Carregando dados do produto...</p>}
        {product && 
            <div>
                <h1>{product.name}</h1>
                <h2>R${product.price}</h2>
                <span>ID: {id}</span>
                <br />
                {/* Nested routes */}
                <button><Link to={`/products/${id}/info`}>Mais informações</Link></button>
            </div>
        }
    </>
  )
}

export default Product