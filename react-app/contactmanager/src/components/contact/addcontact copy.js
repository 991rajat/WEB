import React, { Component } from 'react'

class AddContact extends Component {

    state ={
        name:'',
        email:'',
        phone:'',
    }

    onValueChange = (e) => this.setState({
        [e.target.name]:e.target.value,
    });

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {

        const {name,email,phone} = this.state;

        return (
            <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input name="name"type="text" className="form-control form-control-lg" placeholder="Enter name..." value={name} onChange={this.onValueChange}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input name="email"type="email" className="form-control form-control-lg" placeholder="Enter email..." value={email} onChange={this.onValueChange}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input name="phone"type="text" className="form-control form-control-lg" placeholder="Enter phone..." value={phone} onChange={this.onValueChange}/>
                        </div>

                        <input type="submit" value="Add Contact" className="btn btn-light btn-black"></input>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddContact;