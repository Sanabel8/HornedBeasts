import React from 'react';
import HornedBeasts from './HornedBeasts';
import DataHorned from './Data.json'

class Main extends React.Component {

    // constractor(props) {
    //     // super(props);
    //     this.state = {

    //     numberOfPick: 0
    //     }
    // }

    // favoritePictures = () => {
    //     // alert('welcome ,plz choose the favorite beasts from my web page')
    //     let cont =this.state.numberOfPick
    //     this.setState({
    //         numberOfPick: cont+=1

    //     })
    // }


    render() {



        //   console.log(this.props);
        return (
            <div>

                {

                    DataHorned.map((beast) => {
                        return (
                            <HornedBeasts
                                title={beast.title}
                                image_url={beast.image_url}
                                description={beast.description}
                            // favoritePictures={this.favoritePictures}
                            />

                        )
                    })

                }
                {/* <HornedBeasts 
              title =''
              img =''
              description =''

              /> 
              <HornedBeasts />
              <HornedBeasts />
             */}

            </div>

        )
    }
}

export default Main;