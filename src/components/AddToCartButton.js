import React, { useState } from "react";
import { Text, View, Button } from "react-native";

const AddToCartButton = () => {
  const [cartMessage, setCartMessage] = useState("");

  const handleAddToCart = () => {
    setCartMessage("Added to Cart!");
  };

  return (
    <View>
      <Button title="Add to Cart" onPress={handleAddToCart} />
      <Text>{cartMessage}</Text>
      {cartMessage !== "" && (
        <View>
          <Button
            title="Go to Cart"
            onPress={() => console.log("Navigating to Cart")}
          />
          <Button
            title="Continue Shopping"
            onPress={() => setCartMessage("")}
          />
        </View>
      )}
    </View>
  );
};

export default AddToCartButton;
