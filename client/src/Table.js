import React from 'react'

class Table extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            list: []
        }
    }

     componentDidMount(){
        this.fetchTB();
    }

    fetchTB(){
        return fetch("https://afc-lexicon.herokuapp.com/lexicon",
        {
            method: "GET",
            headers: {
            'Accept': 'application/JSON',
            'Content-Type': 'application/JSON',
          },
        })
        .then((response) => response.json())
        .then((responseData) => {
          console.log(responseData);
          this.setState({list:responseData})
        })
        .catch(error => console.warn(error));
    }

    myTableBody(){
        return(
            this.state.list.map(word =>
            <tr>
                <td>{word.word}</td>
                <td>{word.value}</td>
            </tr>
            )
        );
    }

    render(){
        return (
        <table className="table table-dark table-bordered w-auto centered m-auto">
            <thead>
                <tr>
                    <th scope="col">Word</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>{this.myTableBody()}</tbody>
        </table>
        )
    }
    
}

export default Table
