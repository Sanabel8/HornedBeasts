import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';


class HornedBeast extends React.Component {



    constructor(props) {

        super(props)
        this.state = {

            counter: 0
        }
    }
    incremental = () => {

        this.setState({
            counter: this.state.counter + 1
        })
    }
    popUpCard = () => {
        this.props.popUpCard(this.props.title)
    }

    render() {

        return (
            <div>

                <Card onClick={this.popUpCard} style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={this.props.imgUrl} alt={this.props.title} title={this.props.title}  />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                        {this.props.description}
                        </Card.Text>
                        <Card.Text></Card.Text>
                         <Button variant="primary" onClick={this.incremental} > numberOfPick ❤️{this.state.counter}</Button> 
                    </Card.Body>
                </Card>

            </div>
        )
    }

}
export default HornedBeast;
