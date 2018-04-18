import React from 'react';
import './label.css';
class Label extends React.Component {

  render() {
    return (
      <div className="label">  
        {this.props.value}
      </div>
    );
  }
}

export default Label;
