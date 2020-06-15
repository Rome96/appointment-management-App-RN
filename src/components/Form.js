import React, {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';


const Form = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  //=========== Date ===========//
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  //=========== Time ===========//
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmTime = time => {
    console.warn('A Time has been picked: ', time);
    hideTimePicker();
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => console.log(text)}
          placeholder="Nombre de la macota"
        />
      </View>
      <View style={styles.containerInput}>
        <Text style={styles.label}>Propietario</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => console.log(text)}
          placeholder="Nombre del dueño"
        />
      </View>
      <View style={styles.containerInput}>
        <Text style={styles.label}>Telefono</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          placeholder="Numero de contacto"
          onChangeText={text => console.log(text)}
        />
      </View>
      <View style={styles.containerInput}>
        <Button title="Fecha" onPress={showDatePicker} />
        <DateTimePickerModal
          mode="date"
          locale="es_ES"
          cancelTextIOS="Cancelar"
          confirmTextIOS="Confirmar"
          onCancel={hideDatePicker}
          onConfirm={handleConfirmDate}
          isVisible={isDatePickerVisible}
          headerTextIOS="Selecciona una fecha"
        />
      </View>
      <View>
        <Button title="Hora" onPress={showTimePicker} />
        <DateTimePickerModal
          mode="time"
          cancelTextIOS="Cancelar"
          confirmTextIOS="Confirmar"
          onCancel={hideTimePicker}
          onConfirm={handleConfirmTime}
          isVisible={isTimePickerVisible}
          headerTextIOS="Selecciona una hora"
        />
      </View>
      <View style={styles.containerInput}>
        <Text style={styles.label}>Sintomas</Text>
        <TextInput
          multiline
          style={styles.input}
          onChangeText={text => console.log(text)}
          placeholder="Sintomas que presenta"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
  },
  containerInput: {
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 3,
  },
  input: {
    height: 50,
    fontSize: 15,
    color: '#0f4c75',
    borderRadius: 10,
    borderWidth: 0.3,
    alignItems: 'center',
    paddingHorizontal: 10,
    borderColor: '#0f4c75',
    backgroundColor: '#FFF',
  },
});
 
export default Form;