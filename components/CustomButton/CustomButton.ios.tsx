import React from 'react';
import { Pressable, Text } from 'react-native';

interface CustomButtonProps {
  onPress: () => void;
  title: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onPress, title }) => {
  return (
    <Pressable onPress={onPress} style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'light-blue',
        borderRadius: 20,
        padding: 10
    }}>
        <Text style={{color: "purple", fontSize: 18}}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;
