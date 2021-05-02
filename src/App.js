import './App.css';

import React from 'react'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

import HomePage from './pages/HomePage/HomePage'
import FilmsPage from './pages/FilmsPage/FilmsPage'
import NovelsPage from './pages/NovelsPage/NovelsPage'
import PlaysPage from './pages/PlaysPage/PlaysPage'
import PodcastsPage from './pages/PodcastsPage/PodcastsPage'
import ShortStoriesPage from './pages/ShortStoriesPage/ShortStoriesPage'
import SourcesPage from './pages/SourcesPage/SourcesPage'

function App() {

  console.log("Debug: v0.0.02")

  return (
    <>
      <Router>
        <Navbar></Navbar>

        <Switch>
          <Route path='/English-Portfolio' exact component={HomePage}></Route>
          <Route path='/films' component={FilmsPage}></Route>
          <Route path='/novels' component={NovelsPage}></Route>
          <Route path='/plays' component={PlaysPage}></Route>
          <Route path='/podcasts' component={PodcastsPage}></Route>
          <Route path='/short_stories' component={ShortStoriesPage}></Route>
          <Route path='/sources' component={SourcesPage}></Route>
        </Switch>
        
      </Router>
    </>
  );
}

export default App;