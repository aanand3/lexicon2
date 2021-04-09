import { Component } from 'react';
import { Form, Button } from 'react-bootstrap'


export default class Search extends Component
{

    constructor(props)
    {
        super(props)
        this.state = {
            myWord: {
                "word": "",
                "price": 0
            },
            userInput: 'hello'
        };
        this.recordUserResponse = this.recordUserResponse.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    recordUserResponse(event)
    {
        this.setState({ userInput: event.target.value })
    }

    async fetchInfo()
    {
        try
        {

            var fetchJsonp = require("fetch-jsonp")


            const url = "https://books.google.com/ngrams/json?year_start=2018&year_end=2019&content=" + this.state.userInput;
            const response = await fetchJsonp(url);
            const json = await response.json();
            console.log(json[0]);

        }
        catch (error)
        {
            console.error(error);
        }
    }

    handleSubmit(event)
    {
        event.preventDefault();
        console.log('submit detected')
    }

    render()
    {
        return (
            <Form className="m-5" onSubmit={this.handleSubmit}>
                <Form.Control type="text" onChange={this.recordUserResponse} placeholder="Please Input a $5 Word" />
                <Button type="submit " variant="light" className = "m-2"> Submit </Button>
            </Form>
        );
    }
}