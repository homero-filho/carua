import { useRouter } from 'expo-router';
import { Image, Text, View } from 'react-native';
import { Button } from 'react-native';

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

Caruaru é uma cidade acolhedora. Como em qualquer lugar, é importante estar atento e tomar cuidados básicos, especialmente à noite ou em locais muito movimentados. No geral, é um destino seguro e muito bem preparado para receber visitantes.      </Text>

                <Button title='Fechar' onPress={() =>router.back("/paginas02/duvidas")}/>
            
    </View>


    
  );

}