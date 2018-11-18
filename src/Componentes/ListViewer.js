import React, { Component } from 'react';
import { ListView,StyleSheet,StatusBar,TouchableOpacity } from 'react-native';
import { Container, Header,Title,Left, Content,Body, Button, Icon, List, ListItem, Text } from 'native-base';
import ItemList from './ItemList';

export default class ListViewer extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }


  render() {
    return (
        <Content>
          <List
            leftOpenValue={0}
            rightOpenValue={0}
            dataSource={this.ds.cloneWithRows(this.props.listViewData)}
            renderRow={data =>
              <ListItem style={styles.listView}>
                <TouchableOpacity onPress={this.props.onPressItem.bind(this,data.id)}>
                  <ItemList itemCategory={data.Descripcion} itemTitle={data.Titulo} imageUrl={data.FotoURL}/>
                </TouchableOpacity>
              </ListItem>}
            renderLeftHiddenRow={()=>{}}
            renderRightHiddenRow={()=>{}}
          />
        </Content>
    );
  }
}

const styles = StyleSheet.create({
  listView:{
    flex:1,
  },
});
