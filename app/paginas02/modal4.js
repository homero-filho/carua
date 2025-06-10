import { useRouter } from 'expo-router';
import { Image, Text, View } from 'react-native';

export default function Modal2() {
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

            Sim! Estamos sempre ouvindo o feedback dos usuários para trazer melhorias constantes. Futuramente, pretendemos incluir mais funcionalidades, como mapas interativos, agenda de eventos, sugestões personalizadas e até realidade aumentada. Fique ligado nas atualizações!
        </Text>

                <Button title='Fechar' onPress={() =>router.back("/paginas02/duvidas")}/>
            
    </View>
  );

}