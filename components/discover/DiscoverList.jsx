import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {DiscoverListItem} from "./DiscoverListItem";

const data = [
    {id: '1', title: 'Item 1', count: 5, icon: 'facebook', description: 'This is item 1'},
    {id: '2', title: 'Item 2', count: 10, icon: 'waze', description: 'This is item 2'},
    {id: '3', title: 'Item 3', count: 2, icon: 'google-maps', description: 'This is item 3'},
    // Add more data items as needed
]

export function DiscoverList() {
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <DiscoverListItem item={item}/>
                )}
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
    }
})