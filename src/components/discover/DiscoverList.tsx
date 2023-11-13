import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { DiscoverListItem } from "./DiscoverListItem";
import { DiscoverResult } from "@redux/slices/DiscoverSlice";
import { WithProperty } from "@wayloc/types/helper.d";

export function DiscoverList({data}: WithProperty<DiscoverResult[]>) {
	return (
		<View style={styles.container}>
			<FlatList
				style={styles.list}
				data={data}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <DiscoverListItem item={item} />}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	list: {
		margin: 10,
	},
})
