

const FormPage =() =>{

    const sayHello =() =>{
        alert("Hello World!!!")
    }

    const changeTitle = () =>{
        document.title = "Я молодец"
    }

    const getUsers = () =>{
        alert("Kirill"+"Dastan"+"Artem")
    }

    const handleChange =(event) => {
        console.log(event.target.value);
    }

    const handleBlur =(event) => {
        console.log(event.target.value);
    }

    return (
        <>
            <h1>Обработчики сосбытий</h1>
            <button onClick={sayHello} onDoubleClick={changeTitle}>ЖМИИИИИИИИИИИИИИ</button>
            <button onDoubleClick={getUsers}>Users List</button>
            <h1>----------------------------------------------------------</h1>
            <input type="text" placeholder="onChange" onChange={handleChange} />
            <input type="text" placeholder="onBlur" onBlur={handleBlur} />
        </>
    )
}

export default FormPage;
