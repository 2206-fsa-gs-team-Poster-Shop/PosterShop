import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchShoes } from '../store/redux/allShoes';

export class AllShoes extends Component {
  componentDidMount() {
    this.props.getShoes();
  }

  render() {
    const allShoes = this.props.allShoes;
    console.log(allShoes);
    //  const filteredArr = allShoes.filter((shoe) => {
    //   if (this.state.brand === 'all') {
    //     return shoe
    //   } else if (shoe.brand === this.state.brand) {
    //     return shoe
    //   }
    // })
    return (
      <div id="all-shoes-view">
        {/* FILTER BAR */}
        <div id="filter-bar">
          <div id="brand-filter">
            <a>Filter By</a>
          </div>

          <div id="brand-filter-content">
            {allShoes.map((shoe) => {
              return <a>{shoe.name}</a>;
            })}
            {/* <a>Brand</a>
            <a>Brand</a>
            <a>Brand</a>
            <a>Brand</a> */}
          </div>
        </div>

        {/* FILTER BAR */}
        <div id="product-view">
          {allShoes.map((shoe) => {
            return (
              <Link key={shoe.id} to={`/product/${shoe.id}`}>
                <div className="product">
                  <img className="product-image" src={shoe.imageUrl} />
                  <div>{shoe.name}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    allShoes: reduxState.allShoesReducer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getShoes: () => dispatch(fetchShoes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllShoes);
