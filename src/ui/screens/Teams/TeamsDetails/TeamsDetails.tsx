import React, { useEffect, useState } from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import TeamsStorageStyles from './styles'
import {
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { ITeamsDetails } from './types'
import { IAppState } from '../../../../sot/IAppState'
import { getPokemonDetail } from '../../../../sot/Regions/actions'

const TeamsDetails = (props: ITeamsDetails) => {
  const { route, actions, pokemonDetail } = props
  const { teamName, pokemons } = route.params

  const [modalVisible, setModalVisible] = useState(false)

  return (
    <SafeAreaView style={TeamsStorageStyles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View
          style={TeamsStorageStyles.modalView}
        >
          <View
            style={TeamsStorageStyles.modalContainer}
          >
            <Image
              source={{
                uri: pokemonDetail?.sprites?.front_default,
                height: 200,
                width: 300,
              }}
            />
            <View
              style={TeamsStorageStyles.itemContainer}
            >
              <Text
                style={TeamsStorageStyles.textItem}
              >
                Name:{' '}
              </Text>
              <Text
                style={TeamsStorageStyles.textDetails}
              >
                {pokemonDetail.name.toLocaleUpperCase()}
              </Text>
            </View>
            <View
              style={TeamsStorageStyles.itemContainer}
            >
              <Text
                style={TeamsStorageStyles.textItem}
              >
                Number:{' '}
              </Text>
              <Text
                style={TeamsStorageStyles.textDetails}
              >
                {pokemonDetail.id}
              </Text>
            </View>
            <View
              style={TeamsStorageStyles.itemContainer}
            >
              <Text
                style={TeamsStorageStyles.textItem}
              >
                Height:{' '}
              </Text>
              <Text
                style={TeamsStorageStyles.textDetails}
              >
                {pokemonDetail.height}
              </Text>
            </View>
            <View
              style={TeamsStorageStyles.itemContainer}
            >
              <Text
                style={TeamsStorageStyles.textItem}
              >
                Width:{' '}
              </Text>
              <Text
                style={TeamsStorageStyles.textDetails}
              >
                {pokemonDetail.weight}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={TeamsStorageStyles.closeContainerButton}
            >
              <Text
                style={TeamsStorageStyles.textDetails}
              >
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View
        style={TeamsStorageStyles.containerTitle}
      >
        <Text
          style={TeamsStorageStyles.headerText}
        >
          Pokemons
        </Text>
        <Text
          style={TeamsStorageStyles.subHeaderText}
        >
          {teamName}
        </Text>
      </View>

      {Object.values(pokemons).map(item => (
        <TouchableOpacity
          key={item}
          onPress={() => {
            actions.getPokemonDetail(item)
            setModalVisible(true)
          }}
          style={TeamsStorageStyles.pokemonItemContainer}
        >
          <View
            style={TeamsStorageStyles.containerText}
          >
            <Text
              style={TeamsStorageStyles.textItem}
            >
              {item}{' '}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  )
}

const mapStateToProps = (state: IAppState) => ({
  pokemonDetail: state.regions.pokemonDetail,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: {
    getPokemonDetail: (pokemon: string) => {
      dispatch(getPokemonDetail(pokemon))
    },
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(TeamsDetails)
