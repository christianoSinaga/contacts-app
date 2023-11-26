import React from "react";

class ContactInput extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: "",
            tag : "",
        }

        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
    }

    onSubmitEventHandler(event){
        event.preventDefault();

        this.props.addContact(this.state);
    }

    onNameChangeEventHandler(event){
        this.setState(()=>{
            return {name: event.target.value};
        })
    }

    onTagChangeEventHandler(event){
        this.setState(()=>{
            return {tag: event.target.value}
        })
    }

    

    render(){
        return(
            <form className="contact-input" onSubmit={this.onSubmitEventHandler }>
                <input type="text" placeholder="Nama" value={this.state.name} onChange={this.onNameChangeEventHandler}/>
                <input type="text" placeholder="Tag" value={this.state.tag} onChange={this.onTagChangeEventHandler}/>
                <button type="submit">
                    Tambah Kontak
                </button>
            </form>
        )
    }
}

export default ContactInput;