import React from 'react'

const Table = () => {

    function fetchTB(){
        let url = "https://afc-lexicon.herokuapp.com/lexicon"
        fetch(url)
            .then(res => { 
                return res.json();
            })
            .catch((error) => {
                console.log(error)})
    }

    function myTableBody(){
        // let list = [{"word": "tantamount", "price": "$5"}, 
        //             {"word": "laborious", "price": "$4"}];
        let list = fetchTB();
        return(
            list.map(word =>
            <tr>
                <td>{word.word}</td>
                <td>{word.value}</td>
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
