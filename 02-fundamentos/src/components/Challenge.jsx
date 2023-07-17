const Challenge = () => {
    let a = 10;
    let b = 5;

    return(
        <div>
            <h2>{a}</h2>
            <h2>{b}</h2>

            <button onClick={() => {console.log(a + b)}}>Somar</button>
        </div>
    )
}

export default Challenge;