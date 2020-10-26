import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id =  navigation.getParam('id');
 
    //console.log(result);
  const getResult = async (id) => {
   const response = await yelp.get(`/${id}`);
    setResult(response.data);
   };

   useEffect(() => {
    getResult(id);
   },[]);

   if(!result){
       return null;
   }
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}> {result.name} </Text>
            <FlatList
            data={result.photos}
            keyExtractor={photo => photo}
            renderItem={({item}) => {
               return(
                   <View style={styles.imageContainer}>
                       <Image style={ styles.image }source={{uri: item}}/>
                   </View>    
               );
            }}
            />

        </View>
    );
}
const styles = StyleSheet.create({  
    container:{
        borderWidth:1,
        flex:1,
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        alignSelf:'center',
        marginVertical:10
    },
    imageContainer:{
        justifyContent:'center', 
        alignItems:'center',
    },
    image:{
        height:250,
        width:250,
        borderRadius:10,
        marginVertical:10
    }
})

export default ResultShowScreen;
