import React from 'react'
import { useSelector } from 'react-redux'
import Details from './Details';

const PlayVideo = () => {
    const state = useSelector(({ data }) => data.files);

    return (
        <div>
            <div>
                <Details />
            </div>
        </div>
    )
};

export default PlayVideo;