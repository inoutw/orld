import React, {Component} from 'react';
import {View} from 'react-native'
import {MyList} from '../components'

export default class MyListScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listData: [{gender: 'mail', name: 'qingmin', email: 'qq@qq.com'}, {gender: 'femail', name: 'zhulin', email: 'zhili@yryz.com'}],
		}
	}
	render() {
		return (
			<MyList data={this.state.listData}></MyList>
		)
	}
	componentDidMount() {
		this.getRemoteData();
	}
	getRemoteData() {
		const { listData } = this.state;
		const apiUrl = 'https://randomuser.me/api/?seed=1&page=1&results=20';
		fetch(apiUrl)
		.then(res => res.json())
		.then(res => {
			alert(JSON.stringify(res.results));
			this.setState({
				listData: [...this.state.listData, ...res.results],
			})
		})
		.catch(error => {
			console.error(error);
		})
	}
}
