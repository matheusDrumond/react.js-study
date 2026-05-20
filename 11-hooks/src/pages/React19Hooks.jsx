import { useState, useTransition, useDeferredValue, useId, useOptimistic, use, createContext } from 'react'

// ==========================================
// useTransition
// Permite marcar atualizações de estado como "não urgentes",
// mantendo a UI responsiva durante operações pesadas.
// ==========================================
function UseTransitionExample() {
  const [isPending, startTransition] = useTransition()
  const [list, setList] = useState([])

  const handleClick = () => {
    startTransition(() => {
      // Atualizações dentro do startTransition são não-urgentes:
      // o React pode interrompê-las para responder a inputs do usuário
      const items = Array.from({ length: 5000 }, (_, i) => `Item ${i + 1}`)
      setList(items)
    })
  }

  return (
    <section>
      <h2>useTransition</h2>
      <button onClick={handleClick} disabled={isPending}>
        {isPending ? 'Carregando...' : 'Gerar 5000 itens'}
      </button>
      <p>Total: {list.length} itens renderizados</p>
    </section>
  )
}

// ==========================================
// useDeferredValue
// Adia a re-renderização de partes lentas da UI,
// permitindo que a parte rápida (ex: input) responda imediatamente.
// ==========================================
function ExpensiveList({ query }) {
  // Simula uma lista cara de renderizar
  const items = Array.from({ length: 1000 }, (_, i) => `Resultado ${i + 1}: ${query}`)
    .filter(item => item.toLowerCase().includes(query.toLowerCase()))
  return <p>{items.length} resultados encontrados</p>
}

function UseDeferredValueExample() {
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query) // deferredQuery fica "atrasado" em relação ao query

  return (
    <section>
      <h2>useDeferredValue</h2>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Digite para buscar..."
      />
      {/* O input responde imediatamente; a lista usa o valor deferido */}
      <ExpensiveList query={deferredQuery} />
    </section>
  )
}

// ==========================================
// useId
// Gera IDs únicos e estáveis para elementos, útil para
// acessibilidade (associar label com input via htmlFor/id).
// ==========================================
function UseIdExample() {
  const nameId = useId()
  const emailId = useId()

  return (
    <section>
      <h2>useId</h2>
      <p>IDs gerados automaticamente e únicos por componente</p>
      <div>
        <label htmlFor={nameId}>Nome:</label>
        <input id={nameId} type="text" placeholder="Seu nome" />
      </div>
      <div>
        <label htmlFor={emailId}>E-mail:</label>
        <input id={emailId} type="email" placeholder="seu@email.com" />
      </div>
      <small>IDs gerados: {nameId} / {emailId}</small>
    </section>
  )
}

// ==========================================
// useOptimistic (React 19)
// Permite mostrar um estado "otimista" na UI enquanto uma
// operação assíncrona ainda está em andamento.
// ==========================================
async function fakeApiCall(message) {
  await new Promise(resolve => setTimeout(resolve, 1500))
  return message
}

function UseOptimisticExample() {
  const [messages, setMessages] = useState(['Olá!', 'Tudo bem?'])
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (currentMessages, newMessage) => [...currentMessages, `${newMessage} (enviando...)`]
  )
  const [input, setInput] = useState('')

  const handleSend = async () => {
    if (!input.trim()) return
    const msg = input
    setInput('')
    addOptimisticMessage(msg) // aparece imediatamente com "(enviando...)"
    const saved = await fakeApiCall(msg)
    setMessages(prev => [...prev, saved]) // substitui pela versão final
  }

  return (
    <section>
      <h2>useOptimistic (React 19)</h2>
      <ul>
        {optimisticMessages.map((msg, i) => <li key={i}>{msg}</li>)}
      </ul>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="Nova mensagem" />
      <button onClick={handleSend}>Enviar</button>
    </section>
  )
}

// ==========================================
// use() (React 19)
// Hook que lê o valor de uma Promise ou Context durante a renderização.
// Diferente do useContext, pode ser usado dentro de condicionais.
// ==========================================
const ThemeContext = createContext('light')

function ThemedButton() {
  // use() lê o context — pode ser usado dentro de if/for, diferente do useContext
  const theme = use(ThemeContext)
  return (
    <button style={{ background: theme === 'dark' ? '#333' : '#eee', color: theme === 'dark' ? '#fff' : '#000' }}>
      Tema atual: {theme}
    </button>
  )
}

function UseHookExample() {
  const [dark, setDark] = useState(false)

  return (
    <section>
      <h2>use() — React 19</h2>
      <p>Lê Context (e Promises) diretamente na renderização, inclusive dentro de condicionais.</p>
      <ThemeContext value={dark ? 'dark' : 'light'}>
        <ThemedButton />
      </ThemeContext>
      <button onClick={() => setDark(d => !d)}>Alternar tema</button>
    </section>
  )
}

// ==========================================
// useActionState (React 19)
// Gerencia o estado de uma action de formulário.
// Substitui o padrão manual de useState + loading + error.
// Nota: requer react-dom para formulários reais com <form action={...}>
// ==========================================
import { useActionState } from 'react'

async function submitAction(prevState, formData) {
  const name = formData.get('name')
  await new Promise(resolve => setTimeout(resolve, 1000))
  if (!name) return { error: 'Nome é obrigatório!' }
  return { message: `Olá, ${name}! Formulário enviado com sucesso.` }
}

function UseActionStateExample() {
  const [state, formAction, isPending] = useActionState(submitAction, null)

  return (
    <section>
      <h2>useActionState (React 19)</h2>
      <p>Gerencia estado + loading de actions de formulário automaticamente.</p>
      <form action={formAction}>
        <input name="name" placeholder="Seu nome" />
        <button type="submit" disabled={isPending}>
          {isPending ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
      {state?.error && <p style={{ color: 'red' }}>{state.error}</p>}
      {state?.message && <p style={{ color: 'green' }}>{state.message}</p>}
    </section>
  )
}

// ==========================================
// Página principal
// ==========================================
function React19Hooks() {
  return (
    <div>
      <h1>Hooks do React 18+ e React 19</h1>
      <UseTransitionExample />
      <hr />
      <UseDeferredValueExample />
      <hr />
      <UseIdExample />
      <hr />
      <UseOptimisticExample />
      <hr />
      <UseHookExample />
      <hr />
      <UseActionStateExample />
    </div>
  )
}

export default React19Hooks
