import _ from 'lodash';
import faker from 'faker';
import React, { Component } from 'react';
import {Search,Grid,Input} from 'semantic-ui-react';
import './search.css'
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const source = _.times(5, () => ({
  title: faker.company.companyName(),
  description: faker.company.catchPhrase(),
 // image: faker.internet.avatar(),
  price: faker.finance.amount(0, 100, 2, '$'),
}))

const initialState = { isLoading: false, results: [], value: '' }

export default class SearchComponent extends Component {
  state = initialState

  handleResultSelect = (e, { result }) => {
 // do when a result is selected
 console.log(result.title);
this.setState({ value: result.title })
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      })
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
       <Grid >
        <Grid.Column width={6}>
          <Search
            fluid={true}
           
             input={{ icon: 'search', iconPosition: 'left' }}
             size = "large"
             aligned="left"
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 50, {
              leading: true,
            })}
            results={results}
            value={value}
            {...this.props}
          
          />
        </Grid.Column>
        </Grid>
     
    )
  }
}
