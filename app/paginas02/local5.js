import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function Local1({ navigation }) {
  const [avaliacao, setAvaliacao] = useState(0);
  const [comentario, setComentario] = useState('');

  return (
    <ScrollView style={styles.container}>
      


      <View style={styles.header}>
        <View style={styles.avatar}>
          <Image style={styles.icon} source={require("../../src/assets/tour.png")}/>
          
        </View>
        <View>
          <Text style={styles.local}>Estação Ferroviária</Text>
          <Text style={styles.categoria}>eventos</Text>
        </View>
        <MaterialIcons  style={styles.menuIcon} />
      </View>

       <View style={styles.imagemContainer}>
        <Image
          source={require('../../src/assets/ferro.jpeg')} 
          style={styles.imagemLocal}
          resizeMode="cover" 
        />
      </View>


      <View style={styles.infoContainer}>
        <Text style={styles.titulo}>Informações: </Text>
        <Text style={styles.link}>A Estação Ferroviária de Caruaru garante muita animação e celebração da cultura nordestina, durante a programação do São João 2025. Com polos ativos em diferentes expressões da cultura popular, o espaço foi ponto de encontro para quem buscava diversidade musical e tradição. No contexto do São João, a estação é um ponto de partida para quem se dirige ao Pátio do Forró e para outras áreas da cidade. A estação também tem sido objeto de investimentos para aprimorar e valorizar o patrimônio histórico, com projetos que visam a revitalização do local e a criação de novos usos. 
A Estação Ferroviária de Caruaru é um espaço vivo, que continua a ser um ponto de encontro e celebração para a comunidade, especialmente durante as festividades juninas e outras atividades culturais. </Text> 
      
      <Text style={styles.titulo2}>Localização:</Text>
                    <Text style={styles.link}>
                  •R. Silva Filho, 7 - Maurício de Nassau, Caruaru - PE, 55004-200
                </Text>
            
            <Text style={styles.titulo2}>Horário:</Text>
                    <Text style={styles.link}>
                
                  ∘Aberto 24h
                  
                </Text>
      
      
      
      
      </View>



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