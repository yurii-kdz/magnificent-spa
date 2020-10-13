import React from 'react';
import {SvgIcon} from '@material-ui/core';

const Zap = (props) => {
    return (
        <SvgIcon {...props}>
            <path fill="transparent" d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#2C5282" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </SvgIcon>
    );
};

export default Zap;