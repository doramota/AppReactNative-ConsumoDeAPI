import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import api from './src/servives/api';
import Filme from './src/pages/Filme';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('/filmes');
        setFilmes(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.filmeContainer}>
        <Text>{item.id}</Text>
        <Text>{item.nome}</Text>
        <Text>{item.foto}</Text>
        <Text>{item.descricao}</Text>
        <Text>{item.elenco}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filmeContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});
