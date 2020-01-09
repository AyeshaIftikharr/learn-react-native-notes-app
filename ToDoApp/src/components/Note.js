import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Note = ({ keyValue, value, onDeleteNote }) => (
  <View key={keyValue} style={styles.note}>
    <Text style={styles.noteText}>{value.date}</Text>
    <Text style={styles.noteText}>{value.note}</Text>
    <TouchableOpacity onPress={onDeleteNote} style={styles.noteDelete}>
      <Text style={styles.noteDeleteText}>-</Text>
    </TouchableOpacity>
  </View>
);

Note.propTypes = {
  keyValue: PropTypes.any,
  value: PropTypes.object,
};

const styles = StyleSheet.create({
  note: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#EDEDED',
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: '#E91E63',
  },
  noteDelete: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2980B9',
    padding: 9,
    top: 10,
    bottom: 10,
    right: 10,
  },
  noteDeleteText: {
    color: 'white',
  },
});

export default Note;
