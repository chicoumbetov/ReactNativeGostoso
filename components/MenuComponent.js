import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

function RenderMenuItem({ item }) {
    return (
        <View style={styles.listItem}>
            <Image source={require('./images/aiya.png')} style={styles.image} />
            <View style={{ alignItems: "center", flex: 1 }}>
                <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                <Text>{item.description}</Text>
            </View>
        </View>
    );
}

function Menu(props) {

    return (
        <View style={styles.container}>
            <FlatList
                style={{ flex: 1 }}
                data={props.dishes}
                renderItem={({ item }) => <RenderMenuItem item={item} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        marginTop: 60
    },
    image: {
        width: 60, height: 60, borderRadius: 30,
        margin: 10
    },
    listItem: {
        margin: 10,
        padding: 10,
        backgroundColor: "#FFF",
        width: "80%",
        flex: 1,
        alignSelf: "center",
        flexDirection: "row",
        borderRadius: 5
    }
});

export default Menu;