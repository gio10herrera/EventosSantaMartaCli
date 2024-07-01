import { FlatList, StyleSheet, Text, View } from "react-native";

import { EVENTS_LIST } from "../data/data";
import CompEventoItem from "./CompEventoItem";

export default function CompListaEventos(){
    return (
        <View style = {styles.container}>
            <FlatList
                data={EVENTS_LIST}
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