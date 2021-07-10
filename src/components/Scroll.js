import React from 'react';

const Scroll = (props) =>{
    return(
        
        <div style = {{ overflowY: 'scroll',border: '3px', height: '735px'}}>
            {props.children}
        </div>
    );
};
export default Scroll;
