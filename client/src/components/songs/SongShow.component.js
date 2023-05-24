import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSong } from '../../actions/index';

const SongShow = ({ fetchSong, match, song }) => {
    useEffect(() => {
        fetchSong(match.params.id);
    }, [fetchSong, match.params.id]);

    if (!song) {
        return <div>Loading...</div>;
    }

    const { title, description } = song;

    return (
        <div>
            <h1>{title}</h1>
            <h5>{description}</h5>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return { song: state.songs[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchSong })(SongShow);
