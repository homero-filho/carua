import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Não esqueça de instalar o pacote
import { Link } from 'expo-router';

export default function Pontos() {
  const locais = [
    { id: '1', nome: 'Caruaru Shopping', 
      
      imagem: require('../../src/assets/caruaru.jpg'),
    link: 'local1'},
    { id: '2', nome: 'Pátio do Forró', 
      
      imagem: require('../../src/assets/forro.jpg'),
          link: 'local2'},
    
          { id: '3', nome: 'Prime Grill',
        imagem: require('../../src/assets/prime.jpeg'),
        link: 'local3'},
    
        { id: '4', nome: 'Parque Ambiental',
       imagem: require('../../src/assets/parque.jpg'),
      link: 'local4'},
    
      { id: '5', nome: 'Estação Ferroviária', 
      imagem: require('../../src/assets/ferro.jpeg'), 
      link: 'local5'},
    
      { id: '6', nome: 'Alto do Moura',
       imagem: require('../../src/assets/alto.jpg'),
       link: 'local6'},
   
       { id: '7', nome: 'Monte Bom Jesus', 
      imagem: require('../../src/assets/monte.png'), link:'local7'},

  ];



const renderItem = ({ item }) => (
  <Link href={`/paginas02/${item.link}`} asChild>
    <TouchableOpacity style={styles.item}>
      <View style={styles.avatar}>
        <Image source={require('../../src/assets/gps.png')} style={styles.avatarImage} />
      </View>

      <View style={styles.info}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.descricao}>{item.descricao}</Text>
      </View>

      <Image source={item.imagem} style={styles.imagem} />
    </TouchableOpacity>
  </Link>
  
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
        <Link href={"/paginas02/duvidas"} asChild>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="help-circle-outline" size={20} color="black" />
          <Text style={styles.footerText}>FAQ</Text>
        </TouchableOpacity>
        </Link>

        <Link href={"/paginas02/telefone"}asChild>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="mail-outline" size={20} color="black" />
          <Text style={styles.footerText}>Contato</Text>
        </TouchableOpacity>
        </Link>
        
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
