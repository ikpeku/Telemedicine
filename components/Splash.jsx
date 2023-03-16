
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../styles/Style';

export default function Splash({children}) {
  return (
    <LinearGradient
    start={{ x: 0, y: 0 }}
    end={{x: 1, y: 1 }}
    locations={[0, 0.10]}
        colors={['#0152A8', '#086CDA']}
        style={styles.splash}>
            {children}
       
      </LinearGradient>
  )

}