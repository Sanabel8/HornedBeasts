import React from 'react';

class HornedBeasts extends React.Component {
    constructor(props) {
        super();
        this.state = {
            numberOfPick: 0
        }
    }

    choosenPic = () => {
        // this.props.favoritePictures();
        let cont = this.state.numberOfPick
        this.setState({
            numberOfPick: cont += 1
        })
    }


    render() {
        console.log(this.props);
        return (
            <div>
                <h2>{this.props.title}</h2>
                <img style={{ width: '200px' }} src={this.props.image_url} alt={this.props.title} />
                <p>{this.props.description}</p>


                <button onClick={this.choosenPic}>num of choosen</button>
                <p>***{this.state.numberOfPick}***</p>


            </div>
        )
    }
}
export default HornedBeasts;