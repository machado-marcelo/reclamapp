import {Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import React, { useState } from 'react';

import { COLORS } from '../../../../constants';
import { Complaint } from '../../../../entities/Complaint';
import { Icon } from 'react-native-elements';
import { User } from '../../../../entities/User';
import { useNavigation } from '@react-navigation/native';

export function ComplaintCard({complaint} : {complaint: Complaint}) {

  const navigation = useNavigation() as any;


  const LikeBox = ({likeAmount, currentUserLikedIt} : {likeAmount: number, currentUserLikedIt: boolean}) => {

    const [userLikedIt, setUserLikedIt] = useState(currentUserLikedIt);
    
    return (
      <View style={ {flexDirection: 'row', alignItems: 'center'}}>
        <Icon
          onPress={() => setUserLikedIt(!userLikedIt)}
          size={20}
          name={userLikedIt ? 'thumbs-up' : 'thumbs-o-up'}
          type='font-awesome' 
        />   
        <Text
           style={{ marginLeft: 5 }}         
        >{userLikedIt ? likeAmount+1 : likeAmount}</Text>   
      </View>
    );
  }

  const InfoBox = (
    {
      description,
      responsibleUser,
      date,
      time
    } : {
      description: string,
      responsibleUser: User,
      date: string,
      time: string,
    }) => {

    return (
      <View style={ {flex: 1}}>
          <Text
            onPress={() => navigation.navigate('ComplaintDetails', {complaint})} style={styles.title}
          >
            {description}            
          </Text>
          <View style={ {flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.userName}>{responsibleUser?.name}</Text>
            <Text style={styles.stats}>{` em ${date}`}</Text>
            <Icon
              style={{ marginHorizontal: 5 }} 
              color={COLORS.gray}
              size={10}
              name='clock-o'
              type='font-awesome' 
            /> 
            <Text style={styles.stats}>{time}</Text>
          </View>        
      </View>
    );

  }

  const { description, responsibleUser, likeAmount, originalPosterImageUris, currentUserLikedIt} = complaint;

  const createdAt = new Date(complaint.createdAt)
  return (
    <View>
        <View style={ {flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <InfoBox
             description={description}
             responsibleUser={responsibleUser}
             date={`${createdAt.toLocaleDateString()}`}
             time={`${createdAt.getHours()}:${createdAt.getMinutes()}`}
          />   
          <LikeBox likeAmount={likeAmount} currentUserLikedIt={currentUserLikedIt}/>   
        </View>
       <TouchableWithoutFeedback
         onPress={() => navigation.navigate('ComplaintDetails', {complaint})}
       >
        <Image
          style={styles.thumb}
          source={{ uri: originalPosterImageUris[0] }}
        />
    </TouchableWithoutFeedback>

    </View>
   
  );
}

const styles = StyleSheet.create({
  thumb: {
    height: 120,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    width: '100%',
    marginTop: 5,
    marginBottom: 20,
  },
  headerRow: {
    padding: 0,
  },
  title: {
    color: COLORS.primary,
    fontSize: 15,
    fontWeight: 'bold',
  },
  userName: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: 'bold',
  },
  stats: {
    color: COLORS.gray,
    fontSize: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
});