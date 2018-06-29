import React from 'react';
import BookListView from "./src/views/BookListView";
import {createStackNavigator} from 'react-navigation';
import PlaygroundView from "./src/views/PlaygroundView";

const App = createStackNavigator({
  Home: {screen: BookListView},
  Playground: {screen: PlaygroundView},
});

export default App;
