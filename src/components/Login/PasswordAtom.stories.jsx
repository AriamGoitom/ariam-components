import PasswordAtom from "./PasswordAtom.jsx";
import {action} from "@storybook/addon-actions";

export default {
    title:'Chatty/Login/PasswordAtom.',
    component: PasswordAtom,
}

export const Default = {
    args: {
        onPasswordChange: action('password-changed'), // Log the 'user-changed' event
    },
};


export const WithInitialValue = {
    args: {
        onPasswordChange: action('password-changed'),
    },
};


export const MissingOnChange = {
    args: {
    },
};