import React from 'react';
import { StyleSheet, View, Text, Pressable  } from 'react-native';

interface Props {
	title: string,
	status: string,
	value: number
  clicked: () => void;
}

const getColor = (value: number) => {

	if(value > 60 && value < 150)
		return {
			circle: "#78D37A",
			box: "#A2E794"
		}
	else
		return {
			circle: "#FAA68D",
			box: "#FCDCAC"
		}

}

export const Item : React.FC<Props> = ({status, title, value, clicked}) => {

	return (

    <Pressable onPress={() => clicked()} style={[styles.container, {backgroundColor: getColor(value).box}]}>
			<View style={styles.row}>
				<View style={[styles.circle, {backgroundColor: getColor(value).circle}]}>
					<Text style={styles.txt}>{value}%</Text>
				</View>
				<View style={{justifyContent: 'center', paddingLeft: 10}}>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.info}>{status}</Text>
				</View>
			</View>
		</Pressable>
	);

}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		backgroundColor: '#FCDCAC',
		padding: 17,
		borderRadius: 14,
		marginBottom: 15
	},
	row: {
		flexDirection: 'row',
	},
	txt: {
		fontFamily: "AvNextBold",
    fontWeight: "bold",
	marginBottom: -2,
	color: "#434343",
	fontSize: 12
  },
  circle: {
    height: 50,
    width: 50,
	justifyContent: 'center',
	alignItems: 'center',
    borderRadius: 100,
    backgroundColor: "#FAA68D"
  },
  title: {
    fontFamily: "AvNextBold",
    fontSize: 17,
	color: "#434343"
  },
  info: {
    fontWeight: "400",
    fontFamily: "AvNext",
    color: "#434343",
	opacity: .8,
	marginTop: 2
  }
})
