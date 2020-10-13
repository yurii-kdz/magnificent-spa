import React from 'react';
import {SvgIcon} from '@material-ui/core';

const PenToolWhite = (props) => {
    return (
        <SvgIcon {...props} >
            <path d="M10 15.8333L15.8333 10L18.3333 12.5L12.5 18.3333L10 15.8333Z" stroke="#FFFCFE" strokeLinecap="round" strokeLinejoin="round"/>
            <path fill="transparent" d="M15 10.8334L13.75 4.58335L1.66666 1.66669L4.58332 13.75L10.8333 15L15 10.8334Z" stroke="#FFFCFE" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.66666 1.66669L7.98832 7.98835" stroke="#FFFCFE" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.16667 10.8333C10.0871 10.8333 10.8333 10.0871 10.8333 9.16667C10.8333 8.24619 10.0871 7.5 9.16667 7.5C8.24619 7.5 7.5 8.24619 7.5 9.16667C7.5 10.0871 8.24619 10.8333 9.16667 10.8333Z" stroke="#FFFCFE" stroke-linecap="round" stroke-linejoin="round"/>
        </SvgIcon>
    );
};

export default PenToolWhite;