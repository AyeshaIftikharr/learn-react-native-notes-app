import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import * as theme from '../styles/theme';

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
    borderBottomColor: theme.BORDER,
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: theme.PRIMARY,
  },
  noteDelete: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.BUTTON,
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