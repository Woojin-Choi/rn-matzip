import {
  Dimensions,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { colors } from "../constants";

interface CustomButtonProps extends PressableProps {
  label: string;
  variant?: "filled" | "outlined";
  size?: "large" | "medium";
  inValid?: boolean;
}

const deviceHeight = Dimensions.get("screen").height;

export default function CustomButton({
  label,
  variant = "filled",
  size = "large",
  inValid = false,
  ...props
}: CustomButtonProps) {
  return (
    // 여러개 style 넣을 경우에는 이렇게 배열 안에 넣어주면 됨.
    <Pressable
      disabled={inValid}
      style={({ pressed }) => [
        styles.container,
        pressed ? styles[`${variant}Pressed`] : styles[variant],
        styles[size],
        inValid && styles.inValid,
      ]}
      {...props}
    >
      <Text style={[styles.text, styles[`${variant}Text`]]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  inValid: {
    opacity: 0.5,
  },
  filled: {
    backgroundColor: colors.PINK_700,
  },
  outlined: {
    borderColor: colors.PINK_700,
    borderWidth: 1,
  },
  filledPressed: {
    backgroundColor: colors.PINK_500,
  },
  outlinedPressed: {
    borderColor: colors.PINK_700,
    borderWidth: 1,
    opacity: 0.5,
  },
  large: {
    width: "100%",
    paddingVertical: deviceHeight > 700 ? 15 : 10,
    alignItems: "center",
    justifyContent: "center",
  },
  medium: {
    width: "50%",
    paddingVertical: deviceHeight > 700 ? 12 : 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: 700,
  },
  filledText: {
    color: colors.WHITE,
  },
  outlinedText: {
    color: "#c63864",
  },
});
/*
- PressableProps 는 공식문서 어디에 있는거지?
*/
