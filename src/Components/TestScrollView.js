import React from 'react';
import { FlatList, View, Text } from 'react-native';

function TestScrollView(props) {
    const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item5'];
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <View style={{ height: 300, width: 200, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue' }}>
                    <Text>{item}</Text>
                </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true} // Set to true for horizontal scrolling
            snapToInterval={200} // Adjust this based on your content size
            snapToAlignment={'start'} // You can use 'center' or 'end' as well
        />
    );
}

export default TestScrollView;