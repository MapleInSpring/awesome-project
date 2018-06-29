import React from 'react';
import BookListView from "./src/views/BookListView";
import {createBottomTabNavigator} from 'react-navigation';
import PlaygroundView from "./src/views/PlaygroundView";

const App = createBottomTabNavigator(
  {
    Home:
      {
        screen: BookListView,
      },
    Playground:
      {
        screen: PlaygroundView,
      }
  },
  {
    initialRouteName: 'Home'
  }
);

export default App;
