import React from "react";
import {FlatList, Text, View, StyleSheet, Button} from "react-native";

const BookRow = ({item}) => <Text style={styles.item}>{item.name}</Text>;

class BookListView extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };

  render() {
    const books = [{key: '1', name: 'Clean Code'}, {key: '2', name: 'The Mikado Method'}];
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button title="Go to Playground"
                onPress={() => navigate('Playground')}/>
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
