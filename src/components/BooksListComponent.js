import { StyleSheet, View, FlatList, Image } from "react-native";

import BookItemComponent from "./BookItemComponent";

import { useSelector } from "react-redux";

const BooksListComponent = ({ navigation, booksDB }) => {
  return (
    <View>
      <FlatList
        data={booksDB}
        keyExtractor={booksDB.id}
        renderItem={({ item }) => (
          <BookItemComponent book={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default BooksListComponent;

const styles = StyleSheet.create({
  image: {
    marginVertical: 50,
    width: 420,
    height: 400,
  },
});
