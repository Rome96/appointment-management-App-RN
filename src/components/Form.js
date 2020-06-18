import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {useDispatch} from 'react-redux';
import {addQuote} from '../redux/actions';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  View,
  Text,
  Alert,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

const Form = ({setShowForm}) => {
  const [date, setDate] = useState('')
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [phone, setPhone] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [proprietary, setProprietary] = useState('')
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const dispatch = useDispatch();

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
//===================================//

const createQuote = () => {
    if(
      name.trim() === '' ||
      date.trim() === '' ||
      time.trim() === '' ||
      phone.trim() === '' ||
      symptoms.trim() === '' ||
      proprietary.trim() === '' 
    ){
      Alert.alert(
        'Ups!',
        'Todos los campos son obligatorios',
        [{
          text: 'Ok.'
        }]
      )
      return;
    }
    const quote = {name, date, time, phone, symptoms, proprietary};
    //asignar un ID
    quote.id = uuidv4()
    dispatch(addQuote(quote))    
    setShowForm(false)
}
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
    >
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Agregar Cita</Text>
          </View>
          <View style={styles.containerInput}>
            <Text style={styles.label}>Mascota</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setName(text)}
              placeholder="Nombre de la macota"
            />
          </View>
          <View style={styles.containerInput}>
            <Text style={styles.label}>Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre del dueño"
              onChangeText={text => setProprietary(text)}
            />
          </View>
          <View style={styles.containerInput}>
            <Text style={styles.label}>Telefono</Text>
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              placeholder="Numero de contacto"
              onChangeText={text => setPhone(text)}
            />
          </View>
          <View style={styles.containerInput}>
            <Text style={styles.label}>Fecha</Text>
            <TouchableOpacity onPress={showDatePicker} style={styles.button}>
              <Text style={styles.textButtonPicker}>
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
            <Text style={styles.textResultPicker}>{date}</Text>
          </View>
          <View>
            <Text style={styles.label}>Hora</Text>
            <TouchableOpacity style={styles.button} onPress={showTimePicker}>
              <Text style={styles.textButtonPicker}>
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
            <Text style={styles.textResultPicker}>{time}</Text>
          </View>
          <View style={styles.containerInput}>
            <Text style={styles.label}>Sintomas</Text>
            <TextInput
              multiline
              style={styles.input}
              placeholder="Sintomas que presenta"
              onChangeText={text => setSymptoms(text)}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={createQuote}
            style={styles.buttonAdd}>
            <Text style={styles.textButton}>&rarr; Agregar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
  },
  containerTitle: {
    marginVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#438a5e',
  },
  title: {
    fontSize: 23,
    color: '#0f4c75',
    fontWeight: '700',
    marginVertical: 10,
  },
  containerInput: {
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
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
  textButtonPicker: {
    fontSize: 15,
    color: '#1f4068',
    fontWeight: '500',
  },
  textResultPicker: {
    fontSize: 15,
    color: '#0f4c75',
    marginVertical: 5,
  },
  buttonAdd: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#438a5e',
  },
  textButton: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default Form
