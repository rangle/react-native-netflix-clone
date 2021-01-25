import React from 'react';
import {
  GestureResponderEvent,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {slateGray} from '../styles/colors';

interface Props {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  link?: boolean;
  disabled?: boolean;
}

const Button = ({title, onPress, link = false, disabled = false}: Props) => {
  const formattedTitle =
    Platform.OS === 'android' ? title.toUpperCase() : title;

  const buttonStyles = link ? styles.buttonLink : styles.button;
  const textStyles = link ? styles.textLink : styles.text;

  return (
    <TouchableHighlight
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      underlayColor={link ? 'transparent' : slateGray}>
      <View style={buttonStyles}>
        <Text style={textStyles}>{formattedTitle}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    borderRadius: Platform.OS === 'ios' ? 3 : 0,
    minWidth: 100,
  },
  text: {
    textAlign: 'center',
    margin: 8,
  },
  buttonLink: {
    minWidth: 100,
  },
  textLink: {
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
    margin: 8,
  },
});

export default Button;
