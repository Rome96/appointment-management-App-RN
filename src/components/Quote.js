import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native'

const Quote = ({
  id,
  paciente,
  sintomas,
  deleteQuote,
  propietario,
}) => {

  const onDeleteQuotes = () => {
    console.log('Id del array', id)
    // Alert.alert('Atención', 'Estas seguro de eliminar esta cita?');
    deleteQuote(id)
  }

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.containerInfo}>
          <Text style={styles.label}>Paciente:</Text>
          <Text style={styles.text}>{paciente}</Text>
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.label}>Propietario:</Text>
          <Text style={styles.text}>{propietario}</Text>
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.label}>Sintomas:</Text>
          <Text style={styles.text}>{sintomas}</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.containerButton}
          onPress={onDeleteQuotes}
        >
          <Text style={styles.textButton}>Eliminar &times;</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 2,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
  containerInfo: {
    margin: 5,
  },
  label: {
    fontSize: 18,
    marginRight: 10,
    fontWeight: 'bold',
    color: '#162447',
  },
  text: {
    marginTop: 5,
    fontSize: 17,
    fontWeight: '400',
    color: '#1f4068',
  },
  containerButton: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#e84a5f',
  },
  textButton: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default Quote