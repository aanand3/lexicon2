import {Component} from 'react';
import {Form, Button} from 'react-bootstrap'
export default class Search extends Component{

    constructor(props){
        super(props)
        this.state = {
            myWord:{},
            userInput:''
                };
        this.recordUserResponse = this.recordUserResponse.bind(this)
    }

    recordUserResponse(event){
        this.setState({userInput:event.target.value})
    }

    render(){
        return(
            <Form className="m-5">
                <Form.Group controlId="formWordInput">
                    <Form.Label>Please Input a $5 Word</Form.Label>
                    <Form.Control type="email" onChange={this.recordUserResponse} placeholder="Enter Word"/>
                </Form.Group>
                    <Button onClick={() => console.log(this.state.userInput)}>Click</Button>
            </Form>
        );
    }
}