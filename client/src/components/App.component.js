
/** @jsxRuntime classic */
/** @jsx jsx */
import { Router, Route, Switch } from 'react-router-dom';
import SongList from './songs/SongList.component';
import SongCreate from './songs/SongCreate.component';
import SongEdit from './songs/SongEdit.component';
import SongDelete from './songs/SongDelete.component';
import SongShow from './songs/SongShow.component';
import Header from './Header.component';
import NotFound from './NotFound.component';
import { css, jsx } from '@emotion/react';

import history from '../history';

const containerStyle = css`
  margin: 0 auto;
  max-width: 960px;
  padding: 40px;
  border: 1px solid white;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
`;
const App = () => {
    return (
        <div css={containerStyle} >
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={SongList} />
                        <Route path="/songs/new" exact component={SongCreate} />
                        <Route path="/songs/edit/:id" exact component={SongEdit} />
                        <Route path="/songs/delete/:id" exact component={SongDelete} />
                        <Route path="/songs/:id" exact component={SongShow} />
                        <Route path="**" exact component={NotFound} />
                    </Switch>
                </div>
            </Router>
        </div >
    );
};

export default App;