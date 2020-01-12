import React from 'react';
import PropTypes from 'prop-types';

export default class Ctext extends React.Component {
    render() {
      const headline = this.props.headline;
      const subheadline = this.props.subheadline;
      const text = this.props.text

      if (headline != "") {
        return (
          <div className="text">
            <h2>{headline}</h2>
            <h3>{subheadline}</h3>
            <p>
              {text}
            </p>
          </div>
        )
      } else {
        return (
          <div className="text">
            <h3>{subheadline}</h3>
            <p>
              {text}
            </p>
          </div>
        )
      }
    }
  }

  Ctext.propTypes = {
    headline: PropTypes.string,
    subheadline: PropTypes.string,
    text: PropTypes.string
  }