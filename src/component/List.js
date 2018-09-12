import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { FaStar } from "react-icons/fa";

class List extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {
        list: [],
        newItem: ""
    };

    constructor(props) {
        super(props);
        this.addMarker = this.addMarker.bind(this);
    }


    addMarker = (key, value) => {
        // create a new item
        const newItem = {
            id: 1 + Math.random(),
            value: this.state.newItem.slice()
        };

        // copy current list of items
        const list = [...this.state.list];

        // add the new item to the list
        list.push(newItem);

        // update state with new list, reset the new item marker
        this.setState({
            list,
            newItem: ""
        });

        // update localStorage
        localStorage.setItem("list", JSON.stringify(list));
        localStorage.setItem("newItem", "");

        list.forEach((item) => {
            if(value === item.value){
                console.log('повтор  удалять', item.value,  value)
                this.updateMarker(item.value)
            }else {
                console.log('запись', item.value, '===', value)
                this.updateMarker(key, value)
            }
        })

    }

    updateMarker(key, value) {
        // update react state
        this.setState({ [key]: value });
        // update localStorage
        localStorage.setItem(key, value);
        console.log('update',localStorage)
    }

    deleteMarker(value) {
        // copy current list of items
        const list = [...this.state.list];
        // filter out the item being deleted
        const updatedList = list.filter(item => item.value !== value);

        this.setState({ list: updatedList });
        console.log('delete',localStorage)
    }

    render() {
        const { items,currentPage, todosPerPage  } = this.props;

        // Logic for displaying current todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = items.slice(indexOfFirstTodo, indexOfLastTodo);

        return (
            <div>
            <ul className="list-group">
                {
                    currentTodos.map((item, index) =>{
                        return(
                            <div  key={index}>
                                <div className='row'>
                                    <div className='col-lg-11'>
                                        <li className="list-group-item" data-category={item}>{item}</li>
                                    </div>
                                    <div className='col-lg-1'>
                                         <button type="button" className="btn btn-dark"  onClick={e => this.addMarker('newItem', item)}>
                                             <FaStar />
                                         </button>
                                    </div>
                                </div>
                          </div>
                        );
                     }
                    )
                }
            </ul>
            </div>
        );
    }
}

export default List;
