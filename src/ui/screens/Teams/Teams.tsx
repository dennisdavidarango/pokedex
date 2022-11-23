import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux';
import { IAppState } from '../../../sot/IAppState';
import { Dispatch } from 'redux';
import { ITeamsProps } from './types';
import { getPokemonsByRegion } from '../../../sot/Regions/actions';
import TeamsStyles from './styles';
import Color from '../../../res/constants/colors';
import { PokemonItem } from './PokemonsItem';
import { PokemonNotice } from './PokemonNotice';
import { IPokemonSpecies } from '../../../sot/Regions/types';
import { createTeam } from '../../../sot/Teams/actions';
import Segues from '../../../res/constants/segues';
import { IPokemonTeams } from '../../../sot/Teams/types';

const Teams = (props: ITeamsProps) => {
  const {actions, pokemons, id, navigation} = props
  const {TEAMS_STORE} = Segues.Main 

  const [selectedPokemonsMap, setselectedPokemonsMap] = useState(pokemons)
  const [noticeMessage, setNoticeMessage] = useState('')
  const [isNoticeVisible, setIsNoticeVisible] = useState(false)

  const [countTeams, setCountTeams] = useState(0)

  useEffect(() => {
   actions.getPokemonsByRegion(id)
  }, [])

    return(
      <SafeAreaView style={TeamsStyles.container}>
         <PokemonNotice
          message={noticeMessage}
          isVisible={isNoticeVisible}
          setModalVisible={setIsNoticeVisible}
        />
        <View>
          <View style={TeamsStyles.headerContainer}>
            <Text style={TeamsStyles.headerText}>Pokedex</Text>
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
          </View>
          <TouchableOpacity
           onPress={()=> {
            actions.createTeam(selectedPokemonsMap, countTeams )
            setCountTeams(countTeams + 1)
           }}
           disabled={selectedPokemonsMap.length > 6 || selectedPokemonsMap.length < 3 ? true : false}
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
      createTeam: (PokemonTeam: IPokemonSpecies[], id: number) => {
        dispatch(createTeam(PokemonTeam, id))
      },
      
    },
  })

export default connect(mapStateToProps, mapDispatchToProps)(Teams) 