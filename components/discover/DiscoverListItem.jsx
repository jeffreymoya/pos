import {StyleSheet, View} from "react-native"
import {Avatar, Text} from "react-native-paper"
import Item from "../common/Item"
import {useTheme} from "@react-navigation/native"

export function DiscoverListItem({item}) {
    const theme = useTheme()
    return (
        <Item
            right={(props) => (
                <View style={{...styles.badgeContainer, backgroundColor: theme.colors.shadow}}>
                    <Text style={styles.itemCount}>{item.count}</Text>
                </View>
            )}
            left={(props) => (
                <Avatar.Icon
                    {...props}
                    icon={item.icon}
                    style={styles.itemIcon}
                    size={36}
                />
            )}
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