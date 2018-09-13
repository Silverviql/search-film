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
        this.updateMarker = this.updateMarker.bind(this);
    }

    updateMarker(key, value) {
        this.state.newItem = value
        // update react state
        this.setState({ [key]: value });

        // update localStorage
        localStorage.setItem(key, value);


        if(this.state.list.length === 0){
            this.addMarker()
        }else{
            if (!this.state.list.some(item => {
                if (value === item.value) {
                    this.deleteMarker(value);
                    return true
                } return false;})
            ) this.addMarker()
        }
    }


    addMarker = () => {
        // create a new item
        const newItem = {
            id: 1 + Math.random(),
            value: this.state.newItem.slice()
        };

        // copy current list of items
        const list = [...this.state.list];

        // add the new item to the list
        list.push(newItem);

        // update state with new list, reset the new item input
        this.setState({
            list,
            newItem: ""
        });

        // update localStorage
        localStorage.setItem("list", JSON.stringify(list));
        localStorage.setItem("newItem", "");

        console.log('add',localStorage)
    }



    deleteMarker(value) {
        // copy current list of items
        const list = [...this.state.list];
        // filter out the item being deleted
        const updatedList = list.filter(item => item.value !== value);

        this.setState({ list: updatedList });

        // update localStorage
        localStorage.setItem("list", JSON.stringify(updatedList));
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
                                         <button type="button" className="btn btn-dark"  onClick={e => this.updateMarker("newItem", item)}>
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
