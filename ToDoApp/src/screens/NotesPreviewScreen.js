import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Note from '../components/Note';
import * as theme from '../styles/theme';

const NotesPreviewScreen = () => {
  const [noteArray, setNoteArray] = useState([]);
  const [noteText, setNoteText] = useState('');

  const onAddNote = () => {
    if (noteText) {
      const date = new Date();
      const newNote = {
        date: `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`,
        note: noteText,
      };
      setNoteArray(prevArray => [...prevArray, newNote]);
      setNoteText('');
    }
  };

  const onDeleteNote = index => {
    setNoteArray(noteArray.filter((note, indx) => indx !== index));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>- Noter -</Text>
      </View>
      <ScrollView styles={styles.scrollContainer}>
        {noteArray.map((item, index) => (
          <Note
            key={index}
            keyValue={index}
            onDeleteNote={() => onDeleteNote(index)}
            value={item}
          />
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setNoteText}
          value={noteText}
          placeholder=">note"
          placeholderTextColor="white"
          underlineColorAndroid="transparent "
        />
      </View>
      <TouchableOpacity onPress={onAddNote} style={styles.addButton}>
        <Text style={styles.addButtonText}>+ </Text>
      </TouchableOpacity>
    </View>
  );
};

NotesPreviewScreen.navigationOptions = {
  header: null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: theme.PRIMARY_DARK,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 26,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    alignSelf: 'stretch',
    color: theme.TEXT,
    padding: 20,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#EDEDED',
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: theme.PRIMARY,
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  addButtonText: {
    color: theme.TEXT,
    fontSize: 24,
  },
});

export default NotesPreviewScreen;
