import React from 'react';
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

// class SelectedBeast extends React.Component {

//     constructor(props) {
//         super();
//         this.state = {
//             numberOfPick: 0
//         }
//     }

//     choosenPic = () => {
//         // this.props.favoritePictures();
//         let cont = this.state.numberOfPick
//         this.setState({
//             numberOfPick: cont += 1
//         })
//     }


//     render() {
//         console.log(this.props);
//         return (
//             <div>
//                 <h2>{this.props.title}</h2>
//                 <img onClick={this.choosenPic} style={{ width: '200px' }} src={this.props.image_url} alt={this.props.title} />
//                 <p>{this.props.description}</p>


//                 {/* <button onClick={this.choosenPic}>num of choosen</button> */}
//                 <p>***{this.state.numberOfPick}***</p>


//             </div>
//         )
//     }
// }
// export default SelectedBeast;
