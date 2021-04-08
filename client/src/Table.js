import React from 'react'

const Table = () => {

    function fetchTB(){
        //this is for the fetch request
    }

    function myTableBody(){
        let list = [{"word": "tantamount", "price": "$5"}, 
                    {"word": "laborious", "price": "$4"}];
        return(
            list.map(word =>
            <tr>
                <td>{word.word}</td>
                <td>{word.price}</td>
            </tr>
            )
        );
    }

    return (
        <table class="table table-dark table-bordered w-auto centered m-auto">
            <thead>
                <tr>
                    <th scope="col">Word</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>{myTableBody()}</tbody>
        </table>
    )
}

export default Table
