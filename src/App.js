import React, {
  Component
} from 'react';

import {
  DragDropContext
} from 'react-dnd';
import MultiBackend, {Preview} from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/lib/HTML5toTouch'; // or any other pipeline

import './App.css';

import DragMe from './components/DragMe'
import DropMe from './components/DropMe'

class App extends Component {
  generatePreview(type, item, style) {
    return <div style={style}><DragMe /></div>
  }
  render() {
    return ( <div className = "App" >
        <DragMe / >
        <DropMe / >
        <Preview generator={this.generatePreview} />
      </div>
    );
  }
}

export default DragDropContext(MultiBackend(HTML5toTouch))(App);