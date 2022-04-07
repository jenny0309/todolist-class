import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <div className='col-12'>
        <h2 className='bg-primary text-white text-center p2'>
          {this.props.name}'s To do list
        </h2>
        {/* <button
          className='btn btn-second m-2'
          onClick={this.changeStateData}
        >
          Change
        </button> */}
      </div>
    );
  }
}
