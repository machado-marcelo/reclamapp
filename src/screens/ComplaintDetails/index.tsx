import { COLORS, SIZES } from '../../constants/theme.js';
import { Image, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { CustomHeader } from '../../components/CustomHeader';
import React from 'react';

export function ComplaintDetails({route} : {route: Readonly<{params: any}>}): JSX.Element {  

  const complaint = route.params.complaint;

  const ComplaintPhotoGrid = () => {    

    return (
      <View
        style={{
          flexDirection: 'row',
          height: 180,
          margin: 20,
        }}
      >
     
        <Image
          style={{
            width: '70%',
            marginRight: 4,
          }}
          source={{ uri: complaint.originalPosterImageUris[0] }}
        />
        <View
          style={{
            flexDirection: 'column',
            marginLeft: 4,
            flex: 1,
          }}
        >
            <Image
              style={{
                flex: 1,
                backgroundColor: 'green',
                marginBottom: 4,
              }}
              source={{ uri: complaint.originalPosterImageUris[1] }}
            />
            <View
              style={{
                flex: 1,
                marginTop: 4,
                backgroundColor: 'black',
              }}
            />
        </View>         
      </View>
    );
      
  }

  

  return (
      <View>
        <CustomHeader/>
        <View>
        <Text style={styles.title}>{complaint.description}</Text>

        <MapView
          initialRegion={{
            ...complaint.coordinates,
            latitudeDelta: 0.0,
            longitudeDelta: 0.0,
          }}
            style={styles.map}        
        >   
          <Marker
            coordinate={complaint.coordinates}
            title={"Local da Reclamação"}
            description={complaint.description}
         />
        </MapView>

        </View>
        <ComplaintPhotoGrid/>
      </View>     
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: SIZES.width,
      height: 200,
    },
    title: {
        color: COLORS.primary,
        marginHorizontal: 20,
        marginVertical: 10,
        fontSize: 20,
        fontWeight: 'bold',
      },
  });