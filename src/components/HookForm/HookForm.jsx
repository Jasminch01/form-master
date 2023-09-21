import useInput from "../UseInput";

const HookForm = () => {

    // const [name, handleNameChange]= useInput('jennifer')
    const changeEmail = useInput('abc@hmail.com')

    const submitHandle = (e)=> {
       e.preventDefault();
    //    console.log(name)
    console.log(changeEmail.value)
    }
    return (
        <div>
             <form action="" onSubmit={submitHandle}>
        {/* <input type="text" value={name} onChange={handleNameChange}  name="name" /> */}
        <br />
        <input type="email" {...changeEmail}   name="email" />
        <br />
        <input type="submit" value="submit" />
      </form>
        </div>
    );
};

export default HookForm;