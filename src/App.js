import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

import { SearchBar, VideoDetails, VideoList } from './components';

import youtube from './api/youtube';

class App extends Component {
	state = {
		videos: [],
		selectedVideo: null,
	};

	componentDidMount() {
		this.handleSubmit('Football');
	}

	onVideoSelect = (video) => {
		this.setState({
			selectedVideo: video,
		});
	};

	handleSubmit = async (searchTerm) => {
		const response = await youtube.get('search', {
			params: {
				part: 'snippet',
				maxResults: 5,
				key: 'AIzaSyDDPPOk_oSMSH0B_zpCKgGqq60P8ePk3nc',
				q: searchTerm,
			},
		});

		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0],
		});
	};

	render() {
		const { selectedVideo, videos } = this.state;

		return (
			<Grid justify="center" container spacing={10}>
				<Grid item xs={11}>
					<Grid container spacing={10}>
						<Grid item xs={12}>
							<SearchBar onFormSubmit={this.handleSubmit} />
						</Grid>

						<Grid item xs={8}>
							<VideoDetails video={selectedVideo} />
						</Grid>

						<Grid item xs={4}>
							<VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		);
	}
}

export default App;
