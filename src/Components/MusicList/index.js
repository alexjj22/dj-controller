/**
 * Created by Александр on 25.12.2017.
 */
import React, { PureComponent } from 'react';

export default class MusicList extends PureComponent {
    render(){
        const {
            musicList,
            onDelete,
            playlistId
         } = this.props;

        if ( musicList.length === 0 ) return null;

        return (
            <div className="music-list">
                <h4>{ `playlist ${playlistId}` }</h4>
                <ol className="music-list">
                    {
                        musicList.map( ({name}) => {
                            return (
                                <li key={ name }>
                                    { name }
                                    <i
                                        className="fa fa-trash"
                                        onClick={ () => onDelete(name) }
                                        aria-hidden="true"/>
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
        )
    }
}