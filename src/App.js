import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  Size = 8;

  apiKey=process.env.REACT_APP_NEWS_API;

  state={
    progress:0
  }
  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  // componentDidMount() {
  //   console.log("API Key:", this.apiKey);
  //   console.log('Environment Variables:', process.env);

  // }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color='#cdd0cc'
            progress={this.state.progress}
            loaderSpeed={1000}
            waitingTime={1000}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.Size} country="in" category="general" />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.Size} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.Size} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.Size} country="in" category="general" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.Size} country="in" category="health" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.Size} country="in" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.Size} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.Size} country="in" category="technology" />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
