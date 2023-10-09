import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function ApiCall() {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        async function getDataFromApi() {
            const apiResponse = await fetch('https://jsonplaceholder.typicode.com/users');
            const finalData = await apiResponse.json();
            setApiData(finalData);
        }

        getDataFromApi();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>API Data</Text>
            <FlatList
                data={apiData}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>Name: {item.name}</Text>
                        <Text>Email: {item.email}</Text>
                        <Text>Phone: {item.phone}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#3C486B'
    },
    item: {
        borderBottomWidth: 1,
        borderColor: '#3C486B',
        padding: 10,
        marginBottom: 10,
    },
});
