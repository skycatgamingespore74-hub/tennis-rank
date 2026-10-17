// mobile/ProfileScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProfileScreen(){
  const profile = JSON.parse(global?.localStorage?.getItem?.('tr_profile')||'null');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil</Text>
      <Text style={styles.name}>{(profile && (profile.pseudo||profile.fullname))||'Joueur'}</Text>
      <Text style={styles.meta}>{(profile && profile.email)||''}</Text>
    </View>
  );
}

const styles=StyleSheet.create({container:{flex:1,padding:18,backgroundColor:'#07111f'},title:{fontSize:20,color:'#edf4ff',fontWeight:'900'},name:{color:'#edf4ff',marginTop:8,fontSize:18},meta:{color:'#b6c5e2',marginTop:6}});
