import React from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";

const BookRow = ({item}) => <Text style={styles.item}>{item.name}</Text>;

class BookListView extends React.Component {
  render() {
    const books = [{key: '1', name: 'Clean Code'}, {key: '2', name: 'The Mikado Method'}];
    return (
      <View style={styles.container}>
        <Text>Welcome to Booklist</Text>
        <FlatList
          data={books}
          renderItem={BookRow}/>
      </View>
    );
  }
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
