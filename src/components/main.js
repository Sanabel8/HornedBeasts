import React from 'react';


import FormFilter from './FormFilter';

import HornedBeast from './HornedBeasts';



class Main extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            filterValue: ''     //recive the data from setstate
        }

    }

    changeFilterValue = (data) => {

        this.setState({
            filterValue :data            //recive data from formfilter and stored the data inside the state
        })                               

    }



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


                <FormFilter
                  
                  changeValueFunc={this.changeFilterValue}           //send the function that invoked in formfilter 

                />

                {this.props.beastData.map((beasts) => {

                    if(beasts.horns === Number(this.state.filterValue)){
                        return (

                            <HornedBeast
                                title={beasts.title}
                                imgUrl={beasts.image_url}
                                description={beasts.description}
                                dataShwing={this.props.show}
                                popUpCard={this.props.popUpCard}
    
                            />
                        )
                    }else if(this.state.filterValue == ''){
                        return (

                            <HornedBeast
                                title={beasts.title}
                                imgUrl={beasts.image_url}
                                description={beasts.description}
                                dataShwing={this.props.show}
                                popUpCard={this.props.popUpCard}
    
                            />
                        ) 

                    }

                    

                   
                })

                }


            </div>



        )
    }
}



export default Main;
