import { Stack } from "expo-router";
// 1. Importe o UserProvider do seu arquivo de contexto
import { UserProvider } from '../src/assets/context/UserContext';

export default function Layout() {
  return (
    // 2. Envolva todo o Stack com o UserProvider
    <UserProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ADD8E6",
          },
          headerTintColor: "#FFF",
        }}
      >
        <Stack.Screen name="index" options={{ title: "Início" }} />
        <Stack.Screen name="paginas01/cadastro" options={{ title: "Cadastro" }} />
        <Stack.Screen name="paginas01/login" options={{ title: "Acesso" }} />
        <Stack.Screen name="paginas03/pontos" options={{ title: "Pontos Turísticos" }} />
        <Stack.Screen name="paginas02/duvidas" options={{ title: "Dúvidas" }} />
        <Stack.Screen name="paginas02/telefone" options={{ title: "Contato" }} />
        <Stack.Screen name="paginas02/local1" options={{title: "Locais"}} />
        <Stack.Screen name="paginas02/local2" options={{title: "Locais"}} />
        <Stack.Screen name="paginas02/local3" options={{title: "Locais"}} />
        <Stack.Screen name="paginas02/local4" options={{title: "Locais"}} />
        <Stack.Screen name="paginas02/local5" options={{title: "Locais"}} />
        <Stack.Screen name="paginas02/local6" options={{title: "Locais"}} />
        <Stack.Screen name="paginas02/local7" options={{title: "Locais"}} />
        <Stack.Screen name="paginas02/modal1" options={{ presentation: 'modal', title: 'Quem Somos', headerShown: false }} />
        <Stack.Screen name="paginas02/modal2" options={{ presentation: 'modal', title: 'Dúvida 2', headerShown: false }} />
        <Stack.Screen name="paginas02/modal3" options={{ presentation: 'modal', title: 'Dúvida 3', headerShown: false }} />
        <Stack.Screen name="paginas02/modal4" options={{ presentation: 'modal', title: 'Dúvida 4', headerShown: false }} />
      </Stack>
    </UserProvider>
  );
}






      
