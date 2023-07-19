const Fragments = ({propFragment}) => {
  return (
    <> {/*Esses são os fragments*/}
        <h2>Primeiro título</h2>
        <h3>Segundo título</h3>
        <h4>{propFragment}</h4> {/*O fragment não tem conflito com as props, podem ser usadas normalmente*/}
        {/*Ao inspecionar o HTML gerado é possível perceber que os dois elementos não estão unidos por nenhuma div*/}
    </>
  )
}

export default Fragments