import React, { Component } from 'react';
import { Container, Header, Title,Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { StyleSheet,StatusBar } from 'react-native';

import ListViewer from '../Componentes/ListViewer';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionsCreator as Actions} from '../Redux/Actions';

class  SetView extends Component{
  constructor(props){
    super(props)
  }

  onPressBack = ()=>{
    this.props.navigation.goBack();
  }


  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#4596ab'}}>
          <StatusBar backgroundColor={'#4596ab'} barStyle="light-content"/>
          <Left>
            <Button onPress={this.onPressBack} transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
             <Title>{this.props.Sets[this.props.SetSelected][0]}</Title>
          </Body>
        </Header>
        <Content>
          <ListViewer  listViewData={this.props.Sets[this.props.SetSelected].slice(1)}  ></ListViewer>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state){
    const {Categories,Loundry,Missing,Sets,CategorySelected,SetSelected} = state;
    return{
      Categories,
      Loundry,
      Missing,
      Sets,
      CategorySelected,
      SetSelected
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
)(SetView);
