import React, { Component } from "react";
import axios from "axios";
import "./customers.css";


class Customers extends Component {

    constructor(props) {

        super(props);
        this.state = {
            customers: []
        }
    }

    componentDidMount() {
        axios.get("/api/customers")
            .then(res => res.data)
            .then(customers => this.setState({ customers }, () => console.log("Customers fetched ... ", customers)));
    }


    render() {

        return (
            <>
                <h1>Customer Details</h1>
                <ul>
                    {this.state.customers.map(ele => (
                        <li key={ele.id}>{ele.firstName} {ele.lastName} </li>
                    ))}
                </ul>

            </>
        )
    }

}



export default Customers;