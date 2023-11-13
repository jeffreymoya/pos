import { StyleSheet, View } from "react-native";
import { Appbar, Divider } from "react-native-paper";
import { DiscoverList } from "./DiscoverList";
import { DistanceSlider } from "./DistanceSlider";
import React, { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@redux/store";
import { selectResults, selectSliderValue, setDistanceSliderValue } from "@redux/slices/DiscoverSlice";

export function DiscoverScreen() {
	const dispatch = useAppDispatch()
	const distance = useAppSelector(selectSliderValue)
	const results = useAppSelector(selectResults)
	const onDistanceSliderChange = useCallback((value: number) => dispatch(setDistanceSliderValue(value)), [])
	return (
		<View>
			<Appbar.Header elevated={true}>
				<Appbar.Content titleStyle={styles.container} title="Discover" />
			</Appbar.Header>
			<DistanceSlider distance={distance} onChange={onDistanceSliderChange} />
			<Divider />
			<View style={styles.content}>
				<DiscoverList data={results} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		padding: 16,
	},
})
