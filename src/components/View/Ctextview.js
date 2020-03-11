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
    const link = this.props.link

    if (imgLeft === "false" && this.state.width > 600) {
      return (
        <a href={link}>
          <div className="Ctextview">
            <div className="left">
              <Ctext headline={headline} subheadline={subheadline} text={text}/>
            </div>
            <div className="right">
              <img src={imgSrc} alt="dashbaord" />
            </div>
          </div>
        </a>
      );
    } else {
      return (
        <a href={link}>
          <div className="Ctextview">
            <div className="left">
              <img src={imgSrc} alt="dashbaord" />
            </div>
            <div className="right">
              <Ctext headline={headline} subheadline={subheadline} text={text}/>
            </div>
          </div>
        </a>
      );
    }
  }
}

Ctextview.propTypes = {
  imgLeft: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  
  headline: PropTypes.string,
  subheadline: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string
}

export default Ctextview;