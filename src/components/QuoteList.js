import React from 'react';
import { View, Text, FlatList } from 'react-native'
import Quote from './Quote'

const QuoteList = ({quotes, deleteQuote}) => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={quotes}
        scrollEnabled
        extraData={quotes}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `quotes__${item.id}${index}`}
        renderItem={({item}) => (
          <Quote
            id={item.id}
            deleteQuote={deleteQuote}
            name={item.name}
            date={item.date}
            time={item.time}
            phone={item.phone}
            symptoms={item.symptoms}
            proprietary={item.proprietary}
          />
        )}
      />
    </View>
  );
};
 
export default QuoteList;