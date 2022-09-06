import React from 'react';
import '../../App.css';
// @ts-ignore
import photo from '../../images/logo.jpg'
import Profile from '../Profile';

export default function Header(): JSX.Element {
    return (
        <>
            <Profile name="John Doe" photo={photo}></Profile>
        </>
    )
}