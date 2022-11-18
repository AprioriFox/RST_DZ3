
const RegisterUser = () =>{

    const registerUser= (event) =>{
        event.preventDefault();
        console.log("User is registred");
    }


    return (
        <form action="" onSubmit={registerUser}>
            <input type="text" placeholder="name" />
            <input type="password" placeholder="password" />
            <input type="text" placeholder="age" />
            <button type="submit">Register User</button>
        </form>
    )
}

export default RegisterUser;