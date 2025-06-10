import { MaterialIcons } from '@expo/vector-icons';
import { useContext, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { UserContext } from '../../src/assets/context/UserContext';

// api
import api from '../api/axios/api';


export default function Local1({ navigation }) {
  // --- ESTADOS DO COMPONENTE ---
  const [avaliacao, setAvaliacao] = useState(0); // Para o formulário de nota
  const [comentario, setComentario] = useState(''); // Para o formulário de comentário
  const [listaAvaliacoes, setListaAvaliacoes] = useState([]); // Para armazenar a lista da API de avaliaçoes
  const [loading, setLoading] = useState(true); // Para o indicador de "carregando"
  const { user } = useContext(UserContext); // Pega o usuário logado

  const LOCAL_ID = 'alto-moura'; 
  
  /**
   * Busca a lista de todas as avaliações na API
   */

   const fetchAvaliacoes = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/avaliacoes/local/${LOCAL_ID}`); // MUDOU AQUI 
      setListaAvaliacoes(response.data);
    } catch (error) {
      console.error("Erro ao buscar avaliações:", error);
      Alert.alert("Erro", "Não foi possível carregar as avaliações.");
    } finally {
      setLoading(false);
    }
  };

  /**
   * Envia uma nova avaliação para a API
   */
  const handleEnviarAvaliacao = async () => {
    if (avaliacao === 0 || !comentario.trim() || !user?.id) {
      Alert.alert('Erro', 'Por favor, preencha a nota, o comentário e esteja logado.');
      return;
    }

  
    const dadosAvaliacao = {
      descricao: comentario,
      avaliacao: avaliacao,
      usuario: { id: user.id },
      localId: LOCAL_ID, // MUDOU AQUI MANDA O LOCAL ID 
    };

    try {
      await api.post('/avaliacoes', dadosAvaliacao);
      Alert.alert('Sucesso!', 'Sua avaliação foi enviada com sucesso.');
      setAvaliacao(0);
      setComentario('');
    
      fetchAvaliacoes();
    } catch (error) {
      console.error(error);
      if (error.response) {
Alert.alert('Erro no Servidor', `Não foi possível enviar a avaliação. Detalhes: ${error.response.data.message || 'Tente novamente'}`);
      } else if (error.request) {
        Alert.alert('Erro de Conexão', 'Não foi possível se conectar ao servidor.');
      } else {
        Alert.alert('Erro Inesperado', 'Ocorreu um erro ao processar sua solicitação.');
      }
    }
  };

  // Roda a função para buscar as avaliações quando a tela é aberta pela primeira vez
  useEffect(() => {
    fetchAvaliacoes();
  }, []);


  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Image style={styles.icon} source={require("../../src/assets/tour.png")} />
        </View>
        <View>
          <Text style={styles.local}>Alto do Moura</Text>
          <Text style={styles.categoria}>Lazer</Text>
        </View>
 
      </View>

 
      <View style={styles.imagemContainer}>
        <Image
          source={require('../../src/assets/alto.jpg')}
          style={styles.imagemLocal}
          resizeMode="cover"
        />
      </View>
      <View style={styles.infoContainer}>
              <Text style={styles.titulo}>Informações: </Text>
              <Text style={styles.link}> O Alto do Moura, localizado em Caruaru (PE), é conhecido como o maior centro de arte figurativa das Américas, sendo um importante polo turístico e cultural. O bairro ganhou fama principalmente pelo trabalho com o barro, tradição herdada de influências indígenas, africanas e portuguesas. A argila retirada do rio Ipojuca é usada por artesãos locais para criar peças que retratam a vida no sertão. O principal nome desse movimento é Mestre Vitalino, que eternizou cenas do cotidiano nordestino em esculturas e inspirou gerações. O local abriga hoje a Casa Museu Mestre Vitalino, além de diversos ateliês abertos ao público, onde é possível ver os artistas trabalhando. Durante o ano todo, mas especialmente no período do São João, o Alto do Moura atrai turistas com sua rica produção artesanal, gastronomia regional e ambiente animado, tornando-se um dos destinos mais autênticos e vivos do Nordeste brasileiro.</Text>
            <Text style={styles.titulo2}>Localização:</Text>
                          <Text style={styles.link}>
                        •Estrada Alto do Moura, s/n – Alto do Moura, Caruaru – PE, CEP 55040‑120
                      </Text>
                  
                  <Text style={styles.titulo2}>Horário:</Text>
                          <Text style={styles.link}>
                      
                        ∘Aberto 24h
                        
                      </Text>
            </View>
      
      {/* Seção para Deixar uma Avaliação */}
      <View style={styles.avaliacaoContainer}>
        <Text style={styles.avaliacaoTexto}>Deixe sua avaliação</Text>
        
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
        <TextInput
          style={styles.inputComentario}
          placeholder="Escreva seu comentário aqui..."
          placeholderTextColor="#888"
          multiline
          value={comentario}
          onChangeText={setComentario}
        />

        <TouchableOpacity style={styles.botaoEnviar} onPress={handleEnviarAvaliacao}>
          <Text style={styles.botaoEnviarTexto}>Enviar Avaliação</Text>
        </TouchableOpacity>
      </View>

      {/* Seção para Exibir Avaliações Existentes */}
      <View style={styles.listaContainer}>
        <Text style={styles.listaTitulo}>Avaliações</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#3FA9F5" />
        ) : (
          listaAvaliacoes.length === 0 ? (
            <Text style={styles.semAvaliacoes}>Nenhuma avaliação ainda. Seja o primeiro a avaliar!</Text>
          ) : (
            listaAvaliacoes.map((item) => (
              <View key={item.id} style={styles.cardAvaliacao}>
                <Text style={styles.cardUsuario}>{item.usuario.nome}</Text>
                <View style={styles.estrelasCard}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <MaterialIcons
                      key={i}
                      name={i <= item.avaliacao ? 'star' : 'star-border'}
                      size={16}
                      color="#f1c40f"
                    />
                  ))}
                </View>
                <Text style={styles.cardDescricao}>{item.descricao}</Text>
              </View>
            ))
          )
        )}
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
 header: {
    marginTop: 16,
    flexDirection: 'row',    
    alignItems: 'center',
  
  },
  avatar: {
    backgroundColor: '#3FA9F5',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    width: 40,
    height: 40,
  },
  local: {
    fontSize: 18,
        fontWeight: 'bold',
  },
  
  categoria: {
   color: '#3FA9F5',
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
  },
  infoContainer: {
    paddingHorizontal: 8,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  titulo2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  infoTexto: {
    color: 'black',
    marginTop: 8,
  },
  avaliacaoContainer: {
    alignItems: 'center',
    marginVertical: 20,
    padding: 10,
    backgroundColor: '#E0F7FA',
    borderRadius: 10,
  },
  avaliacaoTexto: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  estrelas: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  inputComentario: {
    backgroundColor: '#FFF',
    width: '100%',
    minHeight: 100,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    textAlignVertical: 'top',
    fontSize: 16,
    color: '#333',
    marginBottom: 16,
  },
  botaoEnviar: {
    backgroundColor: '#3FA9F5',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 3,
  },
  botaoEnviarTexto: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listaContainer: {
    marginTop: 20,
    paddingHorizontal: 8,
    paddingBottom: 40, 
  },
  listaTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  semAvaliacoes: {
    textAlign: 'center',
    color: '#555',
    fontStyle: 'italic',
  },
  cardAvaliacao: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardUsuario: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  estrelasCard: {
    flexDirection: 'row',
  },
  cardDescricao: {
    fontSize: 14,
    color: '#444',
    marginTop: 8,
  },
});