import React, { Component } from 'react';
import {
    Valid,
    Letter,
    AlphaNumeric,
    Email,
    CustomRx, Numeric,
    Required, Dummy
} from '../Function'
export class EmailInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            errorMsg: "",
            errorStatus:false
    }
}
    // static return = false

    Valid(data) {
        let result = Email(data);
        console.warn("result", result)
        if (result.status) {
            this.setState({ errorStatus: false, errorMsg: '' })
        }
        else {
            this.setState({ errorStatus: true, errorMsg: result.msg })

        }
        if (this.props.onChange) {
            this.props.onChange()
        }
        // AlphaNumericInput.return = result
    }
    render() {
        let data = this.props
        let collection = React.createElement("div", {},
            React.createElement("span", { className: this.props.class ? this.props.class : 'error-span' }, this.state.errorMsg),
            React.createElement("input", {
                type: "text",
                onChange: (e) => this.Valid(e.target.value),
                onBlur: (e) => this.props.return(this.state.errorStatus)
            }
            )
        )
        return (collection)
    }
    
}

