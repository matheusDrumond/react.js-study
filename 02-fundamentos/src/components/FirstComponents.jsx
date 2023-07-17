import MyComponent from "./MyComponent";

const FirstComponent = () => {
    // Essa função retorna o título principal da página
    return(
        <>
            {/* Comentário no jsx */}
            <h1 className="test">Meu primeiro componente</h1>
            <MyComponent />
        </>
    );
};

export default FirstComponent;