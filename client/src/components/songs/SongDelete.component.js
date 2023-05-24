import React, { useEffect } from 'react';
import Modal from '../Modal.component';
import history from '../../history';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchSong, deleteSong } from '../../actions/index';

const SongDelete = ({ fetchSong, deleteSong, match, song }) => {
    useEffect(() => {
        fetchSong(match.params.id);
    }, [fetchSong, match.params.id]);

    const renderActions = () => {
        const { id } = match.params;
        return (
            <React.Fragment>
                <button
                    onClick={() => deleteSong(id)}
                    className="ui negative button"
                >
                    Delete
                </button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        )
    }

    const renderContent = () => {
        if (!song) {
            return "Are you sure you want to delete this song?"
        }

        return `Are you sure you want to delete the song with title: ${song.title}`
    }

    return (
        <Modal
            title="Delete Song"
            content={renderContent()}
            actions={renderActions()}
            onDismiss={() => history.push('/')}
        />
    );
}

const mapStateToProps = (state, ownProps) => {
    return { song: state.songs[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchSong, deleteSong })(SongDelete);
