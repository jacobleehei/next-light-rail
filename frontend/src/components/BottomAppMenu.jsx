import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import styles from './BottomAppMenu.module.css';

export default function BottomAppMenu({ setPage }) {
   const pageButtons = [
      { title: 'Home', onClick: () => setPage(0) },
      { title: 'By Locations', onClick: () => setPage(1) },
      { title: 'All Routes', onClick: () => setPage(2) },
      { title: 'Settings', onClick: () => setPage(3) },
   ]
   const renderPageButtons = () => pageButtons.map((b, id) => (
      <Button
         key={id}
         className={styles.button} color="inherit"
         onClick={b.onClick}
      >
         {b.title}
      </Button>
   ))

   return (
      <div className={styles.container} styles={{ position: 'relative' }}>
         <AppBar position={'fixed'} sx={{ top: 'auto', bottom: 0, background: '#222' }} className={styles.appBar}>
            <Toolbar>
               {renderPageButtons()}
            </Toolbar>
         </AppBar>
      </div>
   );
}
