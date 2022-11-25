import React, { useEffect, useState } from 'react'
import { IData, ITeamsStorageProps } from './types'
import Segues from '../../../res/constants/segues'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ref, onValue } from 'firebase/database'
import TeamsStorageStyles from './styles'
import { db } from '../../../../config'
import {Text, TouchableOpacity, View } from 'react-native'
import Size from '../../../res/constants/sizes'
import Color from '../../../res/constants/colors'

const TeamsStorage = (props: ITeamsStorageProps) => {
  const { navigation } = props

  const { TEAMS_DETAILS } = Segues.Main

  const [allData, setAllData] = useState<Array<IData>>([])

  useEffect(() => {
    const startCountRef = ref(db, 'teams/')
    onValue(startCountRef, snapshot => {
      const data = snapshot.val()
      setAllData(data)
    })
  }, [])

  return (
    <SafeAreaView style={TeamsStorageStyles.container}>
      <View
        style={TeamsStorageStyles.marginContainer}
      >
        <Text
          style={TeamsStorageStyles.headerText}
        >
          Pokemons Teams
        </Text>
        <Text
          style={TeamsStorageStyles.subHeaderText}
        >
          Select a pokemon team
        </Text>
      </View>

      {Object.values(allData).map(item => (
        <TouchableOpacity
          key={item.teamName}
          onPress={() =>
            navigation.navigate(TEAMS_DETAILS, {
              teamName: item.teamName,
              pokemons: item.pokemons,
            })
          }
          style={TeamsStorageStyles.itemContainer}
        >
          <View
            style={TeamsStorageStyles.item}
          >
            <Text
              style={TeamsStorageStyles.teamColor}
            >
              {item.teamName}{' '}
            </Text>
            <Text
              style={TeamsStorageStyles.numberTeamsText}
            >
              {item.pokemons.length}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  )
}

export default TeamsStorage
