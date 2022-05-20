import React from 'react';

const ProgressBar = (props) => {
    const { bgcolor, completed, language } = props;

    const containerStyles = {
        height: 23,
        backgroundColor: '#302C40',
        borderRadius: '999px',
        margin: '26px 0',
    };

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: '999px',
        textAlign: 'right',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'all .8s ease-in-out',
    };

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontsize: '12px',
        marginRight: '4px',
    };

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={{ marginLeft: '14px', fontsize: '12px' }}>{`${language}`}</span>
                {/* <span style={labelStyles}>{`${completed}%`}</span> */}
            </div>
        </div>
    );
};

export default ProgressBar;
