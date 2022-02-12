import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from './portfolio-item'

export default class PortfolioContainer extends Component {
  // State
  // Lifecycle hooks
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: [],
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  getPortfolioItems() {
    axios
      .get("https://garyduncan.devcamp.space/portfolio/portfolio_items")
      .then((response) => {
        // handle success
        this.setState({
            data: response.data.portfolio_items
        })
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter((item) => {
        return item.category === filter;
      }),
    });
  }

  portfolioItems() {
    return this.state.data.map((item) => {
        console.log("item data", item)
      return (
        <PortfolioItem title={item.name} url={item.url} slug={item.id} />
      );
    });
  }

  componentDidMount() {
      this.getPortfolioItems();
  }

  handlePageTitleUpdate() {
    this.setState({
      pageTitle: "Something Else",
    });
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h2>{this.state.pageTitle}</h2>

        <button onClick={() => this.handleFilter("eCommerce")}>
          eCommerce
        </button>
        <button onClick={() => this.handleFilter("Scheduling")}>
          Scheduling
        </button>
        <button onClick={() => this.handleFilter("Enterprise")}>
          Enterprise
        </button>

        {this.portfolioItems()}
      </div>
    );
  }
}