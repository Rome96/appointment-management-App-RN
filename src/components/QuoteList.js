import React from 'react';
import { View, Text, FlatList } from 'react-native'
import Quote from './Quote'

const QuoteList = ({quotes, deleteQuote}) => {
  console.log('QUOTES:', quotes)
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={quotes}
        scrollEnabled
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `quotes__${item.id}${index}`}
        renderItem={({item}) => (
          <Quote
            {...item}
            deleteQuote={deleteQuote}
          />
        )}
      />
    </View>
  );
};
 
export default QuoteList;