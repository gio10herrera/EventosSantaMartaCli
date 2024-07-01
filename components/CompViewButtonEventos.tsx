import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default function CompViewButtonEventos({ navigation }){
    return (
        <View style = {styles.container}>
            <TouchableOpacity style = {styles.botones}
                onPress={() => navigation.navigate('ListaEventos')}
            >
                <Text style = {styles.textos}>Eventos Ciudad de Santa Marta</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.botones}
                onPress={() => navigation.navigate('CrearEvento') }
            >
                <Text style = {styles.textos}>Crear Evento</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    botones:{
        flex: 1,
        justifyContent: "center",
        marginVertical: 5,
        marginHorizontal: 5,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#2f4f4f",
        borderRadius: 6,
        backgroundColor: "#437070",
    },
    textos:{
        color: "#afcfcf",
        textAlign: "center",
        fontSize: 40,
        fontWeight: "bold"
    },
    container:{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#568f8f"
    }
})