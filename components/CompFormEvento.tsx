import { useEffect, useState } from "react";
import { Alert, Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform, StatusBar } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker"


export default function CompFormEvento(){
    const [nombreEvento, setNombreEvento] = useState("")
  const [emailContacto, setEmailContacto] = useState("")
  const [telContacto, setTelContacto] = useState("")
  const [lugarEvento, setLugarEvento] = useState("")
  const [direccionEvento, setDireccionEvento] = useState("")
  const [precioEvento, setPrecioEvento] = useState(0)
  const [descripEvento, setDescripEvento] = useState("")
  const [ready, setReady] = useState(false)


  const [date, setDate] = useState(new Date())
  const [showPicker, setShowPicker] = useState(false)
  const [showTimePicker, setShowTimePicker] = useState(false);
 

  const handleDateChange = (event, selectedDate) => {
    if(event.type === 'set'){
      const currentDate = selectedDate || date
      console.log(currentDate)
      setDate(currentDate)
    }
    setShowPicker(false)
  }

  const handleTimeChange = (event, selectedDate) => {
    if(event.type === 'set'){
      const currentDate = selectedDate || date
      console.log(currentDate)
      setDate(currentDate)
    }
    setShowTimePicker(false)
  }

  // Obtener la fecha actual más un día
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

 






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
    if (nombreEvento != "" && emailContacto != "" && telContacto != "" && lugarEvento != "" && direccionEvento != "" && precioEvento != 0 && descripEvento != "" && date.toLocaleDateString() != new Date().toLocaleDateString()) {
      setReady(true);
    } else {
      setReady(false);
    }
  }, [nombreEvento, emailContacto, telContacto, lugarEvento, direccionEvento, precioEvento, descripEvento, date]);

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

          

          <View style = {styles.containerDateTime}>
          <View style = {styles.textInputsCont}>
            <Text style = {[styles.textLabels, styles.textTituloLabelsGroup]}>Hora y Fecha del evento </Text>
          </View>
            <View>
              <TouchableOpacity onPress={() => setShowPicker(true)} style = {styles.EstiloBoton}>
                <Text style = {styles.buttonStyleText}>Escoja la fecha del evento </Text>
              </TouchableOpacity>
                { showPicker && (
                  <DateTimePicker
                  onChange={handleDateChange}
                  mode={'date'}
                  value={ date || new Date() }
                  minimumDate={tomorrow}
                  />
                )}
            </View>

            <View>
              <TouchableOpacity onPress={() => setShowTimePicker(true)} style = {styles.EstiloBoton}>
                <Text style = {styles.buttonStyleText}>Hora del evento</Text>
              </TouchableOpacity>
                { showTimePicker && (
                  <DateTimePicker
                  onChange={handleTimeChange}
                  mode={'time'}
                  value={ date || new Date() }
                  is24Hour={true}
                  />
                )}
            </View>
          </View>

          <TouchableOpacity
            style={[
              styles.EstiloBoton,
              {
                backgroundColor: ready ? "#396060" : "#4d8080",
              },
            ]}
            disabled={!ready}
            onPress={submit}>
            <Text style={[styles.buttonStyleText,
              {
                color: ready ? "#afcfcf" : "#8fbcbc"
              }
            ]}> Registrar Evento </Text>
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
      backgroundColor: "#568f8f",
    },
    titulo: {
      fontSize: 30,
      color: "#afcfcf",
      fontWeight: "bold",
      paddingTop: 20,
      paddingBottom: 15,
      textTransform: "capitalize",
    },
     
    textInputsCont: {
      marginTop: 20,
    },
    textLabels: {
      fontWeight: "bold",
      color: "#8fbcbc",
      paddingBottom: 5,
      lineHeight: 25,
    },
    textInput: {
      borderWidth: 1,
      borderColor: "#2f4f4f",
      paddingHorizontal: 15,
      paddingVertical: 6,
      borderRadius: 2,
      backgroundColor: "#609f9f"
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
      marginVertical: 10,
      backgroundColor: "#396060"
    },
    buttonStyleText: {
      color: "#afcfcf",
    },
    containerDateTime: {
      borderWidth: 1,
      marginVertical: 10,
      paddingVertical: 5,
      paddingHorizontal: 45,
      borderColor: "#2f4f4f",
      backgroundColor: "#609f9f",
    },
    textTituloLabelsGroup: {
      textAlign: "center"
    }
  });