import React, { Component } from 'react'
import { Text, View,StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'

export class Note extends Component {
    render() {
        return (
            <View key={this.props.keyval} style={styles.note}>
            <Text style={styles.notetext}>
                {
                    this.props.val.date 
                }
            </Text>
            <Text style={styles.notetext}>
                {
                    this.props.val.note
                }
            </Text>
            <TouchableOpacity style={styles.notedelete}
            onPress={this.props.deleteMethod}>
                <Text style={styles.notedeletetext}>D</Text>
            </TouchableOpacity>
            </View>
        )
    }
}

export default Note

const styles = StyleSheet.create({
    note:{
        position:"relative",
        padding:20,
        paddingRight:100,
        borderBottomWidth:2,
        borderBottomColor:'#ededed'
    },
    notetext:{
        paddingLeft:20,
        borderLeftWidth:10,
        borderLeftColor:"#e91e63"
    },
    notedelete:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2980b9',
        padding:10,
        top:10,
        bottom:10,
        right:10
    },
    notedeletetext:{
        color:'white'
    }
})