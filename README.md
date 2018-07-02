# React-js-validator
Component providing simple input validation for react js. use can use validation function directly or custom input for vaildation.

### Use Method Directly or Use custom Input listed below
#### validation Methods:
+ Email
+ Numeric
+ Letter
+ AlphaNumeric
+ CustomRx

#### custom Input Components:
+ EmailInput
+ LetterInput
+ AlphaNumericInput


 ## Installing
Just simple command npm install command with package name
````
npm install react-js-validator
````
 ## Example for Use Method
````
iimport React, { Component } from 'react';
import Container from '../Containers/Container';
import { Email,Numeric,Letter,AlphaNumeric,CustomRx,Required } from 'react-js-validator'
class HomeComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: null,
    }; 
  }

  validate() {
    let result = Email(this.state.email);
    console.warn("result", result)
  }
  render() {
    return (
      <div>
        <EmailInput max={10} min={3} />
        <input onBlur={() => this.validate()} onChange={(e) => { this.setState({ email: e.target.value }) }} />
      </div>

    );
  }
}


export default HomeComponent;

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
|special character | optional     | bool   |               | it will check special character in the given value. It must be 2nd parameter.if validation false retruned status will be false.After special character if you need more params than put it null
| capital character| optional     | bool   |               | it will check capital character in the given Value. It must be 3nd parameter.if validation false returned status will be false.if you need only capital character params than put 2nd params null for no special length    |
|  min lenght          | optional     | Number   |               | it will check minimum length of the AlphaNumeric. It must be 4th parameter.if validation false retruned status will be false. after that if you need only max length than 2nd and 3rd params null
|  max lenght          | optional     | Number   |               | it will check maximum length of the AlphaNumeric. It must be 5th parameter.if validation false returned status will be false.if you need only max length than put 2nd,3rd and 4th params null   |


## Example for Custom Input Use

````
import React, { Component } from 'react';
import Container from '../Containers/Container';
import { EmailInput, LetterInput, AlphaNumericInput } from 'react-js-validator'
class HomeComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: null,
    };
  }
  handleCallback(data) {
    console.warn("status", data)
  }
  render() {
    
    return (
      <div>

        HomeComponent..
        <LetterInput max={10} min={3} return={this.handleCallback.bind(this)} />
       
      </div>

    );
  }
}


export default HomeComponent;
````

## Component props and callback function

### LetterInput
| Props          | Required | Type     | Default value | Description                                                                                                                  |
|-----------------|----------|----------|---------------|------------------------------------------------------------------------------------------------------------------------------|
|  max    | optional     | int   |  null             | it will check Input  maximum length and return errorStatus true                                                                   |
|  min    | optional     | int   |  null             | it will check Input  minimum length and return errorStatus true                                                                   |
|  return    | optional     | callback function   |  null             | it will return the callback status and function should be pass here with a parammeter             



### EmailInput
| Props          | Required | Type     | Default value | Description                                                                                                                  |
|-----------------|----------|----------|---------------|------------------------------------------------------------------------------------------------------------------------------|
|  return    | optional     | callback function   |  null             | it will return the callback status and function should be pass here with a parammeter                                                                   |


### AlphaNumericInput
| Props          | Required | Type     | Default value | Description                                                                                                                  |
|-----------------|----------|----------|---------------|------------------------------------------------------------------------------------------------------------------------------|
|  max    | optional     | int   |  null             | it will check Input  maximum length and return errorStatus true                                                                   |
|  min    | optional     | int   |  null             | it will check Input  minimum length and return errorStatus true                                                                   |
|  return    | optional     | callback function   |  null             | it will return the callback status and function should be pass here with a parammeter             
