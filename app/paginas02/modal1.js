import { useRouter } from 'expo-router';
import { Image, Text, View } from 'react-native';
import { Button } from 'react-native-web';

export default function Modal1() {
  const router = useRouter();

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ADD8E6',
      padding: 10
      
    }}>

        <Image source={require("../../src/assets/gps.png")}
        style ={{marginTop: -150, position: "relative", width: 280, height: 281}}
        />
      <Text style={{ fontSize: 20, marginBottom: 20, color: "#00a8ff", lineHeight: 24, textAlign: 'justify', }}>

    Somos um grupo de estudantes do curso de Análise e Desenvolvimento de Sistemas da Faculdade Uninassau, apaixonados por tecnologia e pela cultura nordestina. 
    Criamos o Caruaru Tour com o objetivo de valorizar a cidade e facilitar a vida dos turistas e moradores que desejam explorar os encantos de Caruaru de forma prática, moderna e acessível.
        
      </Text>
    <Button title='Fechar' onPress={() =>router.back("/paginas02/duvidas")}/>

    </View>
  );

}