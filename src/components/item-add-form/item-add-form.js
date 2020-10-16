import React, {Component} from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        });
    }

    render() {
        const {onItemAdded} = this.props

        return (
            <form
                className="item-add-form d-flex"
                onSubmit={this.onSubmit}>
                <input
                    className="form-control"
                    type="text"
                    onChange={this.onLabelChange}
                    placeholder="What needs to be done"
                    value={this.state.label}
                />
                <button
                    className="btn btn-outline-secondary">
                    Add Item
                </button>
            </form>
        );
    }
}