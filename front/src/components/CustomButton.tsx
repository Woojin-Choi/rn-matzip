import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  label: string;
};

export default function CustomButton({ label }: Props) {
  return (
    <Pressable>
      <Text>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
