import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function Local1({ navigation }) {
  const [avaliacao, setAvaliacao] = useState(0);
  const [comentario, setComentario] = useState('');

  return (
    <ScrollView style={styles.container}>
      

      {/* Cabeçalho com avatar e informações */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Image style={styles.icon} source={require("../../src/assets/tour.png")}/>
          
        </View>
        <View>
          <Text style={styles.local}>Parque Ambiental </Text>
          <Text style={styles.categoria}>natureza</Text>
        </View>
        <MaterialIcons  style={styles.menuIcon} />
      </View>

       <View style={styles.imagemContainer}>
        <Image
          source={require('../../src/assets/parque.jpg')} // coloque aqui sua imagem real
          style={styles.imagemLocal}
          resizeMode="cover" // ou "contain", se quiser mostrar a imagem toda
        />
      </View>

      {/* Informações */}
      <View style={styles.infoContainer}>
        <Text style={styles.titulo}>Informações</Text>
        <Text style={styles.link}>O primeiro parque urbano de Caruaru é um bom exemplo de restauração ambiental para benefício da população. Numa área com aproximadamente 4 hectares, destacam-se a Sementeira Municipal Chico Mendes, o Memorial do Asfalto, e um Jardim Sensorial, onde deficientes visuais podem dirigir-se através do toque e cheiro das plantas ali expostas.</Text> 
      </View>

      <Text style={styles.titulo2}>Endereço:</Text>
              <Text style={styles.link}>
            •Av. José Rodrigues de Jesus, s/n - Indianópolis, Caruaru - PE, 55026-005
          </Text>
      
      <Text style={styles.titulo2}>Horário</Text>
              <Text style={styles.link}>
          
            ∘Segunda: fechado{"\n"}
            ∘Terça à Domingo: 06:00 -- 18:00

            
          </Text>
        
        

      {/* Avaliação */}
      <View style={styles.avaliacaoContainer}>
        <Text style={styles.avaliacaoTexto}>Avalie o Local</Text>
        <View style={styles.estrelas}>
          {[1, 2, 3, 4, 5].map((i) => (
            <TouchableOpacity key={i} onPress={() => setAvaliacao(i)}>
              <MaterialIcons
                name={i <= avaliacao ? 'star' : 'star-border'}
                size={32}
                color="#f1c40f"
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>

     
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ADD8E6',
    flex: 1,
    padding: 16,
  },
  backButton: {
    backgroundColor: '#3FA9F5',
    borderRadius: 8,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    backgroundColor: '#3FA9F5',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  local: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  categoria: {
    marginLeft: 12,
    color: '#3FA9F5',
  },
  menuIcon: {
    marginLeft: 'auto',
  },
  imagemPlaceholder: {
    height: 180,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  placeholderText: {
    color: '#777',
    fontStyle: 'italic',
  },
  infoContainer: {
    paddingHorizontal: 8,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  titulo2:{
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8

  },
 
  link: {
    color: '#3FA9F5',
    marginTop: 8,
  },
  avaliacaoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  avaliacaoTexto: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  estrelas: {
    flexDirection: 'row',
  },
  comentarios: {
    backgroundColor: '#eee',
    padding: 12,
    borderRadius: 8,
  },
  input: {
    minHeight: 80,
    textAlignVertical: 'top',
  },

  icon: {
    width: 60,
    height: 60,
    
  },

  imagemContainer: {
  height: 200,
  borderRadius: 12,
  overflow: 'hidden',
  backgroundColor: '#ccc',
  marginVertical: 20,
},

imagemLocal: {
  width: '100%',
  height: '100%',
}
});