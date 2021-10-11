import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import React, {useEffect, useState} from 'react';

import { COLORS } from '../../constants/theme.js';
import { Complaint } from '../../entities/Complaint.js';
import { ComplaintCard } from './components/ComplaintCard/indext';
import { CustomHeader } from '../../components/CustomHeader';
import { FAB } from 'react-native-elements';

export function Home() {

  const [complaints, setComplaints] = useState<Complaint[]>([]);   

  function renderProduct({complaintItem} : {complaintItem: ListRenderItemInfo<Complaint>}) {
    return (
      <ComplaintCard key={complaintItem.index} complaint={complaintItem.item}/>
    );
  }
   
  useEffect(() => {
    setComplaints([
        {
          id: '1',
          description: 'Buraco na Av. Exemplo',
          originalPosterImageUris: [
              'https://s2.glbimg.com/BXoCVbSSUMqwk8SrldbMK3pYYbg=/0x0:1280x960/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/1/p/JbO1BoTCu5FmmTAWCQvA/cratera-joao-pessoa-bayeux.jpg',
              'https://s2.glbimg.com/BXoCVbSSUMqwk8SrldbMK3pYYbg=/0x0:1280x960/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/1/p/JbO1BoTCu5FmmTAWCQvA/cratera-joao-pessoa-bayeux.jpg'
          ],
          likeAmount: 53,
          currentUserLikedIt: true,
          responsibleUser: {
              id: '613sd9975ff5rt82d8c87e0a',
              name: 'Fulano',
          },
          coordinates:{
            latitude: -14.7892,
            longitude:  -39.2778,
          },
          createdAt: "2021-09-10T23:26:15.357Z",
          updatedAt: "2021-09-10T23:26:15.357Z",   
        },
        {
          id: '2',
          description: 'Árvore caída na Rua de Teste',
          originalPosterImageUris: [
              'http://rbnarede.com.br/wp-content/uploads/2014/09/2014-09-03-07.01.55.jpg',
          ],
          likeAmount: 23,
          currentUserLikedIt: false,
          responsibleUser: {
              id: '613be9975ff55782d8c87e0a',
              name: 'Ciclano',
          },
          coordinates:{
            latitude: -14.7892,
            longitude:  -39.2778,
          },
          createdAt: "2021-09-10T23:26:15.357Z",
          updatedAt: "2021-09-10T23:26:15.357Z",   
        },
        {
          id: '3',
          description: 'Pouca iluminação na Rua Modelo',
          originalPosterImageUris: [
              'https://i.ytimg.com/vi/2l3jkMR3JGU/maxresdefault.jpg',
          ],
          likeAmount: 10,
          currentUserLikedIt: false,
          responsibleUser: {
              id: '613be9975ff55782d8c87e0a',
              name: 'Ciclano',
          },
          coordinates:{
            latitude: -14.7892,
            longitude:  -39.2778,
          },
          createdAt: "2021-09-10T23:26:15.357Z",
          updatedAt: "2021-09-10T23:26:15.357Z",   
        },       
        {
          id: '4',
          description: 'Buraco na Av. Exemplo',
          originalPosterImageUris: [
              'https://s2.glbimg.com/BXoCVbSSUMqwk8SrldbMK3pYYbg=/0x0:1280x960/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/1/p/JbO1BoTCu5FmmTAWCQvA/cratera-joao-pessoa-bayeux.jpg',
              'https://s2.glbimg.com/BXoCVbSSUMqwk8SrldbMK3pYYbg=/0x0:1280x960/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/1/p/JbO1BoTCu5FmmTAWCQvA/cratera-joao-pessoa-bayeux.jpg'
          ],
          likeAmount: 53,
          currentUserLikedIt: false,
          responsibleUser: {
              id: '613sd9975ff5rt82d8c87e0a',
              name: 'Fulano',
          },
          coordinates:{
            latitude: -14.7892,
            longitude:  -39.2778,
          },
          createdAt: "2021-09-10T23:26:15.357Z",
          updatedAt: "2021-09-10T23:26:15.357Z",   
        },
        {
          id: '5',
          description: 'Árvore caída na Rua de Teste',
          originalPosterImageUris: [
              'http://rbnarede.com.br/wp-content/uploads/2014/09/2014-09-03-07.01.55.jpg',
          ],
          likeAmount: 23,
          currentUserLikedIt: false,
          responsibleUser: {
              id: '613be9975ff55782d8c87e0a',
              name: 'Ciclano',
          },
          coordinates:{
            latitude: -14.7892,
            longitude:  -39.2778,
          },
          createdAt: "2021-09-10T23:26:15.357Z",
          updatedAt: "2021-09-10T23:26:15.357Z",   
        },
        {
          id: '6',
          description: 'Pouca iluminação na Rua Modelo',
          originalPosterImageUris: [
              'https://i.ytimg.com/vi/2l3jkMR3JGU/maxresdefault.jpg',
          ],
          likeAmount: 10,
          currentUserLikedIt: true,
          responsibleUser: {
              id: '613be9975ff55782d8c87e0a',
              name: 'Ciclano',
          },
          coordinates:{
            latitude: -14.7892,
            longitude:  -39.2778,
          },
          createdAt: "2021-09-10T23:26:15.357Z",
          updatedAt: "2021-09-10T23:26:15.357Z",   
        },       
      ])
    
}, [])
  
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <CustomHeader leftIconButtonType={'MENU'}/>
        <FlatList
          contentContainerStyle={styles.complaintListContainer}
          data={complaints}
          renderItem={(complaintItem) => renderProduct({complaintItem})}
        />
      </View>
      <FAB 
      icon={{ name: 'add', color: 'white' }}
       color={COLORS.primary}
        style={{ position: 'absolute', bottom: 30, right: 30 }} />
    </View>

  );
}

const styles = StyleSheet.create({
  complaintListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 10,
    marginHorizontal: 20,
  },
});
