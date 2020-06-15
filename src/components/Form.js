import React, {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';


const Form = () => {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('');
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
    const options = {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    };
    const formatDate = date.toLocaleDateString('es-ES', options);
    setDate(formatDate)
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
    const options = { hour: 'numeric', minute: '2-digit' }
    const formarTime = time.toLocaleString('en-US', options);
    setTime(formarTime)
    hideTimePicker();
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <Text style={styles.label}>
          Nombre
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={text => console.log(text)}
          placeholder="Nombre de la macota"
        />
      </View>
      <View style={styles.containerInput}>
        <Text style={styles.label}>
          Propietario
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre del dueño"
          onChangeText={text => console.log(text)}
        />
      </View>
      <View style={styles.containerInput}>
        <Text style={styles.label}>
          Telefono
        </Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          placeholder="Numero de contacto"
          onChangeText={text => console.log(text)}
        />
      </View>
      <View style={styles.containerInput}>
        <Text style={styles.label}>
          Fecha
        </Text>
        <TouchableOpacity
          onPress={showDatePicker}
          style={styles.button}
        >
          <Text style={styles.textButton}>
            Selecciona Fecha &or;
          </Text>
        </TouchableOpacity>
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
        <Text style={styles.textResultPicker}>
          {date}
        </Text>
      </View>
      <View>
        <Text style={styles.label}>Hora</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={showTimePicker}
        >
          <Text style={styles.textButton}>
            Selecciona Hora &or;
          </Text>
        </TouchableOpacity>
        <DateTimePickerModal
          mode="time"
          cancelTextIOS="Cancelar"
          confirmTextIOS="Confirmar"
          onCancel={hideTimePicker}
          onConfirm={handleConfirmTime}
          isVisible={isTimePickerVisible}
          headerTextIOS="Selecciona una hora"
        />
        <Text style={styles.textResultPicker}>
          {time}
        </Text>
      </View>
      <View style={styles.containerInput}>
        <Text style={styles.label}>
          Sintomas
        </Text>
        <TextInput
          multiline
          style={styles.input}
          placeholder="Sintomas que presenta"
          onChangeText={text => console.log(text)}
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
  button: {
    paddingLeft: 5,
    borderRadius: 10,
    marginVertical: 5,
    paddingVertical: 10,
    backgroundColor: '#ddf3f5',
  },
  textButton: {
    fontSize: 15,
    color: '#1f4068',
    fontWeight: '500',
  },
  textResultPicker: {
    fontSize: 15,
    color: '#0f4c75',
    marginVertical: 5,
  },
});
 
export default Form;