import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

interface IconProps {
  source:
    | 'ionIoniconsicons'
    | 'MaterialCommunityIcons'
    | 'EvilIcons'
    | 'Entypo'
    | 'MaterialIcons'
    | 'Feather'
    | 'SimpleLineIcons'
    | 'Foundation'
    | 'AntDesign'
    | 'Fontisto'
    | 'FontAwesome'
    | 'FontAwesome5';

  name: string;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ source, ...otherProps }) => {
  switch (source) {
    case 'ionIoniconsicons':
      return <Ionicons {...otherProps} />;
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons {...otherProps} />;
    case 'EvilIcons':
      return <EvilIcons {...otherProps} />;
    case 'Entypo':
      return <Entypo {...otherProps} />;
    case 'MaterialIcons':
      return <MaterialIcons {...otherProps} />;
    case 'Feather':
      return <Feather {...otherProps} />;
    case 'SimpleLineIcons':
      return <SimpleLineIcons {...otherProps} />;
    case 'Foundation':
      return <Foundation {...otherProps} />;
    case 'AntDesign':
      return <AntDesign {...otherProps} />;
    case 'Fontisto':
      return <Fontisto {...otherProps} />;
    case 'FontAwesome':
      return <FontAwesome {...otherProps} />;
    case 'FontAwesome5':
    default:
      return <FontAwesome5 {...otherProps} />;
  }
};

export default Icon;
