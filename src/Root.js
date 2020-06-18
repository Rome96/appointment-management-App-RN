import React, {useState} from 'react';
import Form from './components/Form';
import {useSelector} from 'react-redux';
import QuoteList from './components/QuoteList';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const Root = () => {
  const [showForm, setShowForm] = useState(true);
  const onShowForm = () => setShowForm(!showForm);
  const quotes = useSelector(state => state.quotes);

  return (
    <SafeAreaView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.titleHeader}>Citas</Text>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={onShowForm}
          style={styles.buttonShowForm}>
          <Text style={styles.textButton}>
            {showForm ? 'Ver citas' : 'Crear una nueva cita'}
          </Text>
        </TouchableOpacity>
        {showForm ? (
          <Form setShowForm={setShowForm} />
        ) : (
          <>
            <Text style={styles.title}>
              {quotes.length ? 'Administra tus citas' : 'No hay citas'}
            </Text>
            <QuoteList />
          </>
        )}
      </View>
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

export default Root;
