import React, { useEffect } from 'react'
import {
  FlatList,
  Image,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native'
import { ILocationsProps } from './types'
import { Dispatch } from 'redux'
import Segues from '../../../res/constants/segues'
import { connect } from 'react-redux'
import { IAppState } from '../../../sot/IAppState'
import { getMainGeneration, getRegions } from '../../../sot/Regions/actions'
import { SafeAreaView } from 'react-native-safe-area-context'
import LocationStyles from './styles'

const Location = (props: ILocationsProps) => {
  const { navigation, actions, regions } = props
  const { TEAMS } = Segues.Main

  useEffect(() => {
    actions.getRegions()
  }, [])

  return (
    <SafeAreaView style={LocationStyles.container}>
      <FlatList
        data={regions}
        numColumns={1}
        ListHeaderComponent={
          <View>
            <View style={LocationStyles.headerContainer}>
              <Text style={LocationStyles.headerText}>Pokedex</Text>
            </View>
            <View>
              <Text style={LocationStyles.subHeaderText}>Select a region</Text>
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              actions.getMainGeneration(item.name)
              setTimeout(() => {
                navigation.navigate(TEAMS)
              }, 1500)
            }}
            key={item.name}
          >
            <View style={LocationStyles.itemContainer}>
              <Text style={LocationStyles.itemText}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  )
}

const mapStateToProps = (state: IAppState) => ({
  regions: state.regions.regions,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: {
    getRegions: () => {
      dispatch(getRegions())
    },
    getMainGeneration: (region: string) => {
      dispatch(getMainGeneration(region))
    },
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Location)
