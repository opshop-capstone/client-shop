import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Checkbox = ({ title, def, onPress }) => {
  const [checked, setChecked] = useState(def ? true : false);

  const handlePress = () => {};

  return (
    <TouchableOpacity
      style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}
      onPress={() => {
        onPress();

        handlePress();
      }}
    >
      <MaterialIcons
        name={checked ? "check-box" : "check-box-outline-blank"}
        size={24}
        color={checked ? "black" : "grey"}
      />
      <Text
        style={
          checked
            ? { marginLeft: 8, color: "black" }
            : { marginLeft: 8, color: "grey" }
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Checkbox;
