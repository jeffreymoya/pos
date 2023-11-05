import React, {memo} from "react"
import {List} from "react-native-paper"

const Item = ({left, right, title}) => {
    return (
        <List.Item
            style={styles.listItem}
            titleStyle={styles.title}
            title={title}
            left={left}
            right={right}
        />
    )
}

const styles = StyleSheet.create({
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
})
export default memo(Item)