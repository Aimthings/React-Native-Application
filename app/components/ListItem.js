import React from 'react';
import AppText from './AppText';
import { Image, View,StyleSheet, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../config/colors';

function ListItem({image,IconComponent,title,subTitle,onPress,renderRightActions}) {
    return (
        <Swipeable 
        renderRightActions={renderRightActions}
        >
        <TouchableHighlight 
         underlayColor={colors.light}
         onPress={onPress}
        >
        <View style={styles.itemContainer}>
            {IconComponent}
            {image ? <Image style={styles.image} source={image}/>:null}
            <View style={styles.textContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle?<AppText style={styles.subTitle}>{subTitle}</AppText>:null}
            </View>
        </View>
        </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    itemContainer:{
        flexDirection:'row',
        padding: 15,
        backgroundColor: colors.white
    },
    textContainer:{
        marginLeft: 10,
        justifyContent: 'center'
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
    },
    title:{
      fontWeight: "500"
    },
    subTitle:{
        color: colors.medium,
        fontSize:15
    }    
})


export default ListItem;