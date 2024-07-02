import { FlatList, StyleSheet, Text, View } from "react-native";

import { EVENTS_LIST } from "../data/data";
import CompEventoItem from "./CompEventoItem";
import appFirebase from "../data/credenciales";
import { collection, getDocs, getFirestore, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";

const db = getFirestore(appFirebase)

interface Doc {
    id: string
    nombreEvento: string
    lugarEvento: string
    direccionEvento: string
    descripEvento: string
    emailContacto: string
    telContacto: string
    

  }

  // Define la estructura del objeto Evento
interface Evento {
    id: string;
    nombreEvento: string;
    emailContacto: string;
    telContacto: string;
    lugarEvento: string;
    direccionEvento: string;
    precioEvento: number;
    descripEvento: string;
    date: Date; // Cambiado a Date para consistencia
  }

export default function CompListaEventos(){
    const [eventos, setEventos] = useState<Evento[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventosCollection = collection(db,"eventos")
        const eventosQuery = query(eventosCollection, orderBy("date", "asc"))
        const snapshot = await getDocs(eventosQuery)
        const eventsArray: Evento[] = snapshot.docs.map(doc => ({
          id: doc.id,
          nombreEvento: doc.data().nombreEvento,
          emailContacto: doc.data().emailContacto,
          telContacto: doc.data().telContacto,
          lugarEvento: doc.data().lugarEvento,
          direccionEvento: doc.data().direccionEvento,
          precioEvento: doc.data().precioEvento,
          descripEvento: doc.data().descripEvento,
          date: doc.data().date.toDate(), // Convertir Timestamp a Date
        }));
        setEventos(eventsArray);
      } catch (error) {
        console.error("Error fetching eventos: ", error);
      }
    };
    fetchData();
  }, []);

    return (
        <View style = {styles.container}>
            <FlatList
                data={eventos}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <CompEventoItem evento = {item}/>
                )}
            >
            </FlatList>
        </View>
       
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#437070" 
    }
})