
const SimpleForm = () => {

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(e.target.name.value); //akhane name and email er vetore ki lekha hoyache seta dekhabe .dekhanor neyom..
        console.log(e.target.email.value); //e.target ta form take bujhai
        console.log(e.target.phone.value); // properter name nebo and value debo
        console.log('form submitted');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name"/>
                <br />
                <input type="email" name="email"/>
                <br />
                <input type="password" name="password"/>
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;