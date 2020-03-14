import React, { Component } from 'react';
import Card from './components/Card'
import Landscape from './components/Landscape'
import './App.css';
import './index.css';

class App extends Component {
  render(){

    var storage = window.localStorage;
    storage.clear();
    storage.setItem('posterName', 'joerogan');
    storage.setItem('postTitle', 'This is Michael Osterholm, he is the director of the Center for Infectious Disease Research and Policy at the University of Minnesota. We reached out to him to try to cut through all the bullshit regarding the coronavirus and walk us through the facts. It’s very eye opening to say the least. Podcast goes up today at 12pm PST.')
    storage.setItem('postTime', (new Date('03-10-2020').toString()));
    storage.setItem('postLikes', '50')
    storage.setItem('profilePic', 'https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-19/s150x150/16110531_1843500009241396_2021247012913020928_a.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_ohc=7f8oxzHXpiMAX8TymX6&oh=312b4c6c5a205c35f610a249eb9fa97a&oe=5E9DCC19')
    storage.setItem('posterVerified', true);
    storage.setItem('postLocation', '');
    storage.setItem('storyActive', true);
    storage.setItem('postPicture', 'https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/89486320_1261389900733569_8097736115561775923_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=1&_nc_ohc=cPaAdb6qW5cAX_RRzTT&oh=c638dc7ddc5b45d367e28c45636defe1&oe=5E9ABAFC');
    storage.setItem('currentUser', 'currentuser');
    storage.setItem('currentUserPicture', 'https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-19/s150x150/89305040_509749879685586_2035631403848171520_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_ohc=KRTPt-DxRooAX9N2r3G&oh=667126a431a318ae16126df0c0df614d&oe=5EA1809C')


    return (
      <div className="App">
        <br />
        <br />
        <br />
        <Landscape />
        <br />
        <br />
        <br />
        <Card />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default App;
