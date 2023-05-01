import React, { useState } from 'react';
import { View, FlatList, StyleSheet, } from 'react-native';
import { Card, Text } from 'react-native-paper';


const DATA = [
    { id: '1', title: 'Anxiety', catergory: "Mental Health", status: true },
    { id: '2', title: 'Depression', catergory: "Mental Health", status: true },
    { id: '3', title: 'Insomnia', catergory: "Mental Health", status: true },
    { id: '4', title: 'Erectile Dysfunction', catergory: "Men’s Health", status: true },
    { id: '5', title: 'Anxiety', catergory: "Mental Health", status: true },
    { id: '6', title: 'Depression', catergory: "Mental Health", status: true },
];

const numColumns = 2;

const Home = () => {
    const [data, setData] = useState(DATA);

    const renderItem = ({ item }) => (
        // <View style={styles.item}>
        //     <Text style={styles.title}>{item.title}</Text>
        // </View>
        <Card style={styles.item}>
            <Card.Content style={{ gap: 10 }} >
                <Text variant='bodyMedium' style={{ backgroundColor: "#E5F6FD", paddingHorizontal: 3, borderRadius: 50, width: 100 }} >Mental Health</Text>
                <Text variant='bodyMedium' style={{ backgroundColor: "#7EA5CE", paddingHorizontal: 3, borderRadius: 50, width: 70 }}>Popular</Text>
                <Text variant='bodyMedium' style={{ backgroundColor: "#fff", paddingHorizontal: 3, borderRadius: 50, width: 70 }}>Anxiety</Text>

            </Card.Content>
        </Card>
    );

    const HeaderTitle = () => <Text variant='headlineSmall'  >What can we help you with today?</Text>

    return (

        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={numColumns}
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HeaderTitle />}

        />

    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#fff"

    },
    item: {
        flex: 1,
        // margin: 10,
        height: 150,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
    },
});

export default Home;
