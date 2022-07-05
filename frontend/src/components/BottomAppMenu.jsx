import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import styles from './BottomAppMenu.module.css';

export default function BottomAppMenu() {
   return (
      <div className={styles.container} styles={{ position: 'relative' }}>
         <AppBar position={'fixed'} sx={{ top: 'auto', bottom: 0 }} className={styles.appBar}>
            <Toolbar>
               <Button className={styles.button} color="inherit">Home</Button>
               <Button className={styles.button} color="inherit">By locations</Button>
               <Button className={styles.button} color="inherit">All Routes</Button>
               <Button className={styles.button} color="inherit">Settings</Button>
            </Toolbar>
         </AppBar>
      </div>
   );
}
