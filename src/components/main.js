import React from 'react';
import HornedBeast from './HornedBeasts';



class Main extends React.Component {


    render() {

        return (

            <div>
                {this.props.beastData.map((beasts) => {

                    return (

                        <HornedBeast
                            title={beasts.title}
                            imgUrl={beasts.image_url}
                            description={beasts.description}
                            dataShwing={this.props.show}
                            popUpCard={this.props.popUpCard}

                        />
                    )
                })

                }

            </div>



        )
    }
}



export default Main;
