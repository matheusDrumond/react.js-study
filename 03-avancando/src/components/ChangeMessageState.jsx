const ChangeMessageState = ({ handleMessage }) => {
    const messages = ['Oi', 'Olá!', 'Olá, tudo bem?', 'Oi, tudo bem?']

  return (
    <div>
        <button onClick={() => handleMessage(messages[0])}>Oi</button>
        <button onClick={() => handleMessage(messages[1])}>Olá</button>
        <button onClick={() => handleMessage(messages[2])}>Olá, tudo bem?</button>
        <button onClick={() => handleMessage(messages[3])}>Oi, tudo bem?</button>
    </div>
  )
}

export default ChangeMessageState