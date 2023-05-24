import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSongs } from '../../actions/index';

const SongList = ({ fetchSongs, songs }) => {
    useEffect(() => {
        fetchSongs();
    }, [fetchSongs]);

    const renderAdmin = (song) => {
        return (
            <div className="right floated content">
                <Link to={`/songs/edit/${song.id}`} className="ui button primary">Edit</Link>
                <Link to={`/songs/delete/${song.id}`} className="ui button negative">Delete</Link>
            </div>
        );
    };

    const renderList = () => {
        return songs.map(song => {
            return (
                <div className="item" key={song.id}>
                    {renderAdmin(song)}
                    <i className="large middle aligned icon music" />
                    <div className="content">
                        <Link className="header" to={`/songs/${song.id}`}>{song.title}</Link>
                        <div className="description">{song.description}</div>
                    </div>
                </div>
            );
        });
    };

    const renderCreate = () => {
        return (
            <div>
                <Link to="/songs/new" className="ui button primary right floated column">Create Song</Link>
            </div>
        );
    };

    return (
        <React.Fragment>
            <div className="ui grid">
                <div className="four column row">
                    <h2 className="left floated column">Songs</h2>
                    {renderCreate()}
                </div>
            </div>

            <div className="ui celled list">{renderList()}</div>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return { songs: Object.values(state.songs) };
};

export default connect(mapStateToProps, { fetchSongs })(SongList);
