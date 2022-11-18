
const FuncComponent = () =>{

    const clickHandle = () =>{
        console.log("Hello world!!!");
        alert("Hello World!!!")
    }

    return (
        <>
            <button onClick={clickHandle}>Say Hello to world</button>
        </>
    )
}

export default FuncComponent;
