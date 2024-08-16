import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, SafeAreaView, Image, TouchableOpacity, Button } from "react-native";

const AboutTheAppScreen = ({
  navigation
}) => {
  const [ImageSource, setImageSource] = useState("https://tinyurl.com/42evm3m3");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  useEffect(() => {
    setText1("I understand that uses my dolor sit amet, consectetur adipiscing elit. Viverra auctor laoreet sodales congue sit volutpat quisque. Mattis nisl in convallis sed et. Est turpis aliquam est, ut mattis nisi, amet feugiat. Aliquet odio consequat, nisl mauris ullamcorper malesuada velit sem dolor. Dui morbi porttitor integer felis, pellentesque quam. Et accumsan justo, massa tincidunt arcu fermentum est. Sed nibh id vel, diam ut feugiat nec, placerat mauris. Neque lorem netus lacinia elit est libero sed. Commodo viverra et, neque augue augue mauris, nunc ut nec.");
    setText2("I understand that uses my dolor sit amet, consectetur adipiscing elit. Viverra auctor laoreet sodales congue sit volutpat quisque. Mattis nisl in convallis sed et. Est turpis aliquam est, ut mattis nisi, amet feugiat. Aliquet odio consequat, nisl mauris ullamcorper malesuada velit sem dolor. Dui morbi porttitor integer felis, pellentesque quam. Et accumsan justo, massa tincidunt arcu fermentum est. Sed nibh id vel, diam ut feugiat nec, placerat mauris. Neque lorem netus lacinia elit est libero sed. Commodo viverra et, neque augue augue mauris, nunc ut nec.");
  }, []);

  const navigateToNextPage = () => {
    navigation.navigate("MediaScreen"); // Replace 'NextPage' with the actual next page name
  };

  return <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={navigateToNextPage}>
        <View style={styles.imgScroller}>
          <Image style={styles.image} source={{
          uri: ImageSource
        }} />
        </View>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text1}</Text>
        <Text style={styles.text}>{text2}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Next" onPress={navigateToNextPage} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#fff"
  },
  imgScroller: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain"
  },
  textContainer: {
    paddingHorizontal: 20
  },
  text: {
    fontSize: 14,
    textAlign: "justify",
    lineHeight: 18,
    marginVertical: 10
  },
  buttonContainer: {
    paddingHorizontal: 20,
    marginTop: 20
  }
});
export default AboutTheAppScreen;