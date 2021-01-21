import React from 'react';
import music from '../../assets/music/Super Mario.mp3';
import './MusicPlayer.css';

export const MusicPlayer = () => (
  <div className='music playeroff'>
            <audio controls>
              <source src={music} type="audio/mpeg" />
            </audio>
          </div>
)