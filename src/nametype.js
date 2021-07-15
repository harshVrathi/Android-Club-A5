import React, {useState} from 'react';
import {StyleSheet,View,TextInput,Text,TouchableOpacity} from 'react-native'
import {useDispatch} from 'react-redux';
import {addanit} from './actions/name';

const Nametype=({navigation}) => {

  const [anit, setanit]= useState('')

  const dispatch= useDispatch();

  const submitanit=(anit)=> dispatch(addanit(anit))

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Name List</Text>
      <TextInput
        value={anit}
        placeholder='Name'
        style={styles.anitInput}
        onChangeText={(anit) => setanit(anit)}
      />
      <TouchableOpacity
        style={{ marginBottom: 16 }}
        onPress={() => {
          submitanit(anit)
          setanit('')
        }}>
        <Text style={{ fontSize: 22, color: 'red' }}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginBottom: 16 }}
        onPress={() =>
          navigation.navigate('List')}>
        <Text style={{ fontSize: 22, color: 'white' }}>Go to Name List</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  title: {
    fontSize: 50,
    marginBottom: 150,
    marginTop: 20,
    color: 'white'
  },
  anitInput: {
    fontSize: 25,
    marginBottom: 32,
    width: '80%',
    borderRadius: 10,
    backgroundColor: 'grey'
  }
});
export default Nametype;