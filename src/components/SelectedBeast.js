import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class SelectedBeast extends React.Component {


    render() {

        return (
  
            <div>
                <Modal show={this.props.show} onHide={this.props.CloseFun}>
                    <Modal.Header closeButton>

                        <Modal.Title>{this.props.itemSelected.title}</Modal.Title>
                    </Modal.Header>

                    <Card.Img variant="top" src={this.props.itemSelected.image_url} alt='img' title={this.props.itemSelected.title} />

                    <Modal.Body>{this.props.itemSelected.description}</Modal.Body>
                    <Modal.Footer>

                        <Button variant="secondary" onClick={this.props.CloseFun}>
                            Close</Button>

                        <Button variant="primary" onClick={this.props.CloseFun}>
                            Save Changes</Button>

                    </Modal.Footer>
                </Modal>
                    )
            </div>

        )
    }
}

export default SelectedBeast;
