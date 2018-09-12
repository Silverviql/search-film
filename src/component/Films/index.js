import React, {Component} from 'react';
import PropTypes from 'prop-types';
import List from '../../component/List';
import './style.css';

var libraries = require('../../jsons/films');

class Films extends Component {
    static defaultProps = {};

    static propTypes = {
    };

    state = {
        items: [],
        currentPage: 1,
        todosPerPage: 15
    };

    constructor(props) {
        super(props);
        this.filterList = this.filterList.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    filterList(event, tag){
        let updatedList = libraries.map(film => film.title)
        let tagList = libraries.map(film => film.tags)
        if(event != null){
            updatedList = updatedList.filter(function(item){
                return item.toLowerCase().search(
                    event.target.value.toLowerCase()) !== -1;
            });
            this.setState({items: updatedList});
        }else{
            tagList = tagList.filter(function(item){
                return item.toLowerCase().search(
                    tag.target.value.toLowerCase()) !== -1;
            });
            this.setState({items: tagList});
        }
    }


    componentWillMount() {
        let updatedList = libraries.map(film => film.title)
        this.setState({items: updatedList})
    }

    render() {
        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.state.items.length / this.state.todosPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });

        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className="filter-list">
                            <form className='col-lg-12'>
                                <fieldset className="form-group">
                                    <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.filterList}/>
                                </fieldset>
                            </form>
                            <div className='col-lg-12 mx-auto mb-2'>
                                <button type="button" className="btn btn-dark" onClick={e =>this.filterList(null,'Преключение')}>Преключение</button>
                                <button type="button" className="btn btn-dark">Гонки</button>
                                <button type="button" className="btn btn-dark">Экшен</button>
                            </div>
                            <div className='col-lg-12'>
                                <ul>
                                    <List
                                        items={this.state.items}
                                        currentPage={this.state.currentPage}
                                        todosPerPage={this.state.todosPerPage}
                                />
                                </ul>
                                <ul id="page-numbers">
                                    {renderPageNumbers}
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-12 mx-auto mt-3'>
                            <button type="button" className="btn btn-dark">Показать еще</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Films;


