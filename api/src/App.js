import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorMessage from './ErrorMessage';
import { Alert } from 'react-bootstrap';
export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      longitude: '',
      latitude: '',
      error: '',
      alert: false
    }
  }

  nameSelect = (e) => {
    this.setState({
      displayName: e.target.value,

    })
  }

  submitData = async (e) => {
    e.preventDefault()
    try {
      
      // let axiosRes = await axios.get('http://localhost:8000/student-list')
      // console.log(axiosRes)
      let axiosResponse = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.251014ef67cf3832c2ec7cf0b704e07f&q=${this.state.displayName}&format=json`)
      this.setState({
        displayName: axiosResponse.data[0].display_name,
        longitude: axiosResponse.data[0].lon,
        latitude: axiosResponse.data[0].lat
      })
      // console.log(axiosResponse.data);
    }
    catch (err) {
      this.setState(
        {
          error: `${err.message}: ${err.response.data.error}`,
          alert: true
        })
    }
  }
  render() {
    return (
      
      <div>

<ErrorMessage alert={this.state.alert} error=
          {this.state.error} />
          
        <form onSubmit={this.submitData}>
          <input type='text' placeholder='write city name .....' onChange={(e) => {
            this.nameSelect(e)
          }} />
          <button>SUBMIT</button>
        </form>
        <h1>{this.state.displayName}</h1>
        <h1>{this.state.longitude}</h1>
        <h1>{this.state.latitude}</h1>
        {/* <h4> <Alert variant={'danger '}> {this.state.error}</Alert> </h4> */}
      </div>
    )
  }
}

export default App
