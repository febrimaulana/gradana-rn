import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export {wp, hp};

export const ImageOptions = {
  mediaType: 'photo',
  includeBase64: true,
  saveToPhotos: false,
  quality: 0.9,
  maxWidth: 600,
  maxHeight: 600,
};
