import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, StatusBar} from 'react-native'
import { useState } from 'react'
import { Link } from 'expo-router'


export default function Login() {


    const [telefone, setTelefone] = useState()
    const [senha, setSenha] = useState()
    const [confirmarsenha, setConfirmarSenha] = useState()

    function validarLogin() {


    }
    return (
        <View style={styles.container}>
            <Image
                source={require("../../src/assets/gps.png")}
                style={styles.logo}
            />

            <Text style={styles.texto}> Caruaru Tour </Text>


            <View style={styles.inputContainer}>
                <Image
                    source={require('../../src/assets/user.png')}
                    style={styles.icon}
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={value => setTelefone(value)}
                    placeholder='usuário'
                    placeholderTextColor={"#ADD8E6"}
                />
            </View>


            <View style={styles.inputContainer}>
                <Image
                    source={require('../../src/assets/senha.png')}
                    style={styles.icon}
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={value => setSenha(value)}
                    placeholder='senha'
                    placeholderTextColor={"#ADD8E6"}
                    secureTextEntry
                />
            </View>


            <TouchableOpacity style={styles.botao2}>
                <Text style={styles.botao2}></Text> 
            </TouchableOpacity>
            <Link href={"/paginas03/pontos"} asChild>
            <TouchableOpacity style={styles.botao} onPress={validarLogin}>
                <Text style={styles.botao1}> Acessar </Text>
            </TouchableOpacity>
            </Link>
            
            <Link href={"/paginas01/cadastro"} asChild>
            <TouchableOpacity style={styles.botao2}>
                <Text style={styles.botao2}> Ainda não possui uma conta? Cadastre-se aqui</Text>
            </TouchableOpacity>
            </Link>

        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ADD8E6",
        justifyContent: "center",
        alignItems: "center",

    },

    logo: {
        marginTop: -250,
        position: "relative",
        width: 200,
        height: 201

    },

    texto: {
        fontSize: 50,
        position: "absolute",
        top: 10,
        fontWeight: "bold",
        color: "#00a8ff",
        fontStyle: "italic"
    },

    texto1: {
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "roboto",
        color: "#F8F8FF"
    },

    input: {
        backgroundColor: "#00a8ff",
        padding: 10,
        height: 45,
        marginTop: 10,
        borderRadius: 10,
        fontWeight: "bold",
        fontSize: 20,
        width: 300








    },
    

    botao1: {
        fontFamily: "roboto",
        fontSize: 22,
        fontWeight: "bold",
        color: "#F8F8FF"
    },

    botao: {
        alignItems: "center",
        backgroundColor: "#00a8ff",
        padding: 10,
        width: "50%",
        height: 45,
        marginTop: 200,
        borderRadius: 10,
        fontWeight: "bold",
        fontSize: 20

    },

    botao2: {
        color: "#00a8ff",
        fontFamily: "roboto",
        fontWeight: "bold",
        marginBottom: -150
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#00a8ff',
        paddingHorizontal: 10,
        height: 45,
        marginTop: 10,
        borderRadius: 10,
        width: 300
    },

    icon: {
        width: 24,
        height: 24,
        marginRight: 10
    }









})











