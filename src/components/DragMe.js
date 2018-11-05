import React, {
  Component
} from 'react';
import {
  DragSource
} from 'react-dnd';

class DragMe extends Component {
  render() {
    const { connectDragSource, text } = this.props;

    return connectDragSource( <div className="drag-me">
        { text }
      </div>
    );
  }
}

const source = {
  beginDrag(props, monitor) {
    return {
      renderPreview: () => <DragMe {...props} connectDragSource={o => o} />
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

export default DragSource('drag-me', source, collect)(DragMe);