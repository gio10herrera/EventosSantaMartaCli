import { StyleSheet, Text, View } from "react-native";

export default function CompEventoItem({evento}){
    return (
        <View style = {styles.container}>
            <View style = {styles.containerLineText}>
                <Text style = {styles.textTitle}>Nombre del Evento: </Text>
                <Text style = {styles.texts}>{evento.nombreEvento}</Text>
            </View>
            <View style = {styles.containerLineText}>
                <Text style = {styles.textTitle}>Lugar: </Text>
                <Text style = {styles.texts}>{evento.lugarEvento}</Text>
            </View>
            <View style = {styles.containerLineText}>
                <Text style = {styles.textTitle}>Direccion: </Text>
                <Text style = {styles.texts}>{evento.direccionEvento}</Text>
            </View>
            <View style = {styles.containerLineText}>
                <Text style = {styles.textTitle}>Descripción: </Text>
                <Text style = {styles.texts}>{evento.descripEvento}</Text>
            </View>
            <View style = {styles.containerDatosImportantes}>
                <View style = {styles.titleDatosImportantes}>
                    <Text style = {[styles.textTitle,{
                        marginBottom: 10,
                        fontSize: 17
                    }]}>Contacto y Precio</Text>
                    <View style = {styles.containerLineText}>
                        <Text style = {styles.textTitle}>email: </Text>
                        <Text style = {styles.texts}>{evento.emailContacto}</Text>
                    </View>
                    <View style = {styles.containerLineText}>
                        <Text style = {styles.textTitle}>celular: </Text>
                        <Text style = {styles.texts}>{evento.telContacto}</Text>
                    </View>
                    <View style = {styles.containerLineText}>
                        <Text style = {styles.textTitle}>Precio: $</Text>
                        <Text style = {styles.texts}>{evento.precioEvento}</Text>
                    </View>
                </View>
            </View>
            <View style = {styles.containerFecha}>
                <View style = {styles.containerLineText}>
                    <Text style = {styles.textTitle}>Fecha: </Text>
                    {/*Formatea la fecha a dd/mm/aaaa*/}
                    <Text style = {styles.texts}>{new Date(evento.date).toLocaleDateString('es-ES')}</Text>
                </View>
                <View style = {[styles.containerLineText,{
                    justifyContent: "flex-end"
                }]}>
                    <Text style = {styles.textTitle}>Hora: </Text>
                    <Text style = {styles.texts}>{new Date(evento.date).toLocaleTimeString('es-CO',{
                        hour: "2-digit",
                        minute: "2-digit"
                    })}</Text>
                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#264040",
        marginVertical: 8,
        paddingHorizontal: 15,
        marginHorizontal: 5,
        borderRadius: 10,
        paddingBottom: 5,
        paddingTop: 15,
        flex: 1,
        borderWidth: 3,
        borderColor: "#1d3030"
        
    },
    texts: {
        color: "#9fc6c6",
        fontWeight: "bold",
        fontSize: 16,
    },
    textTitle: {
        color: "#80b3b3",
        fontWeight: "normal",
        fontSize: 16
    },
    containerLineText: {
        flexDirection: "row",
        marginBottom: 5,
        flex: 1,
        flexWrap: "wrap",
    },
    containerDatosImportantes: {
        borderWidth: 1,
        borderColor: "#396060",
        marginBottom: 5,
        marginVertical: 10,
        marginHorizontal: 20
    },
    titleDatosImportantes: {
        alignItems: "center"
    },
    containerFecha: {
        flexDirection: "row",
        marginVertical: 10
    }
})