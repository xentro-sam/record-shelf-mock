import * as React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div>
      <header id='header'>
        <div id="header-title">
        My <span>Record</span> Shelf
        </div>
      </header>
      <div id="page-info">
        <div>
          <div>
            :&#40;&#40;
          </div>
          <div>
            seems a bit empty in here...
          </div>
          <div id='sync-button'>sync</div>
        </div>
      </div>
    </div>
  );
}
