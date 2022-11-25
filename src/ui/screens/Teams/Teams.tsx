import React, { useEffect, useState } from 'react'
import { FlatList, Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux';
import { IAppState } from '../../../sot/IAppState';
import { Dispatch } from 'redux';
import { ITeamsProps } from './types';
import { getPokemonsByRegion, resetState } from '../../../sot/Regions/actions';
import TeamsStyles from './styles';
import Color from '../../../res/constants/colors';
import { PokemonItem } from './PokemonsItem';
import { PokemonNotice } from './PokemonNotice';
import { IPokemonSpecies } from '../../../sot/Regions/types';
import { createTeam } from '../../../sot/Teams/actions';
import Segues from '../../../res/constants/segues';
import {child, push, ref, set} from 'firebase/database'
import { db } from '../../../../config';

const Teams = (props: ITeamsProps) => {
  const {actions, pokemons, id, navigation} = props
  const {TEAMS_STORE} = Segues.Main 

  const [selectedPokemonsMap, setselectedPokemonsMap] = useState(pokemons)
  const [noticeMessage, setNoticeMessage] = useState('')
  const [isNoticeVisible, setIsNoticeVisible] = useState(false)
  const [teamName, setTeamName] = useState('')
  

function createTeam() {

  try{
    const newKey = push(child(ref(db), 'teams')).key
    set(ref(db, 'teams/' + newKey), {
      pokemons: selectedPokemonsMap.map(pokemon => pokemon.name),
      id: newKey,
      teamName: teamName
    }).then(()=> {
      console.log('data updated');
    }).catch((err)=> {
      console.log(err);
    })
    setselectedPokemonsMap([])
    setIsNoticeVisible(true)
    setTimeout(() => {
      setIsNoticeVisible(false)
    }, 3000);
    setNoticeMessage(
      'Teams has been created',
    )
  }catch(er){
    console.log(er);
  }
}

  useEffect(() => {
   actions.getPokemonsByRegion(id)
  }, [])

  const backIcon = 'data:image/png;base64,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'
  
    return(
      <SafeAreaView style={TeamsStyles.container}>
         <PokemonNotice
          message={noticeMessage}
          isVisible={isNoticeVisible}
          setModalVisible={setIsNoticeVisible}
        />
        <View>
          <View style={TeamsStyles.headerContainer}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <TouchableOpacity onPress={() => {
                setselectedPokemonsMap([])
                actions.resetState()
                navigation.goBack()
              }}>
                <Image source={{uri: backIcon, height: 40, width: 40}}/>
              </TouchableOpacity>
              <Text style={TeamsStyles.headerText}>Pokedex</Text>
            </View>
            <TouchableOpacity 
              onPress={() => {
                navigation.navigate(TEAMS_STORE)
              } }
              style={{
                marginEnd: 20,
                backgroundColor: Color.GREY_DARK,
                padding: 10,
                borderRadius: 10,
                shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              }}
            >
              <Text style={{
                color: Color.WHITE
              }}>Teams</Text>
            </TouchableOpacity>
          </View>
          <View style={{
            alignSelf: 'center'
          }}>
            <Text style={TeamsStyles.subHeaderText}>Select a between 3 or 6 pokemon</Text>
            <TextInput value={teamName} onChangeText={(teamName)=> {setTeamName(teamName)}} placeholder='Team Name' style={{
              borderWidth: 1,
              borderColor: Color.PRIMARY_BUTTON,
              borderRadius: 10,
              marginBottom: 20,
              padding: 6
            }} /> 



          </View>
          {teamName ? (
          <TouchableOpacity
           onPress={
            createTeam
           }
           disabled={selectedPokemonsMap.length > 6 || selectedPokemonsMap.length < 3  ? true : false}
           style={{
            alignSelf: 'center',
            backgroundColor: Color.PRIMARY_BUTTON,
            padding: 20,
            marginBottom: 30,
            borderRadius: 60,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
            
          }}>
            <Text style={TeamsStyles.createTeamButtom}>Create Team</Text>
          </TouchableOpacity>

          ) : null}
        </View>
        <ScrollView>

       {pokemons.map(
          pokemon => (

            <PokemonItem 
            key={pokemon.name}
            pokemon={pokemon}
            selected={
              selectedPokemonsMap.find(
                pokemonItem => pokemonItem.name === pokemon.name
              )
              ? false : true
            }
            onPress={() =>  {
              let findValue = selectedPokemonsMap.find(
               pokemonItem => pokemonItem.name === pokemon.name
              )
 
              if (selectedPokemonsMap.length <= 3 && findValue) {
                setIsNoticeVisible(true)
                setTimeout(() => {
                  setIsNoticeVisible(false)
                }, 3000);
                setNoticeMessage(
                  'You cannot select less than 3 pokemons.',
                )
              
             } else {
               if (selectedPokemonsMap.length >= 6 && !findValue) {
                setIsNoticeVisible(true)
                setTimeout(() => {
                  setIsNoticeVisible(false)
                }, 3000);
                setNoticeMessage(
                  'You cannot select more than 6 pokemons.',
                )
                
               } else {
                 if (findValue) {
                   let value = selectedPokemonsMap.filter(
                     s => s.name !== pokemon.name,
                   )
                   setselectedPokemonsMap(value)
                 } else {
                   setselectedPokemonsMap([
                     ...selectedPokemonsMap,
                     pokemon,
                   ])
                 }
               }
             }
             }}
            />
       ))}
        </ScrollView>
    </SafeAreaView>
    ) 

}

  const mapStateToProps = (state: IAppState) => ({
   id: state.regions.mainGenerations.id,
   pokemons: state.regions.pokemonByRegion
  })
  

  const mapDispatchToProps = (dispatch: Dispatch) => ({
    actions: {
      getPokemonsByRegion: (id: number) => {
        dispatch(getPokemonsByRegion(id))
      },
      createTeam: (PokemonTeam: IPokemonSpecies[]) => {
        dispatch(createTeam(PokemonTeam))
      },
      resetState: () => {
        dispatch(resetState())
      },

      
      
    },
  })

export default connect(mapStateToProps, mapDispatchToProps)(Teams) 