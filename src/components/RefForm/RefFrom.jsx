import { useEffect, useRef } from "react";

const RefFrom = () => {

    const NameRef = useRef();
    const EmailRef = useRef();

    useEffect(()=>{
        NameRef.current.focus()
    },[])

    const submitHandle = (e)=> {
        e.preventDefault()
        console.log(NameRef.current.value)
        console.log(EmailRef.current.value)
    }
  return (
    <div>
      <form action="" onSubmit={submitHandle}>
        <input type="text" ref={NameRef}  name="name" />
        <br />
        <input type="email" ref={EmailRef}   name="email" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default RefFrom;
