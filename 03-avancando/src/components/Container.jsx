const Container = ({ children, myValue }) => {
  return (
    <div>
        <h2>Este é o título do container</h2>
        {children} {/*Ele é importado como uma prop e pode ser usado assim*/}
        {myValue}
    </div>
  )
}

export default Container