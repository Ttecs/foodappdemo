import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import catagoriesdata from "../assets/Data/catagoriesdata";
import populardata from "../assets/Data/populardata";

function HomeScreen() {
  const rendercatagoryItem = ({ item }) => {
    return (
      <View style={[styles.ctagorywrapper,{
        backgroundColor:item.selected ? "#F5CA48" :"white",
        marginLeft:item.id==1 ?20:0,
      }]}>
        <Image source={item.image} style={styles.catogoriitemimage} />
        <Text style={styles.catogoriitemtext}> {item.title}</Text>
        <View style={[styles.catogoriselectwrap,{backgroundColor:item.selected ? "white":"#F26C68"}]}>
          <Feather
            name="chevron-right"
            size={14}
            color="black"
            style={styles.catogoriicon}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {/* header */}
      <ScrollView>
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <Image
            source={require("../assets/images/profile.png")}
            style={styles.profileImage}
          />
          <Feather name="menu" size={24} color="black" />
        </View>
      </SafeAreaView>

      {/* Titles */}
      <View style={styles.titlewrapper}>
        <Text style={styles.titlesubtitle}>Food</Text>
        <Text style={styles.Titlestitle}>Delivery</Text>
      </View>

      {/*  serach*/}
      <View style={styles.serchwrapper}>
        <Feather name="search" size={16} color="#313234" />
        <View style={styles.search}>
          <Text style={styles.searchtext}>Search</Text>
        </View>
      </View>

      {/* catagories */}
      <View style={styles.catagorieswrapper}>
        <Text style={styles.catagoriestext}>Catagories  </Text>
        <View style={styles.Flatlist}>
          <FlatList
            data={catagoriesdata}
            renderItem={rendercatagoryItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
          />
        </View>
      </View>  
      {/* cards */}
    <View style={styles.cardwrapper}>
      <Text  style={styles.cardtitle}>Popular       </Text>
      {populardata.map((item)=>(
        <View style={[styles.actualcard,{marginTop:item.id? 10:20,}]}>
          <View> 
            <View>
              <View style={styles.crowtext}>
                <MaterialCommunityIcon name='crown' size={14} color="#F5CA48"/>
                <Text style={styles.tptext}>Top of the week</Text>
              </View>
              <View style={styles.populartitle}>
                <Text style={styles.textytitle}>{item.title}</Text>
                <Text style={styles.weight}> Weight {item.weight}</Text>
              </View>
              
            </View>
            <View style={styles.popularcardbottom}>
              <View style={styles.addpizzab}>
                <View style={styles.plusicon}>
                <Feather name="plus" size={18} color="black"/>
                </View>
              </View>
              <View style={styles.starrs}> 
              <MaterialCommunityIcon name="star" size={10} color="black"/>
              <Text style={styles.rating}>{item.rating}</Text>
              </View>
              
            </View>
           
          </View>
          <View style={styles.imagecardg}>
              <Image source={item.image}  style={styles.imagepizzam} />
            </View>
        </View>
      ))}
       
    </View>
    </ScrollView>

    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 35,
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  titlewrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },

  titlesubtitle: {
    fontWeight: "400",
    fontSize: 16,
  },
  Titlestitle: {
    fontWeight: "400",
    fontSize: 32,
    color: "#313234",
  },
  serchwrapper: {
    paddingHorizontal: 20,
    paddingTop: 36,
    flexDirection: "row",
    alignItems: "center",
  },

  search: {
    paddingHorizontal: 12,
    flex: 1,
    borderBottomColor: "#CDCDCD",
    borderBottomWidth: 2,
  },

  searchtext: {
    fontSize: 14,
    color: "#CDCDCD",
    marginBottom: 5,
  },
  catagorieswrapper: {
    marginTop:30
    
  },

  catagoriestext: {
    fontSize: 16,
    fontWeight: "bold",paddingHorizontal:20
  },
  Flatlist: {
    marginTop: 15,
  },
  ctagorywrapper: {
    width: 105,
    height: 177,
    paddingHorizontal: 20,
    paddingTop: 15,
    backgroundColor: "#F5CA48",
    marginRight: 20,
    borderRadius: 20,
  },

  catogoriitemimage: {
    paddingTop: 24,
    paddingHorizontal: 22,
    width: 60,
    height: 60,
    alignItems: "center",
  },
  catogoriitemtext: {
    fontSize: 14,
    textAlign: "center",
    marginTop:10
  },
  catogoriselectwrap: {
   alignSelf: "center",
    justifyContent: "center",
    marginTop:20,
    width: 26,
height: 26,
backgroundColor: "#FFFFFF",
borderRadius:20
  },
  catogoriicon: {
    alignSelf:'center'
  },
  cardwrapper:{
    paddingHorizontal:20,
    marginTop:11
  },
  cardtitle:{
    fontSize:16,
    fontWeight:'bold',
  },
  crowtext:{
    flexDirection: "row",
    alignItems: "center",
    marginLeft:20
  },
  tptext:{
    marginLeft:10,
    fontSize:14
  },
  actualcard:{
    backgroundColor: "#FFFFFF",
    
    height: 161,
    paddingTop: 20,
    
    marginBottom:20,
    borderRadius:25,
    flexDirection: "row",
    overflow: "hidden",
    shadowColor:"white",
  },
  populartitle:{
    marginTop:20,
    marginLeft:22,
    
   
  },
textytitle:{
  fontSize: 14,
  fontWeight:'bold',

},
weight:{
  marginTop:5,
  color:'#C4C4C4'
},
popularcardbottom:{
  flexDirection: "row",
},
starrs:{
  flexDirection: "row",
  alignItems: "center",
  marginLeft:110
},
rating:{
  marginLeft:5,
},
addpizzab:{
  alignItems: "center",
  width: 90,
height: 53,
backgroundColor:'#F5CA48',
borderBottomLeftRadius:25,
borderTopRightRadius:25,

},
plusicon:{
  marginTop:20,
  
},
imagepizzam:{
  width: 210,
height: 125,
resizeMode:'contain',
},
imagecardg:{
 marginLeft:1
}
});
