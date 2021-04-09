import { Component } from 'react';
import { Form, Button, Container, Row } from 'react-bootstrap'


export default class Search extends Component
{

    constructor(props)
    {
        super(props)
        this.state = {
            rawWordData: {},
            wordWorth: 0,
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
            this.setState({ rawWordData: json[0] })

        }
        catch (error)
        {
            console.error(error);
        }
    }

    calculateWordWorth()
    {
        // need to multiply by 100 to get it as a %
        let usage = this.state.rawWordData.timeseries[1] * 100;
        console.log(usage);
        if (usage < 0.00005)
        {
            this.setState({ wordWorth: 5 })
        }
        else if (usage < 0.0001)
        {
            this.setState({ wordWorth: 4 })
        }
        else this.setState({ wordWorth: 0 })
    }

    async handleSubmit(event)
    {
        event.preventDefault(); // dont wanna refresh whole page

        // fetch data from ngrams and calculate worth
        await this.fetchInfo();
        this.calculateWordWorth();
    }

    buildWorthRow()
    {
        if (this.state.wordWorth > 0)
        {
            return <Row className="justify-content-md-center mb-5">
                This is a {this.state.wordWorth}-dollar word!
            </Row>
        }
    }

    render()
    {
        var rowWorth = this.buildWorthRow() || null;
 
        return (
            <Container className="justify-content-md-center">
                <Row className="justify-content-md-center">
                    <Form className="m-5" onSubmit={this.handleSubmit}>
                        <Form.Control type="text" onChange={this.recordUserResponse} placeholder="Please Input a $5 Word" />
                        <Button type="submit " variant="light" className="m-2"> Submit </Button>
                    </Form>
                </Row>
                {rowWorth}
            </Container>
        );
    }
}