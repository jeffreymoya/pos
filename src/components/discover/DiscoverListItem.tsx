import { StyleSheet, View, ViewProps } from "react-native";
import { Avatar, Text } from "react-native-paper";
import Item from "../common/Item";
import React from "react";
import { useAppTheme } from "@theme/index";
import { DiscoverResult } from "@redux/slices/DiscoverSlice";
import { WithProperty } from "@wayloc/types/helper.d";

export function DiscoverListItem({ item }: WithProperty<DiscoverResult>) {
	const theme = useAppTheme()

	return (
		<Item
			title={item.title}
			right={(props: ViewProps) => (
				<View {...props} style={{ ...styles.badgeContainer, backgroundColor: theme.colors.shadow }}>
					<Text style={styles.itemCount}>{item.count}</Text>
				</View>
			)}
			left={(props: ViewProps) => <Avatar.Icon {...props} icon={item.icon} style={styles.itemIcon} size={36} />}
		/>
	)
}

const styles = StyleSheet.create({
	badgeContainer: {
		borderRadius: 12,
		height: 24,
		minWidth: 24,
		justifyContent: 'center',
		alignItems: 'center',
	},
	itemCount: {
		fontSize: 8,
		fontWeight: 'bold',
		color: 'white',
	},
	itemIcon: {
		backgroundColor: 'transparent',
		borderRadius: 4,
		marginHorizontal: 10,
	},
})
