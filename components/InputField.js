import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const InputField = ({ placeholder, value, onChangeText, multiline = false, numberOfLines = 1, keyboardType = 'default' }) => {
  return (
    <TextInput
      style={[styles.input, multiline && styles.textArea]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      multiline={multiline}
      numberOfLines={numberOfLines}
      keyboardType={keyboardType}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#90A4AE',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default InputField;



