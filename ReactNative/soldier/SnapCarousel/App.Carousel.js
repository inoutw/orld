import React from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { ENTRIES1 } from './src/mock/data';
const { width, height } = Dimensions.get('window');

export default class App extends React.Component {
	state = {
		slider1ActiveSlide: '',
		entries: [
			{
				thumbnail: './src/images/girls.jpg',
				title: 'Beautiful and dramatic Antelope Canyon',
				subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
				illustration: 'https://i.imgur.com/UYiroysl.jpg'
			},
			{
				thumbnail: './src/images/last-of-us.jpg',
				title: 'Earlier this morning, NYC',
				subtitle: 'Lorem ipsum dolor sit amet',
				illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
			},
			{
				thumbnail: './src/images/you.jpg',
				title: 'White Pocket Sunset',
				subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
				illustration: 'https://i.imgur.com/MABUbpDl.jpg'
			}]
	}
	_renderItem({ item, index }, parallaxProps) {
		return (
			<View style={styles.slide}>
				<ParallaxImage
					source={{ uri: item.thumbnail }}
					containerStyle={styles.slide}
					style={styles.image}
					parallaxFactor={0.4}
					{...parallaxProps}
				/>
				<Text style={styles.title} numberOfLines={2}>
					{item.title}
				</Text>
			</View>
		);
	}

	render() {
		return (
			<Carousel
				ref={c => this._slider1Ref = c}
				data={this.state.entries}
				renderItem={this._renderItem}
				sliderWidth={width - 60}
				itemWidth={width - 80}
				hasParallaxImages={true}
				firstItem={1}
				inactiveSlideScale={0.94}
				inactiveSlideOpacity={0.7}
				// inactiveSlideShift={20}
				loopClonesPerSide={2}
				autoplay={true}
				autoplayDelay={500}
				autoplayInterval={3000}
				onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
			/>
		);
	}
}

const styles = StyleSheet.create({
	slide: {
		backgroundColor: '#f31',
		margin: 10,
	},
});
