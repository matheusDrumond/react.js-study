// Estilos
import './App.css'

// Hooks
import { useState, useEffect } from 'react'

function App() {
  const [products, setProducts] = useState([])

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const url = 'http://localhost:3000/products'

  // Resgatando dados
  useEffect(() => {
    async function fetchData(){
      const res = await fetch(url);

      const data = await res.json();

      setProducts(data);
  }

  fetchData();
 }, [])

  // Adicionando produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    const addedProduct = await res.json();

    // Carregamento dinâmico
    setProducts((prevProducts) => [...prevProducts, addedProduct]);

    setName('');
    setPrice('');
  };

  return (
    <>
      <h1>Lista de produtos</h1>
      <ul>
        {products.map((product)=> (
          <li key={product.id}>
            {product.name} - R${product.price}
          </li>
        ))}
      </ul>
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

        <button type="submit">Cadastrar</button>
      </form>
    </>
  )
}

export default App
