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
      propientario: 'Turi',
      sintomas: 'test hfdgkjlhfdjkg dfgdflhgjlk dfghjkd herkerjtlker tjerthkerhtjkwh ',
    },
    {
      id: 2,
      paciente: 'lucia',
      propientario: 'Isaac',
      sintomas: 'El paciente ingreso jstjer tjerhtjkreth ertk etkjer tret rhtkre htjkreht rlt hkljth rejt ejrlk tet jehltkherjlt tjk',
    },
    {
      id: 3,
      paciente: 'nose',
      propientario: 'Turi',
      sintomas: 'El paciente ingreso sdfrk gfkgfdjg kjfds gkjf gkjfdgh fdjg fdhlgj fjgf gfgh gkjlfhjkgf ghf lkgjdf kljg ljh fjkl gfdjklghjk kfldj ghfdk gflkgflgdfs jlkghflgkjhljkghs dkljgfkljg hdklg dfgkhfjkghs ghs dlhglkfdjgl df lhgkljh gkjldgjglfdh gjf gjf ghfj ghdfsjlkghjdklghlsdhgldsjhgdfl jgh dflkg dfkllfjkdgfdkljhfjklhgjkfdhgfjdkhg fdjkhg fdkjlhg fdkjlghjkdfhgjklfshglfjkhg fldjkhg    kfljgjfkldhg  dfkhjgjklf fdlkjgh',
    },
    {
      id: 4,
      paciente: 'tampoco se',
      propientario: 'Isaac',
      sintomas: 'El paciente ingreso',
    },
    {
      id: 5,
      paciente: 'tampoco se',
      propientario: 'Isaac',
      sintomas: 'El paciente ingreso',
    },
  ]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.title}>Administador de citas</Text>
        <QuoteList quotes={quotes}/>
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
    textAlign: 'center'
  },
});

export default App;
