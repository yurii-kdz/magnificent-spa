import React from 'react';
import {SvgIcon} from '@material-ui/core';

const ArrowUp = (props) => {
    return (
        <SvgIcon {...props} >
            <path fill="transparent" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#9AE6B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill="transparent" d="M16 12L12 8L8 12" stroke="#9AE6B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path fill="transparent" d="M12 16V8" stroke="#9AE6B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </SvgIcon>

    );
};

export default ArrowUp;


