# React-js-validator
Validation library for React js 

validation Methods:
+ Email
+ Numeric
+ Letter
+ AlphaNumeric
+ Email
+ CustomRx
 
 ## Example
````
import React, { Component } from 'react';
import { Valid, Numeric, Letter, AlphaNumeric, Email, CustomRx } from 'react-js-validator'

class ValidationComponent extends Component {
    state = {
        email: null,
    };
    vaildate() {
        let letterNumber = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        console.warn("value", this.state.email)
        let result = Email(this.state.email);
        console.warn("result", result)
        return result
    }
    render() {

        return (
            <div>
                Validation Component
                <input onBlur={() => this.vaildate(Email(this.state.email)) } onChange={(e) => { this.setState({ email: e.target.value }) }}  />
               
                <button onClick={() => this.submit()}>click me </button>
            </div>
        )
    }
}

export default ValidationComponent;
````

## Package Functions

### Email

| params          | Required | Type     | Default value | Description                                                                                                                  |
|-----------------|----------|----------|---------------|------------------------------------------------------------------------------------------------------------------------------|
|   any String    | true     | string   |               | it will check email valdation and return object with 2 key. 1st msg and 2nd for status. status wil be false if valdation failed.                                                                 |
