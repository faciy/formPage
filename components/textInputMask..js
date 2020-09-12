import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

class textInputMask extends React.Component {
    state = {
        Month:'',
        years:'',
        creditCard:''
    };
    render() {
        return (
        <View style={styles.textInputMask}>

            <View
            style={
                { height: 50,
                width:50, 
                borderColor: '#b8b8b8', 
                borderWidth: 2, 
                borderRadius: 5 
                }}>
                <TextInputMask
                    placeholder='MM'
                    type={'datetime'}
                    options={{
                        format:'MM'
                    }}
                    value={this.state.Month}
                    onChangeText={(text) => {
                        this.setState({
                            Month: text,
                        });
                    }}
                >

                </TextInputMask>
            </View>
{/* TextInputMask years */}
            <View
            style={
                { height: 50,
                width:70, 
                borderColor: '#b8b8b8', 
                borderWidth: 2, 
                borderRadius: 5 
                }}>
                <TextInputMask
                    placeholder='YYYY'
                    type={'datetime'}
                    options={{
                        format:'YYYY'
                    }}
                    value={this.state.years}
                    onChangeText={(text) => {
                        this.setState({
                            years: text,
                        });
                    }}
                >

                </TextInputMask>
            </View>

{/* TextInputMask years */}
            <View
            style={
                { height: 50,
                width:150, 
                borderColor: '#b8b8b8', 
                borderWidth: 2, 
                borderRadius: 5 
                }}>
                <TextInputMask
                    placeholder='CVV'
                    type={'credit-card'}
                    options={{
                        obfuscated:false,
                        issuer:'amex'
                    }}
                    value={this.state.creditCard}
                    onChangeText={(text) => {
                        this.setState({
                            creditCard: text,
                        });
                    }}
                >

                </TextInputMask>
            </View>

        </View>
            
        );
    }
}

const styles = StyleSheet.create({
    textInputMask: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20
        
      
    },
    
    
  });

export default textInputMask;