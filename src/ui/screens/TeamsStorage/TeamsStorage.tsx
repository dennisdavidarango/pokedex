import React, { useEffect, useState } from 'react'
import { IAllTeamsData, IData, ITeamsStorageProps } from './types';
import { Dispatch } from 'redux'
import Segues from '../../../res/constants/segues';
import { connect } from 'react-redux';
import { IAppState } from '../../../sot/IAppState';
import { getMainGeneration, getRegions } from '../../../sot/Regions/actions';
import { SafeAreaView } from 'react-native-safe-area-context';
import {child, push, ref, onValue} from 'firebase/database'
import TeamsStorageStyles from './styles';
import { db } from '../../../../config';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import LocationStyles from '../Locations/styles';
import Size from '../../../res/constants/sizes';
import Color from '../../../res/constants/colors';


const TeamsStorage = (props: ITeamsStorageProps) => {
    const {navigation} = props

    const {TEAMS_DETAILS} = Segues.Main

    const [allData, setAllData] = useState<Array<IData>>([])

    useEffect(() => {
      const startCountRef = ref(db, 'teams/')
      onValue(startCountRef, (snapshot) => {
        const data = snapshot.val()
        setAllData(data)
      })
    }, [])

    console.log(allData);
    

    return(
        <SafeAreaView style={TeamsStorageStyles.container}>
          <View style={{
            marginBottom: 20,
          }}>
            <Text style={{
              fontSize: Size.HEADER,
              fontWeight: 'bold',
              textAlign: 'center'
            }}>
                  Pokemons Teams
            </Text>
            <Text style={{
              fontSize: Size.SUBHEADER,
              fontWeight: '100',
              textAlign: 'center'
              }}>
                Select a pokemon team
            </Text>

          </View>

          {Object.values(allData).map((item)=>
          
          <TouchableOpacity
          key={item.teamName}
          onPress={()=> navigation.navigate(TEAMS_DETAILS, {
            teamName: item.teamName,
            pokemons: item.pokemons,
          })}
          style={{
           backgroundColor: Color.SELECT_INPUT,
           marginBottom: 10,
           padding: 20,
           borderRadius: 10
          }} >
           <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
            
           }}>
            <Text style= {{
              color: Color.WHITE
            }}>{item.teamName} </Text>
            <Text style={{
               color: Color.WHITE,
               fontSize: 10,
            }}>
              {item.pokemons.length}
            </Text>

           </View>
          </TouchableOpacity>
      
      
      
      
      )}



      </SafeAreaView>
    ) 
}

export default TeamsStorage