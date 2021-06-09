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
//     render() {



//         //   console.log(this.props);
//         return (
//             <div>

//                 {

//                     // DataHorned.map((beast) => {
//                     //     return (
//                     //         <HornedBeasts
//                     //             title={beast.title}
//                     //             image_url={beast.image_url}
//                     //             description={beast.description}
//                     //         // favoritePictures={this.favoritePictures}
//                     //         />

//                     //     )
//                     // })

//                     <Card style={{ width: '18rem' }}>
//                         <Card.Img variant="top" src="holder.js/100px180" />
//                         <Card.Body>
//                             <Card.Title>'beast.title'</Card.Title>
//                             <Card.Text>
//                             'beast.title'
//                                   </Card.Text>
//                             <Button variant="primary">Go somewhere</Button>
//                         </Card.Body>
//                     </Card>

//                 }
//                 {/* <HornedBeasts 
//               title =''
//               img =''
//               description =''

//               /> 
//               <HornedBeasts />
//               <HornedBeasts />
//              */}

//             </div>

//         )
//     }
// }

// export default Main;