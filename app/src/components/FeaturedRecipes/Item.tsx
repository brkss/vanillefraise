import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { CDN } from '../../utils/config/defaults';

interface Props {
	title: string;
	image: string;
}
const adjustTitle = (title: string) => {
	if(title.length > 22){
		
		return `${title.substring(0, 22)}..`
	}
	else return title;
}
export const Item: React.FC<Props> = ({image, title}) => {

	return (
		<View style={styles.container}>
		<ImageBackground imageStyle={{borderRadius: 10}} source={{uri: `${CDN}/${image}`}} style={styles.image}>
			<View style={styles.shadow} />
		</ImageBackground>
		<Text style={styles.title}>{adjustTitle(title)}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: { 
		width: 150,
		marginRight: 10,
	},
	image: {
		height: 200,
		width: 150,
		borderRadius: 10,
		justifyContent: "flex-end",
		
	},
	title: {
		fontFamily: "AvNextBold",
		color: "black",
		fontSize: 16,
		marginTop: 5,
		lineHeight: 18
	},
	shadow: {
		position: "absolute",
		top: 0,
		left: 0,
		height: "100%",
		width: "100%",
		backgroundColor: "black",
		opacity: .2,
		borderRadius: 10
	}	
})