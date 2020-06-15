import React from 'react';
import { View, Text, FlatList } from 'react-native'
import Quote from './Quote'

const QuoteList = ({quotes, deleteQuote}) => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        extraData={quotes}
        data={quotes}
        keyExtractor={(item, index) => `quotes__${item.id}${index}`}
        renderItem={({item}) => (
          <Quote
            id={item.id}
            deleteQuote={deleteQuote}
            paciente={item.paciente}
            sintomas={item.sintomas}
            propietario={item.propietario}
          />
        )}
      />
    </View>
  );
};
 
export default QuoteList;