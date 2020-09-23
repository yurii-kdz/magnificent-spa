import React from 'react';
import {SvgIcon} from '@material-ui/core';

const Image = () => {
    return (
        <div>
            <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                    fill="transparent"
                    d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                    stroke="#2C5282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    fill="transparent"
                    d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z"
                    stroke="#2C5282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path fill="transparent" d="M21 15L16 10L5 21" stroke="#2C5282" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </SvgIcon>
        </div>
    );
};

export default Image;