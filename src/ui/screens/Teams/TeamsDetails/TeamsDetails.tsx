import React, { useEffect, useState } from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import {child, push, ref, onValue} from 'firebase/database'
import TeamsStorageStyles from './styles';
import { FlatList, Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import { ITeamsDetails } from './types';
import { IData } from '../../TeamsStorage/types';
import { db } from '../../../../../config';
import Size from '../../../../res/constants/sizes';
import Color from '../../../../res/constants/colors';
import { IAppState } from '../../../../sot/IAppState';
import Segues from '../../../../res/constants/segues';
import { getPokemonDetail } from '../../../../sot/Regions/actions';



const TeamsDetails = (props: ITeamsDetails) => {

    const {route, actions, pokemonDetail} = props
    const {teamName, pokemons} = route.params

    const [modalVisible, setModalVisible] = useState(false)

    

    return(
        <SafeAreaView style={TeamsStorageStyles.container}>
          <Modal
             animationType="slide"
             transparent={true}
             visible={modalVisible}
             onRequestClose={() => setModalVisible(!modalVisible)}
          >
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%'
        }}>
          <View style={{
            height: '50%',
            width: '95%',
            borderRadius: 16,
            backgroundColor: Color.BACKGROUND,
            alignItems: 'center'
          }} >

         <Image source={{uri: pokemonDetail?.sprites?.front_default, height: 200, width: 300}} />
         <View style={{
          flexDirection: 'row'
         }}>
          <Text style={{
             color: Color.WHITE
          }}>Name: </Text>
          <Text style={{
            color: Color.PRIMARY_BUTTON
          }}>
            {pokemonDetail.name.toLocaleUpperCase()}
          </Text>

         </View>
         <View style={{
          flexDirection: 'row'
         }}>
          <Text style={{
             color: Color.WHITE
          }}>Number: </Text>
          <Text style={{
            color: Color.PRIMARY_BUTTON
          }}>
            {pokemonDetail.id}
          </Text>

         </View>
         <View style={{
          flexDirection: 'row'
         }}>
          <Text style={{
             color: Color.WHITE
          }}>Height: </Text>
          <Text style={{
            color: Color.PRIMARY_BUTTON
          }}>
            {pokemonDetail.height}
          </Text>

         </View>
         <View style={{
          flexDirection: 'row'
         }}>
          <Text style={{
             color: Color.WHITE
          }}>Width: </Text>
          <Text style={{
            color: Color.PRIMARY_BUTTON
          }}>
            {pokemonDetail.weight}
          </Text>

         </View>
         <TouchableOpacity 
          onPress={() => setModalVisible(false)}
          style={{
            backgroundColor: Color.GREY_DARK,
            padding: 10,
            marginTop: 10,
            borderRadius: 10
          }}
          >
          <Text style={ {
            color: Color.PRIMARY_BUTTON
          }}>Close</Text>
         </TouchableOpacity>
        </View>
        </View>

          </Modal>
          <View style={{
            marginBottom: 20,
          }}>
            <Text style={{
              fontSize: Size.HEADER,
              fontWeight: 'bold',
              textAlign: 'center'
            }}>
                  Pokemons
            </Text>
            <Text style={{
              fontSize: Size.SUBHEADER,
              fontWeight: '100',
              textAlign: 'center'
              }}>
               {teamName}
            </Text>
          </View>

          {Object.values(pokemons).map((item)=>
          
          <TouchableOpacity
          key={item}
          onPress={()=> {
            actions.getPokemonDetail(item)
            setModalVisible(true)
        }}
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
            }}>{item} </Text>
           </View>
         
          </TouchableOpacity>
      
      )}
      </SafeAreaView>
    ) 
}

const mapStateToProps = (state: IAppState) => ({
  pokemonDetail: state.regions.pokemonDetail
  
})


  const mapDispatchToProps = (dispatch: Dispatch) => ({
    actions: {
        getPokemonDetail: (pokemon: string) => {
            dispatch(getPokemonDetail(pokemon))
          },
    }
  })

export default connect(mapStateToProps, mapDispatchToProps)(TeamsDetails) 