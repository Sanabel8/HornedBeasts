import React from 'react';
// import FormInfo from './FormInfo';
import Form from 'react-bootstrap/Form';



class FormFilter extends React.Component {

    //while the user is typing in the ifo in the input field 
    //we will take those info and save them inside our state 

    constructor(props) {
        super(props);
        this.state = {
            showInfoComponent: ''    //send data of user to main 
        }
    }
    //when the submits the form ,the data in our state will be passed down to our state will be passed down to our FormInfo component

    submitForm = (e) => {

        //we will need to have astate that will render the component once we submit the form 
    
       this.setState({
            showInfoComponent: e.target.value
            
        })
        
        this.props.changeValueFunc (e.target.value)     //invoke the function that inside the main 


    }


    render() {
        return (
            <div>
                <Form >
                    <Form.Label>Filter By number Of Hornes</Form.Label>

                    <select onChange={(e) => this.submitForm(e)} aria-label="Default select example">
                        <option value="">all</option>
                        <option value="1">one</option>
                        <option value="2">two</option>
                        <option value="3">Three</option>
                        <option value="100">100</option>

                    </select>


                </Form>


            </div >




        )
    }
}

export default FormFilter;