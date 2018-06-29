import React from "react";
import {FlatList, Text, View, StyleSheet} from "react-native";

const BookRow = ({item}) => <Text style={styles.item}>{item.name}</Text>;

const BookListView = () => {
  const books = [{key: '1', name: 'Clean Code'}, {key: '2', name: 'The Mikado Method'}];
  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        renderItem={BookRow}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default BookListView;
