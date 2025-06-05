import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Não esqueça de instalar o pacote
import { Link } from 'expo-router';

export default function Pontos() {
  const locais = [
    { id: '1', nome: 'Caruaru Shopping', descricao: 'Local completo para família', imagem: require('../../src/assets/caruaru.jpg') },
    { id: '2', nome: 'Pátio do Forró', descricao: 'Maior e melhor são joão do mundo,', imagem: require('../../src/assets/forro.jpg') },
    { id: '3', nome: 'Prime Grill', descricao: 'Melhor e mais completo rodizio de carnes e massas da cidade.', imagem: require('../../src/assets/prime.jpeg') },
    { id: '4', nome: 'Parque Ambiental', descricao: 'Espaço aberto perfeito para passar a tarde.', imagem: require('../../src/assets/parque.jpg') },
    { id: '5', nome: 'Estação Ferroviária', descricao: 'Patrimônio da cidade.', imagem: require('../../src/assets/ferro.jpeg') },
    { id: '6', nome: 'Soul Quintal Gastronomia', descricao: 'Todos os ingredientes para uma noite especial.', imagem: require('../../src/assets/quintal.jpeg') },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity
  style={styles.avatar}
>
  <Image source={require('../../src/assets/gps.png')} style={styles.avatarImage} />
</TouchableOpacity>

      <View style={styles.info}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.descricao}>{item.descricao}</Text>
      </View>
      <Image source={item.imagem} style={styles.imagem} />
    </View>
  );

  return (
    
    
    
    <View style={styles.container}>
      <Text style={styles.titulo}>Caruaru Tour</Text>
      <FlatList
        data={locais}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

       <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="help-circle-outline" size={20} color="black" />
          <Text style={styles.footerText}>FAQ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="mail-outline" size={20} color="black" />
          <Text style={styles.footerText}>Contato</Text>
        </TouchableOpacity>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  titulo: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#00aaff',
    textAlign: 'center',
    marginBottom: 20,
    fontStyle: "italic"
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#00aaff',
    marginBottom: 12,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: "#fff",
    borderRadius: 8,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  info: {
    flex: 1,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  descricao: {
    fontSize: 12,
    color: '#ADD8E6',
  },
  imagem: {
    width: 50,
    height: 50,
    borderRadius: 6,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerButton: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 40,
    padding: 8,
    width: 100,

  },
  footerText: {
    fontSize: 12,
    marginTop: 4,
    color: '#000',
  },

  avatarImage: {
  width: 35,
  height: 35,
  borderRadius: 17.5,
},

});
