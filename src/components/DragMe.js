import React, {
  Component
} from 'react';
import {
  DragSource
} from 'react-dnd';

class DragMe extends Component {
  render() {
    const { connectDragSource, connectDragPreview, text } = this.props;

    return connectDragSource(connectDragPreview( <div className="drag-me">
        { text }
      </div>, {offsetX: -20, offsetY: 0 }));
  }
}

const source = {
  beginDrag(props, monitor, component) {

    return {
      renderPreview: () => <DragMe {...props} connectDragPreview={o => o} connectDragSource={o => o} />,
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview()
  };
}

export default DragSource('drag-me', source, collect)(DragMe);