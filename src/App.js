import React, { Component } from 'react';
import Page from './components/page'
import axios from 'axios'
import './App.css';


const QUOTE_SERVICE_URL = 'https://reqres.in/api/unknown?per_page=12'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = localStorage.length !== 0 ? 
    JSON.parse(localStorage.getItem(`localState`)) : 
    {
      isLoading: true,
      colors: [],
      columns: [
        {
          id: 'id',
          name: 'id',
          isChecked: true,
        },
        {
          id: 'name',
          name: 'name',
          isChecked: true,
        },
        {
          id: 'year',
          name: 'year',
          isChecked: true,
        },
        {
          id: 'color',
          name: 'color',
          isChecked: true,
        },
        {
          id: 'pantone',
          name: 'pantone value',
          isChecked: true,
        },
      ],
      isResetActive: false,
    };

    this._colorCheckboxChangeHandler = this._colorCheckboxChangeHandler.bind(this);
    this._resetButtonClickHandler = this._resetButtonClickHandler.bind(this);
  }
  render() {
    localStorage ? console.log('true') : console.log('false');

    return (
      <div className='App'>
        {this.state.isLoading ?
          <div>Loading</div> :
          <Page
            colors={this.state.colors}
            columns={this.state.columns}
            isResetActive={this.state.isResetActive}
            onResetButtonClick={this._resetButtonClickHandler}
            onColorCheckboxChange={this._colorCheckboxChangeHandler}
          />}
      </div>
    );
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate() {
    this._updateLocalState();
  }

  _colorCheckboxChangeHandler(evt) {
    const columns = this.state.columns;
    const ind = columns.findIndex(
      (item => {
        return item.id === evt.target.id;
      })
    );
    
    const newColumns = columns.slice(0, columns.lenght);
    newColumns.splice(ind, 1, {
      id: columns[ind].id,
      name: columns[ind].name,
      isChecked: !columns[ind].isChecked,
    })

    this.setState({
      columns: newColumns,
      isResetActive: true,
    });
  }

  _updateLocalState() {
    localStorage.clear();
    localStorage.setItem(`localState`, JSON.stringify(this.state));
  }

  _resetButtonClickHandler() {
    this.setState({
      columns: [
        {
          id: 'id',
          name: 'id',
          isChecked: true,
        },
        {
          id: 'name',
          name: 'name',
          isChecked: true,
        },
        {
          id: 'year',
          name: 'year',
          isChecked: true,
        },
        {
          id: 'color',
          name: 'color',
          isChecked: true,
        },
        {
          id: 'pantone',
          name: 'pantone value',
          isChecked: true,
        },
      ],
      isResetActive: false,
    })
  }

  fetchData = () => {
    this.setState({ ...this.state, isLoading: true })
    axios.get(QUOTE_SERVICE_URL)
      .then(response => {
        this.setState({ colors: response.data.data, isLoading: false });
      })
      .catch(e => console.log(e));
  }
}

export default App

