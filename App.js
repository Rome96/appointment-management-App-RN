import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import QuoteList from './src/components/QuoteList'
import Form from './src/components/Form'
const App = () => {
  const [showForm, setShowForm] = useState(true)
  const [quotes, setQuotes] = useState([
    {
      id: 1,
      paciente: 'may',
      propietario: 'Turi',
      sintomas: 'test  ',
    },
    {
      id: 2,
      paciente: 'lucia',
      propietario: 'Isaac',
      sintomas: 'El paciente ',
    },
    {
      id: 3,
      paciente: 'nose',
      propietario: 'Turi',
      sintomas: 'El paciente',
    },
    {
      id: 4,
      paciente: 'tampoco se',
      propietario: 'Isaac',
      sintomas: 'El paciente ingreso',
    },
    {
      id: 5,
      paciente: 'tampoco se',
      propietario: 'Isaac',
      sintomas: 'El paciente ingreso',
    },
  ]);

   // setQuotes((newQuotes) => {
    //   return (newQuotes = newQuotes.filter(quotes => quotes.id !== id));
    // })
  const deleteQuote = (id) => {
    const newQuotes = quotes.filter(quote => quote.id !== id);
    setQuotes(newQuotes);
  }

  const onShowForm = () => (
    setShowForm(!showForm)
  )
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.titleHeader}>Citas</Text>
      <ScrollView style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={onShowForm}
          style={styles.buttonShowForm}>
          <Text style={styles.textButton}>
            {
              showForm ? 'Ver citas' : 'Crear una nueva cita'
            }
          </Text>
        </TouchableOpacity>
        {
          showForm ? (
            <Form /> 
          ):(
            <>
              <Text style={styles.title}>
                {quotes.length ? 'Administra tus citas' : 'No hay citas'}
              </Text>
              <QuoteList quotes={quotes} deleteQuote={deleteQuote} />    
            </>
          ) 
        }
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#EEE',
  },
  titleHeader: {
    fontSize: 30,
    color: '#393e46',
    fontWeight: 'bold',
    marginLeft: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 23,
    marginVertical: 10,
    color: '#0f4c75',
    fontWeight: '700',
  },
  buttonShowForm: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#1b6ca8',
  },
  textButton: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default App;
