// Estilos
import './App.css'

// Hooks
import { useState, useEffect } from 'react'
// Custom hook
import { useFetch } from './hooks/useFetch'

// URL do 'backend'
const url = 'http://localhost:3000/products'

function App() {
  const [products, setProducts] = useState([])

  // Utilizando o custom hook 
  const { data: items, httpConfig, loading, error } = useFetch(url)

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  // Função de delete
  const handleRemove = (id) => {
    httpConfig(id, 'DELETE')
  }


  // Resgatando dados
  //   useEffect(() => {
  //     async function fetchData(){
  //       const res = await fetch(url);

  //       const data = await res.json();

  //       setProducts(data);
  //   }

  //   fetchData();
  //  }, [])

  // Adicionando produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // });

    // const addedProduct = await res.json();

    // // Carregamento dinâmico
    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    // Refatorando POST
    httpConfig(product, 'POST');

    setName('');
    setPrice('');
  };

  return (
    <>
      <h1>Lista de produtos</h1>
      {/* Loading */}
      {loading && <p>Carregando produtos...</p>}
      {error && <p>{error}</p>}
      {!loading && !error &&       
        <ul>
          {items && items.map((product)=> (
            <li key={product.id}>
              {product.name} - R${product.price} <button onClick={() => handleRemove(product.id)}>Excluir</button>
            </li>
          ))}
        </ul>}
      <form onSubmit={handleSubmit} className='add_products'>
      <h2>Cadastre um novo produto</h2>
        <div>
          <label>
            Nome do produto:
            <input 
            type="text" 
            name="price" 
            id="price" 
            placeholder='Digite o nome do produto...' 
            onChange={(e) => setName(e.target.value)}
            value={name}
            />
          </label>
        </div>
        <div>
          <label>
            Preço:
            <input 
            type="number" 
            name="price" 
            id="price" 
            placeholder='Digite o preço do produto...'
            onChange={(e)=> setPrice(e.target.value)}
            value={price}
            />
          </label>
        </div>
        {/* Loading no POST */}

        {/* Durante o carregamento não exibe o botão */}
        {/* {!loading && <button type="submit">Cadastrar</button>} */}

        {/* Desabilita o botão durante o carregamento */}
        <button type="submit" disabled={loading}>Cadastrar</button>
      </form>
    </>
  )
}

export default App
