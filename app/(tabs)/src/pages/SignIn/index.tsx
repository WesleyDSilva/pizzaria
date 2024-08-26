import React, {useState, useContext} from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";

import {AuthContext} from '../../contexts/AuntContext'

export default function SignIn(){

    const {signIn} = useContext(AuthContext);

    const [telefone, setTelefone] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin(){
        
        if(telefone===''||password===''){
            return;
        }
        //console.log("Telefone digitado" +telefone)
        await signIn({telefone,password})
    }

    return(
        <View style={styles.container}>
        <Image
            style={styles.logo}
            source={require('../../assets/logo2.png')}
        />

        

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Digite seu telefone"
                    style={styles.input}
                    placeholderTextColor="#FFFFFF"
                    value={telefone}
                    onChangeText={setTelefone}
                />
                <TextInput
                    placeholder="Sua Senha"
                    style={styles.input}
                    placeholderTextColor="#FFFFFF"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                  <Text style={styles.buttonText}>Acessar</Text>  
                </TouchableOpacity>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#4d4d4d'
    },
    logo:{
        marginBottom:18,
        width: 200, // Largura desejada
        height: 150, // Altura desejada
    },
    inputContainer:{
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 32,
        paddingHorizontal: 14,
    },
    input:{
        width: '95%',
        height: 40,
        backgroundColor:'#102035',
        marginBottom: 12,
        borderRadius: 4,
        paddingHorizontal: 8,
        color: '#FFF'
    },
    button:{
        width: '95%',
        height: 40,
        backgroundColor:'#ccff33',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    }, buttonText:{
        fontSize: 18,
        fontWeight:'bold',
        color: '#000'
    }
})