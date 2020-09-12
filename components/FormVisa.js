import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import {Header, Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import {Checkbox} from 'react-native-paper';
import TextInputMask from './textInputMask.'



const FormVisa = () => {
    
    const [checked, setChecked] = React.useState(false);
    
    return(
        <View style={styles.container}>
    <View  >
        <Header 
        leftComponent={{ icon: 'close', color: '#fff' }}
        centerComponent={{ text: 'Méthode de paiement', style: { color: '#fff', fontSize: 20 } }}
        containerStyle={{
            backgroundColor: '#ff0000',
          }}
        />

        <View style={styles.formVisa}>
            <Card style={styles.cardVisa}>
                
                <View style={styles.visa}>
                <Image
                    style={styles.logoVisa}
                    source={require('./images/Visa_Logo.png')}
                />
                    <Icon name="checkcircleo" size={30} color="blue" /> 
                </View>
                <View style={styles.itemForm}>
                    <View style={styles.form1}>
                        <TextInput
                        placeholder='Numéro de carte'
                        style={{ height: 50, borderColor: '#b8b8b8', borderWidth: 2, borderRadius: 5 }}
                                     
                        />
                    </View>
                    <View style={styles.form2}>
                        <TextInput
                        placeholder='Nom du titulaire de la carte'
                        style={{ height: 50, borderColor: '#b8b8b8', borderWidth: 2, borderRadius: 5 }}
                        
                        />
                    </View>
                    <View >
                        <TextInputMask />
                         
                    </View>
                            
                    <View style={styles.checkBox}>
                        <Checkbox
                            color='blue'
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                            />  
                            <Text>Enregistrer les informations de carte de {"\n"} credit</Text>  
                    </View>

                    <View style={styles.btn}>
                                
                        <TouchableOpacity
                            style={styles.button1}
                            onPress={() => {}}
                        >
                            <Text style={{color:'white', fontSize:15, fontWeight:'bold'}}>SUIVANT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            
                            style={styles.button2}
                            onPress={() => {}}
                        >
                            <Text style={{color:'blue', fontSize:15, fontWeight:'bold'}}>Retour</Text>
                        </TouchableOpacity>
                      
                    </View>

                    
                </View>

            </Card>
            
        </View>
    </View>
  </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6e6",
    
  },
  visa: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoVisa: {
    width: 100,
    height: 30,
  },
  itemForm: {
      marginTop: 50,
  },
  form2: {
    marginTop: 20,
  },
 
  checkBox: {
    marginTop: 20,
    flexDirection: 'row',

  },
  btn:{
      marginTop: 20,
  },
  button1: {
    alignItems: "center",
    backgroundColor: "#1e37b0",
    padding: 12,
    borderRadius:5,
    
  
  },
  button2: {
    marginTop:10,
    alignItems: "center",
    padding: 12,
    borderRadius:5,
    borderWidth:1.5,
    borderTopColor:'blue',
    borderBottomColor:'blue',
    borderRightColor:'blue',
    borderLeftColor:'blue'
    
  },
  
  
  
});

export default FormVisa;
