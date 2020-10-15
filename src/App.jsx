import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Button, Toolbar} from 'react-onsenui';
import {notification} from 'onsenui';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { count: [] };
    this.countUp = this.countUp.bind(this);
  }

  alertPopup() {
    notification.alert('This is an Onsen UI alert notification test.');
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className='center'>Onsen UI</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <div>電卓風ボタン</div>
        <div>{this.state.count}</div>
        <Button onClick={() => this.countUp(7)}>7</Button>
        <Button onClick={() => this.countUp(8)}>8</Button>
        <Button onClick={() => this.countUp(9)}>9</Button>
        <div>
        <Button onClick={() => this.countUp(4)}>4</Button>
        <Button onClick={() => this.countUp(5)}>5</Button>
        <Button onClick={() => this.countUp(6)}>6</Button>
        </div>
        <Button onClick={() => this.countUp(1)}>1</Button>
        <Button onClick={() => this.countUp(2)}>2</Button>
        <Button onClick={() => this.countUp(3)}>3</Button>
        <div>
        <Button onClick={ () => this.countUp(0)}>0</Button>
        <Button onClick={() => this.countUp("")}>ｸﾘｱ</Button>
        </div>

      </Page>
    );
  }
  countUp(value){
    if(value === ""){
      this.state.count = "";
    }
    if(this.state.count.length >= 8){
      this.setState({count: this.state.count + "これ以上入力できません"})
      return ;
    }
    this.setState({count: this.state.count + value});
    
  }

}