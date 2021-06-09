import React from 'react';
import Footer from './components/footer';
import Header from './components/Header';
import Main from './components/main';
import DataHorned from './components/Data.json';
import SelectedBeast from './components/SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';





class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {

      beastData: DataHorned,
      show: false,
      itemSelected: {}


    }

  }

  setShowPic = () => {
    this.setState({
      show: true
    })

  }

  CloseFun = () => {
    this.setState({
      show: false

    })

  }


  popUpCard = (title) => {
    let itemSelected = DataHorned.find(card => {
      if (card.title === title) {
        return card;
      }
    })

    this.setState({
      show: true,
      itemSelected: itemSelected
    })
  }



  render() {
    return (
      <div>
        <Header />

        <Main
          beastData={this.state.beastData}
          CloseFun={this.CloseFun}
          popUpCard={this.popUpCard}

        />
        

        <Footer />

        <SelectedBeast
          beastData={this.state.beastData}
          show={this.state.show}
          CloseFun={this.CloseFun}
          itemSelected={this.state.itemSelected}
        />
      </div>
    )
  }
}

export default App;

 