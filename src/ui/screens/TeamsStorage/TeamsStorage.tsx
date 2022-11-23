import React, { useEffect } from 'react'
import { FlatList, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { ITeamsStorageProps } from './types';
import { Dispatch } from 'redux'
import Segues from '../../../res/constants/segues';
import { connect } from 'react-redux';
import { IAppState } from '../../../sot/IAppState';
import { getMainGeneration, getRegions } from '../../../sot/Regions/actions';
import { SafeAreaView } from 'react-native-safe-area-context';
import TeamsStorageStyles from './styles';

const TeamsStorage = (props: ITeamsStorageProps) => {
    const {navigation, pokemonsTeams} = props

    useEffect(() => {
      // actions.getRegions()
    }, [])

    return(
        <SafeAreaView style={TeamsStorageStyles.container}>
          {pokemonsTeams.map(
            team => (
              <View>
                <Text> {team.name} </Text>
              </View>
            )
          )}
      </SafeAreaView>
    ) 
}

  const mapStateToProps = (state: IAppState) => ({
    pokemonsTeams: state.teams.pokemonTeams
  })
  

  const mapDispatchToProps = (dispatch: Dispatch) => ({
    actions: {
     
    },
  })

export default connect(mapStateToProps, mapDispatchToProps)(TeamsStorage) 