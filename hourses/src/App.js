import React from 'react';
import Footer from './components/footer';
import Header from './components/Header';
import Main from './components/main';
import DataHorned from './components/Data.json';
import SelectedBeast from './components/SelectedBeast';





class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {

      beastData: DataHorned,
      showPic: false,
      itemSelected: {}


    }

  }

  setShowPic = () => {
    this.setState({
      showPic: true
    })

  }

  CloseFun = () => {
    this.setState({
      showPic: false

    })

  }


  popUpCard = (title) => {
    let itemSelected = DataHorned.find(card => {
      if (card.title === title) {
        return card;
      }
    })

    this.setState({
      showPic: true,
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
          showPic={this.state.showPic}
          CloseFun={this.CloseFun}
          itemSelected={this.state.itemSelected}
        />
      </div>
    )
  }
}

export default App;

 