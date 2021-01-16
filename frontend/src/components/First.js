import React, { Component } from "react";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import {
    Col, Form,
    FormGroup, Label, Input,
    Button, Container,
} from 'reactstrap';


export default class First extends Component{
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            latitude: '',
            longitude: '',

        };
        this.handelCity = this.handelCity.bind(this);
        this.handelLatitude = this.handelLatitude.bind(this);
        this.handelLongitude = this.handelLongitude.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
    }

    handelCity = e => {
        this.setState({
            city: e.target.value,
        })
    }
    handelLatitude = async e => {
        await this.setState({
            latitude: e.target.value,
        })
    }
    handelLongitude = async e => {
        await this.setState({
            longitude: e.target.value,
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
        axios.post("http://localhost:5000/api/insert", JSON.stringify({
            "city": this.state.city,
            "latitude": this.state.latitude,
            "longitude": this.state.longitude,
        }), axiosConfig)
            .then((response)=> alert("response"))
            .catch(err => alert(err.data));
    }


    render(){
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
                        <Card.Title>City details</Card.Title>
                        <Container>
                            <Form onSubmit={this.handelSubmit} style={{

                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%',
                            }} className="form">
                                <Col>
                                    <FormGroup>
                                        <Label>City</Label>
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
                                        <Label>Latitude</Label>
                                        <Input
                                            type="text"
                                            name="latitude"
                                            placeholder="Latitude"
                                            required
                                            onChange={this.handelLatitude}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label>Longitude</Label>
                                        <Input
                                            type="text"
                                            name="longitude"
                                            placeholder="Longitude"
                                            required
                                            onChange={this.handelLongitude}
                                        />
                                    </FormGroup>
                                </Col>

                                <Button  >Submit</Button>
                            </Form>
                        </Container>
                    </Card.Body>
                </Card>
            </div>

        );
    }
}


