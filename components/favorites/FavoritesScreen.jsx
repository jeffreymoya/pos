import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Card, List, Title} from 'react-native-paper';

export function FavoritesScreen() {
    const favoritesData = [
        {id: '1', name: 'Favorite Location 1'},
        {id: '2', name: 'Favorite Location 2'},
        {id: '3', name: 'Favorite Location 3'},
    ];

    return (
        <View style={{flex: 1, padding: 16}}>
            <Title style={{marginBottom: 20}}>Favorites</Title>

            <FlatList
                data={favoritesData}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <Card style={{marginVertical: 10}}>
                        <Card.Content>
                            <List.Item title={item.name}/>
                        </Card.Content>
                    </Card>
                )}
            />

            {favoritesData.length === 0 && (
                <Text style={{textAlign: 'center'}}>You have no favorites yet.</Text>
            )}
        </View>
    );
};

