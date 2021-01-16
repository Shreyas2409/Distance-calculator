import React,{ Component} from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import {
    Col, Form,
    FormGroup, Label, Input,
    Button, Container,
} from 'reactstrap';

export default class Distance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            city2: '',
           };
        this.handelCity = this.handelCity.bind(this);
        this.handelCity2 = this.handelCity2.bind(this);
     }

    handelCity = e => {
        this.setState({
            city: e.target.value,
        })
    }
        handelCity2 = e => {
            this.setState({
                city2: e.target.value,
            })
        }
    
    handelSubmit = e => {
        e.preventDefault();
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };
        axios.post("http://localhost:5000/api/post", JSON.stringify({
            "city": this.state.city,
            "city2": this.state.city2,
        }), axiosConfig)
            .then((result) => this.setState({Distance :(JSON.stringify(result.data))}))
            .catch(err => console.log(err.data));
    }
  render() {
        return (
      <div style={{
        display: 'flex',
        alignitems: 'center',
        justifyContent: 'center',
      }}>
        <Card div style={{
          display: 'flex',
          alignitems: 'center',
          justifyContent: 'center',
          backgroundColor: 'whitesmoke',
          width: '50%',
        }}>
          <Card.Body>
            <Card.Title>Distance</Card.Title>
            <Container>
              <Form onSubmit={this.handelSubmit} style={{

                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
              }} className="form">
                <Col>
                  <FormGroup>
                    <Label>City name</Label>
                    <Input
                      type="text"
                      name="city"
                      placeholder="City"
                      required
                      onChange={this.handelCity}

                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label>City name</Label>
                    <Input
                      type="text"
                      name="city2"
                      placeholder="City"
                      required
                      onChange={this.handelCity2}
                    />
                  </FormGroup>
                </Col>
                <Button onSubmit={this.handelSubmit} >Submit</Button>
              </Form>
            </Container>
            <p>the distance is {this.state.Distance}</p>
          </Card.Body>
        </Card>
    </div>
    
  );
}
}