const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e);
        console.log('Ativou o evento!');
    }

    // Função de contar cliques 
    let x = 0;
    const handleCountClicks = () => {
        x++
        let count = document.querySelector('#count');
        count.innerHTML = x;
    }

    // É possível adicionar jsx fora do return do componente
    const renderSomething = (x) => {
        if(x){
            return(
                <h1>Renderizando isso!</h1>
            )

        }else {
            return (
                <h1>Também posso renderizar isso</h1>
            )
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                {/*Pequenas funções de uma linha podem ser adicionadas no jsx sem problemas*/}
                <button onClick={()=>{console.log('Você clicou no botão 2')}}>Clique aqui também!</button>
                {/*Funções que exigem mais de uma linha não devem ser colocadas direto no jsx, assim como feito em handleMyEvent*/}
                <button onClick={()=>{
                    if(true){
                        console.log('Isso não deveria acontecer!')
                    }
                }}>
                    Mais um clique!
                </button>
                <button className="countButton" onClick={handleCountClicks}>Contagem: <span id="count">0</span></button>
            </div>

            {/*As funções foram chamadas ao final do componenete já com argumentos pois devem ser exibidas ao carregamento do componente*/}
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )

};

export default Events;