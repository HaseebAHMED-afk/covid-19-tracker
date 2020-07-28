import React from 'react';
import {MainHeading, Cards, CountryPicker, Charts} from './components';
import styles from './components/App.module.css'
import { fetchAPI } from './API/index'
import corona from './images/image.png'

class App extends React.Component {

  state = {
    data: {},
    country: ''
  }

  async componentDidMount(){
    const fetchedData = await fetchAPI();

    this.setState({data: fetchedData});
  }

  handleCountryChange = async (country)=>{
    const fetchedData = await fetchAPI(country);

    this.setState({data: fetchedData , country: country});
  }

  render(){
    const {data, country} = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={corona} alt="corona-img" />
        <MainHeading />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}

export default App;
