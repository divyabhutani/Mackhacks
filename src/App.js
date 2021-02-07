import React, { Component } from 'react';
import axios from 'axios';
import Gene from './Logo/gene.png';
import WelcomePage from './WelcomePage';
import 'tachyons';

const initialState = {
  route: 'home',
  selectedFile: null
}
class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }
  onRouteChange = (route) =>{
    this.setState({route : route})
  }
  onFileChange = event => {
    this.setState({ selectedFile: event.target.files[0]});
  }
  onFileUpload = () => {
    
    const formData = new FormData();
  
    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
  
    // Details of the uploaded file
    console.log(this.state.selectedFile);
  
    // Request made to the backend api
    // Send formData object
    axios.post("api/uploadfile", formData);
  }

  render() {
    return (
      <div>
        <div className='flex justify-center'><img className='bg-light-blue' style={{maxHeight : '7rem'}} src={Gene} alt="logo" /></div>
        <WelcomePage
        routeState = {this.state.route}
        onRouteChange={this.onRouteChange} 
        onFileChange = {this.onFileChange}
        onFileUpload = {this.onFileUpload}/>
      </div>
    )
  }
}

export default App;



