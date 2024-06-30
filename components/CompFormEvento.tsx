import { useEffect, useState } from "react";
import { Alert, Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function CompFormEvento(){
    const [nombreEvento, setNombreEvento] = useState("")
  const [emailContacto, setEmailContacto] = useState("")
  const [telContacto, setTelContacto] = useState("")
  const [lugarEvento, setLugarEvento] = useState("")
  const [direccionEvento, setDireccionEvento] = useState("")
  const [precioEvento, setPrecioEvento] = useState(0)
  const [descripEvento, setDescripEvento] = useState("")
  const [ready, setReady] = useState(false)

  const submit = () => {
    Alert.alert("Datos enviados", "Datos enviados correctamente",[{text:"ACEPTAR"}])
  }

  const handleDescripChange = (descr: string) => {
    setDescripEvento(descr)
  }

  const handlePrecioChange = (precio: string) => {
    const p = parseFloat(precio)
    if(!isNaN(p)){
      setPrecioEvento(p)
    }else {
      setPrecioEvento(0)
    }
  }

  const handleDireccionChange = (dir: string) => {
    setDireccionEvento(dir)
  }

  const handleLugarChange = (lugar: string) => {
    setLugarEvento(lugar)
  }

  const handleTelChange = (tel: string) => {
    setTelContacto(tel)
  }

  const handleEmailChange = (email: string) => {
    setEmailContacto(email)
  }
  

  const handleNombreChange = (nombre: string) => {
    setNombreEvento(nombre)
  }

  //verificamos si los campos estan llenos para controlar el disabled o enabled del boton
  useEffect(() => {
    if (nombreEvento != "" && emailContacto != "" && telContacto != "" && lugarEvento != "" && direccionEvento != "" && precioEvento != 0 && descripEvento != "") {
      setReady(true);
    } else {
      setReady(false);
    }
  }, [nombreEvento, emailContacto, telContacto, lugarEvento, direccionEvento, precioEvento, descripEvento]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.Container}>
          <Text style={styles.titulo}>Formulario nuevo evento</Text>

          <View style={styles.textInputsCont}>
            <Text style={styles.textLabels}> Nombre del evento </Text>
            <TextInput
              style={styles.textInput}
              placeholder={"Escribe aqui el nombre del evento"}
              value={nombreEvento}
              onChangeText={handleNombreChange}
            />
          </View>

          <View style={styles.textInputsCont}>
            <Text style={styles.textLabels}>Email de contacto</Text>
            <TextInput
              style={styles.textInput}
              placeholder={"example@example.com"}
              value={emailContacto}
              onChangeText={handleEmailChange}
            />
          </View>

          <View style={styles.textInputsCont}>
            <Text style={styles.textLabels}>Teléfono de contacto</Text>
            <TextInput
              style={styles.textInput}
              placeholder={"1234567890"}
              value={telContacto}
              onChangeText={handleTelChange}
            />
          </View>

          <View style={styles.textInputsCont}>
            <Text style={styles.textLabels}>Nombre del lugar del evento</Text>
            <TextInput
              style={styles.textInput}
              placeholder={"Nombre del lugar donde se realizará el evento"}
              value={lugarEvento}
              onChangeText={handleLugarChange}
            />
          </View>

          <View style={styles.textInputsCont}>
            <Text style={styles.textLabels}>Direccion del lugar</Text>
            <TextInput
              style={styles.textInput}
              placeholder={"CLL 5 CR 26 # 01 23 BR EXAMPLE"}
              value={direccionEvento}
              onChangeText={handleDireccionChange}
            />
          </View>

          <View style={styles.textInputsCont}>
            <Text style={styles.textLabels}>Precio entrada</Text>
            <TextInput
              style={styles.textInput}
              placeholder={"$"}
              value={precioEvento.toString()}
              onChangeText={handlePrecioChange}
            />
          </View>

          <View style={styles.textInputsCont}>
            <Text style={styles.textLabels}>Descripción del evento</Text>
            <TextInput
              style={[styles.textInput, styles.multilinea]}
              placeholder={"Escribe aquí todos los detalles del evento"}
              value={descripEvento}
              onChangeText={handleDescripChange}
              numberOfLines={7}
              multiline={true}
            />
          </View>

          <View style={styles.textInputsCont}>
            <Text style={styles.textLabels}>Precio entrada</Text>
            <TextInput
              style={styles.textInput}
              placeholder={"$"}
              value={precioEvento.toString()}
              onChangeText={handlePrecioChange}
            />
          </View>

          <TouchableOpacity
            style={[
              styles.EstiloBoton,
              {
                backgroundColor: ready ? "#4630EB" : "grey",
              },
            ]}
            disabled={!ready}
            onPress={submit}>
            <Text style={styles.buttonStyleText}> Contactanos </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

//Estilos
const styles = StyleSheet.create({
    Container: {
      height: "100%",
      paddingHorizontal: 30,
      backgroundColor: "#fff",
    },
    titulo: {
      fontSize: 20,
      color: "#344055",
      fontWeight: "500",
      paddingTop: 20,
      paddingBottom: 15,
      fontFamily: "JosefinSans_500Medium",
      textTransform: "capitalize",
    },
     
    textInputsCont: {
      marginTop: 20,
    },
    textLabels: {
      fontWeight: "bold",
      // fontSize: 15,
      color: "#7d7d7d",
      paddingBottom: 5,
      fontFamily: "JosefinSans_300Light",
      lineHeight: 25,
    },
    textInput: {
      borderWidth: 1,
      borderColor: "rgba(0, 0, 0, 0.3)",
      paddingHorizontal: 15,
      paddingVertical: 6,
      borderRadius: 2,
    },
    multilinea: {
      paddingVertical: 4,
    },
    EstiloBoton: {
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 18,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 30,
    },
    buttonStyleText: {
      color: "#eee",
    }
  });