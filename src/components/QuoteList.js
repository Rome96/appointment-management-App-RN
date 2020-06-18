import React from 'react';
import Quote from './Quote'
import { View, FlatList } from 'react-native'
import { useSelector } from 'react-redux';

const QuoteList = () => {
  const quotes = useSelector(state => state.quotes);
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
          />
        )}
      />
    </View>
  );
};
 
export default QuoteList;