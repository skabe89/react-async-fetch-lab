// create your App component here
import React, { Component } from 'react'

class App extends Component {

 state = {
  peopleInSpace: []
 }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(res => res.json())
      .then(json => this.setState({
        peopleInSpace: json.people
        })
      )
  }

  renderAll = () => {
    console.log(this.state.peopleInSpace)
    return this.state.peopleInSpace.map((astro, index) => {
    return(<div key={ index }>
      <h3> { astro.name } </h3>
      <h5> { astro.craft } </h5>
    </div> )
    })
  }

  render() {
    console.log(this.state.peopleInSpace)
    return(
      <div>
        { this.renderAll() }
      </div>
    )
  }

}

export default App
