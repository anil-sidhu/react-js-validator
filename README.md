# React-js-validator
Validation library for React js 

validation Methods:
+ Email
+ Numeric
+ Letter
+ AlphaNumeric
+ CustomRx
 ## Installing
Just simple command npm install command with package name
````
npm install react-js-validator
````
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
|   any String    | Yes     | string   |               | it will check email valdation and return object with 2 key. 1st msg and 2nd for status. status wil be false if valdation failed.                                                                 |

### Numeric

| params          | Required | Type     | Default value | Description                                                                                                                  |
|-----------------|----------|----------|---------------|------------------------------------------------------------------------------------------------------------------------------|
|  any Number         | Yes     | Number   |               | it will check Numaric valdation and return object with 2 key. 1st msg and 2nd for status. status wil be false if valdation failed.it must be always 1st param                                                                |
|  min lenght         | optional     | Number   |               | it will check minimum length of the number. It must be 2nd parameter.if validation false retruned status will be false. after that if you need only max length than put it null
|  max lenght         | optional     | Number   |               | it will check maximum length of the number. It must be 3nd parameter.if validation false returned status will be false.if you need only max length than put 2nd params null for no minimum length    |

### Letter

| params          | Required | Type     | Default value | Description                                                                                                                  |
|-----------------|----------|----------|---------------|------------------------------------------------------------------------------------------------------------------------------|
|  any string         | Yes     | String   |               | it will check Letter valdation and return object with 2 key. 1st msg and 2nd for status. status wil be false if valdation failed. and it must be always 1st param.                                                                |
|  min lenght          | optional     | Number   |               | it will check minimum length of the Letter. It must be 2nd parameter.if validation false retruned status will be false. after that if you need only max length than put it null
|  max lenght          | optional     | Number   |               | it will check maximum length of the Letter. It must be 3nd parameter.if validation false returned status will be false.if you need only max length than put 2nd params null for no minimum length    |

### AlphaNumeric

| params          | Required | Type     | Default value | Description                                                                                                                  |
|-----------------|----------|----------|---------------|------------------------------------------------------------------------------------------------------------------------------|
|any string or number| Yes     | String || Number   |               | it will check AlphaNumeric validation and means it allow letter as well number but not allow special characher and return object with 2 key. 1st msg and 2nd for status. status wil be false if validation failed. and it must be always 1st param.|
|  min lenght          | optional     | Number   |               | it will check minimum length of the AlphaNumeric. It must be 2nd parameter.if validation false retruned status will be false. after that if you need only max length than put it null
|  max lenght          | optional     | Number   |               | it will check maximum length of the AlphaNumeric. It must be 3nd parameter.if validation false returned status will be false.if you need only max length than put 2nd params null for no minimum length    |

### CustomRx

| params          | Required | Type     | Default value | Description                                                                                                                  |
|-----------------|----------|----------|---------------|------------------------------------------------------------------------------------------------------------------------------|
|any string or number| Yes     | String || Number   |               | it will check AlphaNumeric validation and means it allow letter as well number but not allow special characher and return object with 2 key. 1st msg and 2nd for status. status wil be false if validation failed. and it must be always 1st param.|
|  Number         | optional     | Number   |               | it will check minimum length of the AlphaNumeric. It must be 2nd parameter.if validation false retruned status will be false. after that if you need only max length than put it null
|  Number         | optional     | Number   |               | it will check maximum length of the AlphaNumeric. It must be 3nd parameter.if validation false returned status will be false.if you need only max length than put 2nd params null for no minimum length    |
|  min lenght          | optional     | Number   |               | it will check minimum length of the AlphaNumeric. It must be 2nd parameter.if validation false retruned status will be false. after that if you need only max length than put it null
|  max lenght          | optional     | Number   |               | it will check maximum length of the AlphaNumeric. It must be 3nd parameter.if validation false returned status will be false.if you need only max length than put 2nd params null for no minimum length    |



