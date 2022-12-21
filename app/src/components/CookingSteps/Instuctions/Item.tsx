import React from "react";
import { View, StyleSheet, Text, Dimensions, Pressable } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	useAnimatedReaction,
	withSpring,
	withDelay,
	withTiming,
	Easing,
} from "react-native-reanimated";
import { snapPoint } from "react-native-redash";
//import { colors } from "../../../utils";

const { width: wWidth, height } = Dimensions.get("window");
const SNAP_POINTS = [-wWidth, 0, wWidth];
const DURATION = 250;

interface Props {
	index: number;
	shuffleBack: Animated.SharedValue<boolean>;
	swipedAll: Animated.SharedValue<boolean>;
	txt: string;
	num: number;
	clicked: () => void;
}

export const Item: React.FC<Props> = ({
	num,
	index,
	shuffleBack,
	swipedAll,
	txt,
	clicked,
}) => {
	const offsetX = useSharedValue(0);
	const offsetY = useSharedValue(-height);
	const start = useSharedValue({ x: 0, y: 0 });
	const isPressed = useSharedValue(false);
	const rotateZ = useSharedValue(0);
	const delay = index * DURATION;
	const theta = -10 + Math.random() * 20;

	React.useEffect(() => {
		offsetY.value = withDelay(
			delay,
			withTiming(0, { duration: DURATION, easing: Easing.inOut(Easing.ease) }, (res) => { console.log("res :", res, offsetY.value) })
		);
		console.log("delay: ", delay);
		rotateZ.value = withDelay(delay, withSpring(theta));
		
	}, [delay, index, rotateZ, theta, offsetY, txt]);

	useAnimatedReaction(
		() => shuffleBack.value,
		(v) => {
			if (v) {
				const duration = 150 * index;
				offsetX.value = withDelay(
					duration,
				withSpring(0, {}, () => {
						shuffleBack.value = false;
					})
				);
				rotateZ.value = withDelay(duration, withSpring(theta));
			}
		}
	);

	const gesture = Gesture.Pan()
	.onBegin(() => {
		isPressed.value = true;
	})
	.onUpdate(({ translationX, translationY }) => {
		offsetX.value = translationX + start.value.x;
		offsetY.value = translationY + start.value.y;
	})
	.onEnd(({ velocityX, velocityY }) => {
		const dest = snapPoint(offsetX.value, velocityX, SNAP_POINTS);
		offsetX.value = withSpring(dest, { velocity: velocityX });
		offsetY.value = withSpring(0, { velocity: velocityY });
		start.value.x = offsetX.value;
		start.value.y = offsetY.value;
		const isLast = index === 0;
		const isSwipedLeftOrRight = dest !== 0;
		if (isLast && isSwipedLeftOrRight) {
			shuffleBack.value = true;
			swipedAll.value = true;
		}
	})
	.onFinalize(() => {
		isPressed.value = false;
	});
	const style = useAnimatedStyle(() => {
		return {
			transform: [
				{ perspective: 1500 },
				{ rotateZ: `${rotateZ.value}deg` },
				{ translateX: offsetX.value },
				{ translateY: offsetY.value },
				{ scale: withSpring(isPressed.value ? 0.9 : 1) },
			],
		};
	});

	return (
		<Pressable onPress={clicked} pointerEvents={"box-none"} style={styles.box}>
			<GestureDetector gesture={gesture}>
				<Animated.View style={[styles.container, style]}>
					<Text style={styles.number}>#{num + 1}</Text>
					<Text style={styles.txt}>{txt}</Text>
				</Animated.View>
			</GestureDetector>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	box: {
		...StyleSheet.absoluteFillObject,
		//...StyleSheet.absoluteFill,
		justifyContent: "center",
		alignItems: "center",
		//height: 200,
	},
	container: {
		padding: 12,
		borderColor: "#BC9595",
		borderWidth: 1,

		//shadowColor: "#000",
		//shadowOffset: { width: 5, height: 10 },
		//shadowOpacity: 0.1,
		//shadowRadius: 7,
		//elevation: 5,

		//backgroundColor: colors.c3,
		backgroundColor: "#FBECEC",
		borderRadius: 27,
	},
	number: {
		textAlign: "center",
		marginBottom: 30,
		fontFamily: "AvNextBold",
		fontSize: 18,
		fontWeight: "bold",
	},
	txt: {
		marginBottom: 30,
		fontWeight: "bold",
		fontFamily: "AvNextBold",
		fontSize: 17,
	},
});
