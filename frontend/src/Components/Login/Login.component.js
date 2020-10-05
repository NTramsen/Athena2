import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Logout extends Component
{
    constructor(props)
    {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(e)
    {
        e.preventDefault();
        return (
            <Redirect to = "https://np7w3.csb.app/"/>
        )
    }

    render()
    {
        return (
            <div>
                <h3> Login </h3>
                <form onClick={this.onClick}>
                    <div>
                        <input type="submit" value="Login" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        );
    }
}