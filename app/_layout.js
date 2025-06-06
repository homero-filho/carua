import { Stack } from "expo-router";

export default function Layout (){

  return(
      <Stack screenOptions={{
        headerStyle: {
          backgroundColor: "#ADD8E6"

        },

        headerTintColor: "#FFF"




      }}>


      <Stack.Screen name="index" options={{title: "Início"}}/>
      <Stack.Screen name="paginas01/cadastro" options={{title: "Cadastro"}}/>
      <Stack.Screen name="paginas01/login" options={{title: "Acesso"}}/>
      <Stack.Screen name="paginas03/pontos" options={{title: "Pontos Turísticos"}}/>
      <Stack.Screen name="paginas02/duvidas" options={{title: "Dúvidas"}}/>
      <Stack.Screen name="paginas02/telefone" options={{title: "Contato"}}/>
      




    </Stack>
  )
}
