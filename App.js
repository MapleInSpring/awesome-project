import React from 'react';
import BookListView from "./src/views/BookListView";
import {createStackNavigator} from 'react-navigation';
import PlaygroundView from "./src/views/PlaygroundView";

const App = createStackNavigator({
  Home: {
    screen: BookListView,
    navigationOptions: () => ({
      title: 'Welcome to Booklist',
      headerBackTitle: 'Back'
    })
  },
  Playground: {
    screen: PlaygroundView,
    navigationOptions: () => ({
      title: 'Welcome to Playground',
    })
  },
});

export default App;
