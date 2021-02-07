import {Alert, ToastAndroid} from 'react-native';

export const dialog = {
  notification: (message) => {
    return new Promise((resolve) => {
      Alert.alert('', message, [
        {
          text: 'OK',
          onPress: () => resolve(true),
        },
      ]);
    });
  },

  toast: (message, long = false) => {
    return ToastAndroid.show(
      `${message}`,
      long ? ToastAndroid.LONG : ToastAndroid.SHORT,
    );
  },
};

export const normalizeType = (type) => {
  if (type === 'movie') return 'Filme';
  else if (type === 'series') return 'Série';
  else if (type === 'game') return 'Jogo';
  else return type;
};
