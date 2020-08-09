import React, { useState, useEffect } from 'react';

/*
    Bill Information is a component that shows selected user's bills in a table

    TODO: BillInformation to fetch all bills in the db on it's own without props
    */

const BillInformation = (props) => {

    const user = {
        "id": 3,
        "name": "Mr DefaultMan",
        "address": "Roadyroad",
        "postalnum": "040050",
        "city": "Moon",
        "phonenum": "060666666",
        "bills": [
            {
                "id": 1,
                "sum": 399,
                "date": "Wed Mar 25 2015 02:00:00 GMT+0200",
                "topic": "rent",
                "paid": "false"
            },
            {
                "id": 2,
                "sum": 10,
                "date": "Wed Mar 25 2015 02:00:00 GMT+0200",
                "topic": "Something",
                "paid": "false"
            },
            {
                "id": 3,
                "sum": 500,
                "date": "Wed Mar 25 2015 02:00:00 GMT+0200",
                "topic": "Student loan",
                "paid": "false"
            },
            {
                "id": 4,
                "sum": 10,
                "date": "Wed Mar 25 2015 02:00:00 GMT+0200",
                "topic": "Something2",
                "paid": "false"
            }
        ]
    }

    // console.log('Billinformation: ' + user.bills)

    try {
        return <div>
            <table>
                <tbody>
                    <tr><th>Bill Id</th><th>Sum (€)</th><th>Date</th><th>Topic</th><th><button onClick={props.setVisible}>exit</button></th></tr>
                    {user.bills.map((bill, i) =>
                        <tr key={i}>
                            <td>{bill.id}</td>
                            <td>{bill.sum}</td>
                            <td>{bill.date}</td>
                            <td>{bill.topic}</td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    } catch (e) {
        return <h1>Error {e} showing bills information</h1>
    }
}

export default BillInformation 