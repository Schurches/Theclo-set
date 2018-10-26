import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';

import SwipeableListView from '../Componentes/SwipeableListView';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionsCreator as Actions} from '../Redux/Actions';
import _ from 'lodash'

class  LaundryView extends Component{
  constructor(props){
    super(props)
  }

  onPressBack = ()=>{
    this.props.navigation.goBack();
  }
  onSwipeL=(index)=>{
    //Send Missing
    item = this.props.Loundry[index];
    this.props.sendMissing(item);
    this.props.deleteLoundry(index);
  }

  onSwipeR=(index)=>{
    this.props.deleteLoundry(index);
  }

  loadPrendas=()=>{
    let prendas = this.props.Prendas;
    prendas = _.filter(prendas, ['Estado', 1]);
    console.log(prendas)
    return prendas
  }

  render() {
    return (
      <Container>
          <SwipeableListView UrlImageL={require("./images/socks_icon.png")}
          UrlImageR={require("./images/closet_icon.png")}
          onSwipeL={this.onSwipeL} onSwipeR={this.onSwipeR}
          onPressButtonBack={this.onPressBack} listViewData={this.loadPrendas()}
          btnRBkgColor='#6432c8' btnLBkgColor='#be1e2d' headerColor='#0b6623' Title={"Loundry"}></SwipeableListView>
      </Container>
    );
  }
}

function mapStateToProps(state){
    const {Categories,Prendas} = state;
    return{
      Categories,
      Prendas
    };

}

function mapDispatchToProps(dispatch){
  return{
    deleteLoundry: bindActionCreators(Actions.deleteLoundry,dispatch),
    sendMissing: bindActionCreators(Actions.sendMissing,dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(LaundryView);
