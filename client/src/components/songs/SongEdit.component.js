import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchSong, editSong } from '../../actions/index';
import SongForm from './SongForm.component';

const SongEdit = ({ fetchSong, editSong, match, song }) => {
    useEffect(() => {
        fetchSong(match.params.id);
    }, [fetchSong, match.params.id]);

    const onSubmit = (formValues) => {
        editSong(match.params.id, formValues);
    }

    if (!song) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h3>Edit a song</h3>
            <SongForm
                initialValues={{ title: song.title, description: song.description }}
                onSubmit={onSubmit}
            />
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return { song: state.songs[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchSong, editSong })(SongEdit);
