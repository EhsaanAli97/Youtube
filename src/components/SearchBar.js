import React, { Component } from 'react';

import { Paper, TextField } from '@material-ui/core';

class SearchBar extends Component {
	state = {
		searchTerm: '',
	};

	handleSubmit = (event) => {
		//Destructures the state to use the searchTerm
		const { searchTerm } = this.state;
		const { onFormSubmit } = this.props;

		onFormSubmit(searchTerm);

		event.preventDefault();
	};

	handleChange = (event) => {
		this.setState({
			searchTerm: event.target.value,
		});
	};

	render() {
		return (
			<Paper elevation={6} style={{ padding: '25px' }}>
				<form onSubmit={this.handleSubmit}>
					<TextField fullWidth label="Search..." onChange={this.handleChange} />
				</form>
			</Paper>
		);
	}
}

export default SearchBar;
