import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Card from './Card';

export default function NewsComponent() {
    const data = [
        { title: 'Cebu PUVs ordered to return to original routes Monday', tag: 'Travel' },
        { title: 'test2', tag: 'Travel' },
        { title: 'test3', tag: 'Travel' },
        { title: 'test4', tag: 'Travel' },
        { title: 'test5', tag: 'Travel' },
    ];

    return (
        <View style={styles.topNewsContainer}>
            <Text style={styles.topNewsHeader}>Top News</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Card title={item.title} tag={item.tag} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                snapToInterval={363} // Adjust this based on your content size
                snapToAlignment={'start'} // You can use 'center' or 'end' as well
            />
        </View>
    )
}

const styles = StyleSheet.create({
    topNewsHeader: {
        marginLeft: 5,
        marginBottom: 10,
        fontSize: 25,
        fontWeight: "600"
    },
    topNewsContainer: {
        flex: 1,
        marginLeft: 20
    }
})