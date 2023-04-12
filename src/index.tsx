import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

const dialogsData: DialogType[] = [
    { id: 1, name: 'William' },
    { id: 2, name: 'Emma' },
    { id: 3, name: 'James' },
    { id: 4, name: 'Addison' },
    { id: 5, name: 'Ethan' },
    { id: 6, name: 'Hailey' },
];

const messagesData: MessageType[] = [
    {
        id: 1,
        message: 'Hey, any advice for someone starting to learn programming?'
    },
    {
        id: 2,
        message: 'Sure! Start with a beginner-friendly language like JavaScript, and practice coding every day.'
    },
    {
        id: 3,
        message: 'Got it. Any specific resources you recommend?'
    },
    {
        id: 4,
        message: 'Codecademy and Udemy have great courses, and there are tons of coding blogs and YouTube tutorials out there too.'
    },
];

const postsData: PostType[] = [
    {
        id: 1,
        message: 'Have fun creating amazing things!',
        likesCount: 3
    },
    {
        id: 2,
        message: 'JavaScript powers modern web development.',
        likesCount: 5
    },
];


ReactDOM.render(
    <App dialogsData={ dialogsData } messagesData={ messagesData }
         postsData={ postsData } />,
    document.getElementById('root')
);