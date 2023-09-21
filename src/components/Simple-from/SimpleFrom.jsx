
const SimpleFrom = () => {
    const submitHandle = (e) => {
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log('submited')
    }

    return (
        <div>
            <form action="" onSubmit={submitHandle}>
                <input type="text" defaultValue={'jasmin'} name="name" />
                <br />
                <input type="email" defaultValue={'example@gmai.com'} name ='email' />
                <br />
                <input type="submit" value= 'submit' />
            </form>
        </div>
    );
};

export default SimpleFrom;