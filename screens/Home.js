
import React, { useState } from "react";
import {Text,View,SafeAreaView,TouchableOpacity,StyleSheet,FlatList,Image} from "react-native"
import {icons,COLORS,images,FONTS, SIZES} from "../constants"
import HomeDummyData from '../screens/dummydata/HomeDummyData'

const Home =() =>{
   let data=new HomeDummyData();
   const[selectedCategory,setSelectedCategory]=useState("");
   const[resturants,setResturants]=useState([])

   function renderHeader(){   
      return(      
        <View style={{flexDirection:"row",marginTop:10}}>
          <TouchableOpacity style={{width:50,paddingLeft:SIZES.padding *2}}>
              <Image 
                  source={icons.nearby}
                  resizeMode="contain"
                  style={{
                    width:30,
                    height:30
                  }}
                  >                   
              </Image>
          </TouchableOpacity>

          
          <View style={{width:'70%', height:"100%",alignItems:"center",backgroundColor:COLORS.lightGray3}}>
               
               <Text > {data.initialCurrentLocation.streetName}</Text>
                 
          </View>

          <TouchableOpacity style={{width:50,paddingLeft:SIZES.padding *2,alignItems:"center"}}>
              <Image 
                  source={icons.basket}
                  resizeMode="contain"
                  style={{
                    width:30,
                    height:30
                  }}
                  >                   
              </Image>
          </TouchableOpacity>


        </View>
      )

   }

     
   function onSelectedCategory(category){
     setSelectedCategory(category.item.id);
     //filter resturant
     
     let resturantList= data.restaurantData.filter(a=>(a.categories.includes(category.item.id)))
     setResturants(resturantList);
   } 

   function renderMainCategories(){
      renderItem = (item)=>{

            return(
                 <TouchableOpacity
                  style={{
                    padding:SIZES.padding,
                    marginTop:SIZES.padding,
                    paddingBottom:SIZES.padding *2,
                    backgroundColor: (selectedCategory==item.item.id) ? COLORS.primary : COLORS.white ,
                    alignItems:"center",
                    borderRadius:SIZES.radius,
                    marginRight:SIZES.padding,
                    ...styles.shadow,
                    height:100,
                    width:80
                  }}

                  onPress={()=>{onSelectedCategory(item)}}
                 >


                  <View style={{
                    width:50,
                    height:50,
                    alignItems:"center",
                    borderRadius:25,
                    backgroundColor:COLORS.white
                  }}>


                    <Image 
                     source={item.item.icon}
                     resizeMode="contain"
                     style={{
                       marginTop:10,
                       width:30,
                       height:30
                     }}
                    >

                    </Image>


                    <Text style={{paddingTop:SIZES.padding*2,color:COLORS.white}}>
                      {item.item.name}
                    </Text>


                  </View>
                      

                 </TouchableOpacity>
            );
         }
  
     return(
        <View style={{padding:20}}>
            <Text style={{...FONTS.h1}}>Main</Text>
            <Text style={{...FONTS.h1}}>Categories</Text>

             <FlatList
                 data={data.categoryData}
                 horizontal
                 renderItem={renderItem}
                 keyExtractor={item=>`${item.id}`}
                 />

        </View>
     );
   }


  
  function renderResturantList(){    
     const renderItem=(item)=>{
       console.warn(item);
      return(      
        <TouchableOpacity style={{marginBottom:SIZES.padding *2}}>
                   <View>
                     <Image
                       source={item.item.photo}
                       />
                   </View>

        </TouchableOpacity>
      ); 


     }
      return(
           <FlatList 
           data={resturants}
           keyExtractor={item=>`${item.id}`}
           renderItem={renderItem}
           contentContainerStyle={{
             paddingHorizontal:SIZES.padding*2,
             paddingBottom: 30
           }} />

      );


  }





   return (
     
     <SafeAreaView style={{height:1000}}> 
         {renderHeader()}
         {renderMainCategories()}
         {renderResturantList()}
     </SafeAreaView>

   )


}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: COLORS.lightGray4
  },
  shadow: {
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 1,
  }
})

export default Home;