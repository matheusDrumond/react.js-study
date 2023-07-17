const TemplateExpressions = () => {
    const name = 'Matheus';
    const info = {
        age: 16,
        job: 'programmer',
    }

    return (
        <>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Your role is: {info.job}</p>
            <p>{1 + 1}</p>
            <p>{console.log('JSX React')}</p>
        </>
    )

};

export default TemplateExpressions;