import React, { Component } from 'react';
import ReorderImages from 'react-reorder-images';
 
const images = [
  {
    url:
      'https://c.tenor.com/ZhfMGWrmCTcAAAAM/cute-kitty-best-kitty.gif',
    caption: "bank draft "
  },
  {
    url:
      'https://c.tenor.com/rz4kOurhQ0QAAAAd/big-mouth-cat.gif',
    caption: "bill-of-lading"
  },
  {
    url:
      'https://c.tenor.com/gIaioChTOloAAAAM/cat-cute.gif',
    caption: "Invoice"
  },
  {
    url:
      'https://media3.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif',
    caption: "bank-draft-2"
  },
  {
    url:
      'https://media.glamour.com/photos/580e1fc08bd9950546d001f6/master/pass/giphy%20(11).gif',
    caption: "bill-of-lading 2"
  },
  
];
 
class App extends Component {
  updateImages = images => console.log('updated- images', images); 
 
  render() {
    return (
      <div>
        <br />
        <div class='grid-container'>
          <div className='grid-item' style={{ padding: '0px'}}>
            Vector AI
          </div>
          <div className='grid-item2'>
            <ReorderImages images={images} callback={this.updateImages} />
          </div>
        </div>
      </div>
    );
  }
}
 
export default App;