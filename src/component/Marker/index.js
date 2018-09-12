import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Marker extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    deleteItem(id) {
        // copy current list of items
        const list = [...this.state.list];
        // filter out the item being deleted
        const updatedList = list.filter(item => item.id !== id);

        this.setState({ list: updatedList });
    }

    deleteMarker = (key) => {
        console.log(key)
        console.log('удаляем заметку')
        localStorage.removeItem(key);
        console.log(localStorage)
    }

    render() {
        let localValueMarker = localStorage.list;
        localValueMarker = JSON.parse(localValueMarker);
        return (

          <div>
                <ul className="list-group">
                    {
                        localValueMarker.map(marker =>{
                        return(
                            <div className='container mt-2' key={marker.id}>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <li className="list-group-item" data-category={marker.id} onClick={e => this.deleteMarker(marker.id)}>{marker.value} </li>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                    }
                </ul>
        </div>
        );
    }
}

export default Marker;
