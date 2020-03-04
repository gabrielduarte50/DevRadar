import React, { useState, useEffect } from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync
} from "expo-location";

function Main() {
  const [currentRegion, setCurrentRegion] = useState(null); //criadno estado para armazenar os dados
  useEffect(() => {
    //carrega uma vez igual em react
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();
      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true // desenvolvendo a parte que analise a posiçao da pessoa e usando GPS do proprio celular
        });
        const { latitude, longitude } = coords;
        setCurrentRegion({
          // aqui pegamos dados para se ter o zoom
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04
        });
      }
    }
    loadInitialPosition();
  }, []);
  if (!currentRegion) {
    return null;
  }
  return (
    <MapView initialRegion={currentRegion} style={styles.map}>
      <Marker coordinate={{ latitude: -19.8509563, longitude: -44.0338352 }}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://avatars3.githubusercontent.com/u/51796050?s=460&v=4"
          }}
        />
        <Callout>
          <View style={styles.callout}>
            <Text style={styles.devName}>Gabriel Durate</Text>
            <Text style={styles.devBio}> kkkkkkkkkkkkkkkkkkkk</Text>
            <Text style={styles.devTechs}>NoDEjs,ReactJS</Text>
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
} //duas chaves passam obj em javascript
const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: "#FFF"
  }
});
export default Main;
