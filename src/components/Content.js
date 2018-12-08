import React from 'react';
import Map from './Map';
import Lists from './Lists';

class Content extends React.Component {
    render() {
        return (
            <div className="contentInContent">
                <Lists />
                <Map />
            </div>
        )
    }
}

export default Content;