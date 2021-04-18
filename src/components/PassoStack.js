import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default (props) => (
  <View style={styles.container}>
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      {props.avancar
        ? <Button
            title='Avançar'
            onPress={() => {
              props.navigation.push(
                props.avancar,
                {
                  numero: parseInt(Math.random() * 100)
                }  
              )
            }} 
          />
        : false}
        {props.voltar
        ? <Button
            title='Voltar'
            onPress={() => {
              props.navigation.goBack()
            }} 
          />
        : false}
    </View>
    <View style={{flex: 1}}>
      {props.children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
