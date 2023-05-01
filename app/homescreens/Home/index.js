import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, } from 'react-native';
import { Card, Text, Searchbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DATA } from "../../../components/data"



const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [data, setData] = useState(DATA)


    useEffect(() => {

        if (!searchQuery) {
            setData(DATA)
        } else {
            setData(DATA.filter(item => item.title.includes(searchQuery)))
        }

    }, [searchQuery])



    const renderItem = ({ item }) => (

        <Card style={styles.item}>
            <Card.Content style={{ gap: 10 }} >
                <Text variant='bodyMedium' style={{ backgroundColor: "#E5F6FD", paddingHorizontal: 3, borderRadius: 50, width: 100 }} >{item.catergory}</Text>
                {item.status && <Text variant='bodyMedium' style={{ backgroundColor: "#7EA5CE", paddingHorizontal: 3, borderRadius: 50, width: 70 }}>Popular</Text>}
                <Text variant='bodyMedium' style={{ backgroundColor: "#fff", paddingHorizontal: 3, borderRadius: 50, width: "100%" }}>{item.title}</Text>

            </Card.Content>
        </Card>
    );

    const HeaderTitle = () => <Text variant='headlineSmall'  >What can we help you with today?</Text>

    return (

        <SafeAreaView style={styles.container}>
            <View style={{ borderRadius: 8, borderWidth: 1, borderColor: "gainsboro", marginBottom: 20 }}>
                <Searchbar
                    placeholder="Search for illness"
                    onChangeText={(event) => setSearchQuery(event)}
                    value={searchQuery}
                    style={{ width: "100%", backgroundColor: "#fff" }}
                />
            </View>

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<HeaderTitle />}

            />
        </SafeAreaView>

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
        margin: 10,
        height: 150,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
    },
});

export default Home;
