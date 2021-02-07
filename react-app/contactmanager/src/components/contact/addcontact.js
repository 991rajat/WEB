import React, { Component } from 'react'
import {Consumer} from '../../context';
import {v4 as uuid} from 'uuid'
import TextInputGroup from '../layout/textInputGroup'
class AddContact extends Component {

    state ={
        name:'',
        email:'',
        phone:'',
        errors:{}
    }

    onValueChange = (e) => this.setState({
        [e.target.name]:e.target.value,
    });

    onSubmit = (dispatch,e) => {
        e.preventDefault();
        const {name,email,phone} = this.state;

        //Check for Errors
        if(name === ''){
            this.setState({
                errors:{name:'Name is required'}
            });
            return ;
        }

        if(email === ''){
            this.setState({
                errors:{email:'Email is required'}
            });
            return ;
        }

        if(phone === ''){
            this.setState({
                errors:{phone:'Phone is required'}
            });

            return ;
        }


        const newContact = {
            id:uuid(),
            name,
            email,
            phone,
        };

        dispatch({type:'ADD_CONTACT',payload:newContact});

        this.setState({
            name:'',
            email:'',
            phone:'',
            errors:{}
        });

        this.props.history.push('/');
    }

    render() {

        const {name,email,phone,errors} = this.state;

        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;

                    return (
                        <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit.bind(this,dispatch)}>
                       <TextInputGroup 
                       label="Name"
                       type="text"
                       name="name"
                       placeholder="Enter Name ..."
                       value = {name}
                       onChange = {this.onValueChange}
                       error = {errors.name}
                       />

                        <TextInputGroup 
                       label="Email"
                       type="email"
                       name="email"
                       placeholder="Enter Email ..."
                       value = {email}
                       onChange = {this.onValueChange}
                       error = {errors.email}
                       />

                        <TextInputGroup 
                       label="Phone"
                       type="Phone"
                       name="phone"
                       type="text"
                       placeholder="Enter Phone ..."
                       value = {phone}
                       onChange = {this.onValueChange}
                       error = {errors.phone}
                       />
                        <input type="submit" value="Add Contact" className="btn btn-light btn-black"></input>
                    </form>
                </div>
            </div>
                    )
                }}
            </Consumer>
        )

        
    }
}

export default AddContact;