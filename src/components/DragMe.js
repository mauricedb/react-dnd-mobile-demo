import React, {
  Component
} from 'react';
import {
  DragSource
} from 'react-dnd';

class DragMe extends Component {
  render() {
    const { connectDragSource } = this.props;

    return connectDragSource( <div className="drag-me">
        Drag me
      </div>
    );
  }
}

const source = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

export default DragSource('drag-me', source, collect)(DragMe);