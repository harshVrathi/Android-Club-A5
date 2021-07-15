import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import { ListItem, Icon } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux';
import { deleteanit } from './actions/name';

const List=()=>{

  const dispatch= useDispatch();

  const deleteCurrent=(key)=> dispatch(deleteanit(key))

  const anits=useSelector(state=> state.anitreduce.List)

  return (
    <FlatList style={styles.listContainer}
      data={anits}
      keyExtractor={(item, index)=> item.key.toString()}
      renderItem={
        (data)=>
          <ListItem
            title={data.item.name}
            bottomDivider
            rightIcon={<Icon
              name='delete'
              size={36}
              onPress={()=> deleteCurrent(data.item.key)} />
            }
          />
      }
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: 'orange',
    padding: 16
  },
  listText: {
    fontSize: 30
  },
});

export default List;