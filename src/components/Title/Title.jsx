import React from 'react';
import './title.css';

function Title(props) {
    return (
        <div className="row row-spacer">
            <div className="col-md-12" style={{padding: 0}}>
                <div className="titlebar col-align">                
                    <h1>Flashcards</h1>
                </div>
            </div>
        </div>
    );
}

export default Title;
