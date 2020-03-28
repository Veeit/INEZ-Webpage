import React from 'react';
import PropTypes from 'prop-types';
import Ctext from './Ctext';

class Ctextview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const imgLeft = this.props.imgLeft;
    const imgSrc = this.props.img;
    const headline = this.props.headline;
    const subheadline = this.props.subheadline;
    const text = this.props.text

    return (
      <div className={"Ctextview " + (imgLeft == "false" ? "" : "revered")}>
        <div className="left">
          <Ctext headline={headline} subheadline={subheadline} text={text}/>
        </div>
        <div className="right">
          <img src={imgSrc} alt="dashbaord" />
        </div>
      </div>
    );
  }
}

Ctextview.propTypes = {
  imgLeft: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  
  headline: PropTypes.string,
  subheadline: PropTypes.string,
  text: PropTypes.string
}

export default Ctextview;