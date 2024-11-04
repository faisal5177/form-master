
const ReusableForm = ({formTitle, handleSubmit, submitBtnText = 'Submit', children}) => {

    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.elements.name.value, // Accessing by name
            email: e.target.elements.email.value, // Accessing by name
            password: e.target.elements.password.value // Accessing by name
        };
        handleSubmit(data);
    };  

    return (
        <div>
        <h2>{formTitle}</h2>
        <form onSubmit={handleLocalSubmit}>
            <input type="text" name="name" />
            <br />
            <input type="email" name="email" />
            <br />
            <input type="password" name="password" />
            <br />
            <input type="submit" value={submitBtnText} />
        </form>
    </div>
    );
};

export default ReusableForm;