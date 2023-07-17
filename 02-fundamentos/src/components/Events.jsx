const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e);
        console.log('Ativou o evento!');
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={()=>{console.log('Você clicou no botão 2')}}>Clique aqui também!</button>
            </div>
        </div>
    )

};

export default Events;