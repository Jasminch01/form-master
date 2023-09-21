import { useState } from "react";

const StateForm = () => {
    const [name , setName] = useState(null);

    const submitHandle = (e) => {
        e.preventDefault();
        console.log(name)
    }

    const changeHandler = (e)=> {
        e.preventDefault();
        setName(e.target.value)
    }
    
    return (
        <div>
             <form action=""onSubmit={submitHandle}>
                <input onChange={changeHandler} type="text" name="name" />
                <br />
                <input type="email" name ='email' />
                <br />
                <input type="submit" value= 'submit' />
            </form>
        </div>
    );
};

export default StateForm;