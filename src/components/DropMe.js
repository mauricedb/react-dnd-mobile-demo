import React, {
    Component
} from 'react';
import {
    DropTarget
} from 'react-dnd';

class DropMe extends Component {
    state = {
        isDropped: false,
        when: null
    }

    render() {
        const { connectDropTarget } = this.props;
        const { isDropped, when } = this.state;

        return connectDropTarget(<div className = "drop-me">
            {isDropped ? `I have been dropped on at ${when}` : 'Drop on me '}
        </div>);
    }
}

const spec = {
    drop: (props, monitor, component) => {
        console.log('Dropped')

        component.setState({
            isDropped: true,
            when: new Date().toLocaleTimeString()
        })
    },
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
    };
}

export default DropTarget('drag-me', spec, collect)(DropMe);