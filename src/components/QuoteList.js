import React from 'react';
import { View, Text, FlatList } from 'react-native'
import Quote from './Quote'

const QuoteList = ({quotes}) => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={quotes}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Quote
            paciente={item.paciente}
            propientario={item.propientario}
            sintomas={item.sintomas}
          />
        )}
      />
    </View>
  );
}
 
export default QuoteList;