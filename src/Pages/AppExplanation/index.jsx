import React from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native-gesture-handler";

import DefaultButton from '../../Compenents/Common/DefaultButton';

export default function AppExplanation(){
    function handleSetShowHome(){
        console.log("Botão Clicado");
    }

    return(

        <View style={styles.container}>
            <ScrollView>
                <View style={{ alignItems: "center"}}>
                    <Text style={styles.title}>
                        Antes, deixa {"\n"} eu te explicar...
                    </Text>
                    <Text style={styles.descriptionCta}>
                        Pronto(a) para subir de nível na vida?
                    </Text>
                    <Text style={styles.description}>
                        Na próxima tela você vai poder escolher {"\n"} seus 4 hábitos de forma individual.
                    </Text>
                    <DefaultButton
                        buttonText={"Continuar"}
                        handlePress={handleSetShowHome}
                        width={250}
                        height={50}
                    />
                </View>
            </ScrollView>

        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "rgba(21, 21, 21, 0.98)",
    },

    title:{
        fontSize: 30,
        fontWeight: "bold",
        color: "#FFFFFF",
        textAlign: "center",
        marginVertical: 40,
    },

    descriptionCta:{
        color:"#FFFFFF",
        fontWeidht: "bold",
        fontSize: 16,
        marginTop: 20,
        marginBottom: 10,
    },
    description:{
        color: "#FFFFFF",
        textAlign: "center",
        marginBottom: 30,
    },
});