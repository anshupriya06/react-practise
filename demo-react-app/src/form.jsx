function handleSubmitForm(event){
    event.preventDefault();
    console.log("Form submitted");
}

export default function Form(){
    return ( <form>
        <input placeholder="Write Something" />
            <button onClick={handleSubmitForm}>Submit</button>
    </form>

    )
}