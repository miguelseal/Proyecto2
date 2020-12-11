import React, {Component} from 'react';
import Cards from '../Cards/Cards.js';

class Catalog extends Component {
  state = {
    products: []
  };
  
  componentDidMount = () => {
    fetch('https://restapitalleragustin.firebaseio.com/ProductoSuper/-MN3YD38_EiC_pgC1pmN.json')
      .then(response => response.json())
      .then(data => this.setState({products: data})); 
  }

  render() {
    return(
        <div className="d-flex flex-row flex-wrap justify-content-center mb-5">
          {this.state.products.map((product, key) => <Cards key={key} Data={product} />)}
        </div>
    );
  }
}

export default Catalog