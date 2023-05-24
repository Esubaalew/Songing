import React from "react";
import { connect } from 'react-redux';
import { songCreate } from '../../actions/index';

import SongForm from './SongForm.component';

const SongCreate = ({ songCreate }) => {
    const onSubmit = (formValues) => {
        songCreate(formValues);
    }

    return (
        <div>
            <h3>Create a song</h3>
            <SongForm onSubmit={onSubmit} />
        </div>
    );
}

export default connect(null, { songCreate })(SongCreate);
