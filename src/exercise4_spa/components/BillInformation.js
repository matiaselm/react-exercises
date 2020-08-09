import React, { useState, useEffect } from 'react';

/*
    Bill Information is a component that shows selected user's bills in a table
*/

const BillInformation = (props) => {

    const user = props.user

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