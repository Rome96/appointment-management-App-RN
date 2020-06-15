import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import QuoteList from './src/components/QuoteList'
import Form from './src/components/Form'
const App = () => {
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

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.container}>
        <Text style={styles.titleHeader}>Citas</Text>
        <Form/>
        <Text style={styles.title}>
          {quotes.length ? 'Administra tus citas' : 'No hay citas'}
        </Text>
        <QuoteList quotes={quotes} deleteQuote={deleteQuote} />
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
    marginVertical: 20,
  },
  title: {
    fontSize: 23,
    marginVertical: 10,
    color: '#0f4c75',
    fontWeight: '700',
  },
});

export default App;
