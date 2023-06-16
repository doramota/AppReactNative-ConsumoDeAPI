import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { fetchDados } from './servives/api';

const HomeScreen = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchDados();
      setDados(response);
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>{JSON.stringify(dados)}</Text>
    </View>
  );
};

export default HomeScreen;
