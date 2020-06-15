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
    console.log('State viejo:', quotes)
    const newQuotes = quotes.filter(quote => quote.id !== id);
    setQuotes(newQuotes);
    console.log('New State:', quotes)
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.title}>Citas</Text>
        <QuoteList quotes={quotes} deleteQuote={deleteQuote} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 30,
    marginVertical: 20,
  },
});

export default App;
