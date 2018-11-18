import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class ItemList extends Component{
  constructor(props){
    super(props)
  }
  render() {
    return (
      <View style={styles.itemView}>
        <View style={styles.imageView}>
          <Image
          style={{width: 70, height:70,borderRadius: 5,}}
          source={{uri: this.props.imageUrl}}
        />
        </View>
        <View style={styles.itemTextBox}>
          <Text style={{color: this.props.titleColor,fontWeight: 'bold',fontSize: 20,}} >{this.props.itemTitle}</Text>
          <Text style={styles.itemTextCategory} >{this.props.itemCategory}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemView:{
    flex:1,
    flexDirection: 'row',
    padding: 0,
  },

  imageView:{
    paddingLeft: 10,
  },
  itemTextBox:{
    paddingLeft: 8,
    paddingTop: 8,
  },
  itemTextCategory:{
    color: '#757575',
    fontSize: 15,
  },
});
