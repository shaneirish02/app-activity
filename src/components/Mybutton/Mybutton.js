import React from 'react';
import { Button } from 'react-native-paper';

const MyButton = ({ text, action, mode = "contained", size = "medium" }) => {
    let style = null;

    switch(size) {
        case 'small':
            style = { height: 50 };
            break;
        case 'medium':
            style = { height: 60 };
            break;
        case 'large':
            style = { height: 70 };
            break;
        default:
            style = { height: 60 };
            break;
    }

    return (
        <Button contentStyle={style} mode={mode} onPress={action}>
            {text} {}
        </Button>
    );
};

export default MyButton;
