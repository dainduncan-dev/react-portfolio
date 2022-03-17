import React from "react";
import axios from "axios";

export default class PortfolioDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioItem: {}
    }
  }

  componentDidMount() {
    this.getPortfolioItem();
  }

  getPortfolioItem() {
    axios
      .get(`https://garyduncan.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`,{ withCredentials: true })
      .then((response) => {
        this.setState({
          portfolioItem: response.data.portfolio_item
        })
      })
      .catch((err) => {
        console.log("getportfolioItem error", err);
      });
  }

  render() {
    const {
      banner_image_url,
      category,
      description,
      logo_url,
      name,
      thumb_image_url,
      url,
    } = this.state.portfolioItem;

    return (
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    );
  }
}
