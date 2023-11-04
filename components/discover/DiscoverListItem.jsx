import {StyleSheet, View} from "react-native";
import {Avatar, List, Text} from "react-native-paper";

export function DiscoverListItem({item}) {
    return (
        <List.Item
            style={styles.listItem}
            titleStyle={styles.title}
            title={item.title}
            right={(props) => (
                <View style={styles.badgeContainer}>
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
        backgroundColor: '#334455',
        borderRadius: 12,
        height: 24,
        minWidth: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemCount: {
        fontFamily: 'Montserrat',
        fontSize: 8,
        fontWeight: 'bold',
        color: 'white', // Customize badge text color
    },
    itemIcon: {
        backgroundColor: 'transparent',
        borderRadius: 4,
        marginHorizontal: 10,
    },
    listItem: {
        gridTemplateColumns: "1fr 3fr 1fr",
        alignItems: "center",
        padding: 5,
        height: 50,
        overflow: "hidden",
        borderRadius: "5px",
        boxShadow: "0 5px 7px -1px rgba(51, 51, 51, 0.13)",
        transition: "transform .25s cubic-bezier(.7,.98,.86,.98), box-shadow .25s cubic-bezier(.7,.98,.86,.98)",
        margin: 5,
    },
    title: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000',
    },
});