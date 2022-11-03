import React, { useEffect, useState } from "react";

import { Text, View } from "react-native";
import { getUserStats } from "../../service/stats";
export default function Stats() {
  useEffect(() => {
    getUserStats(60);
  }, []);

  return <View></View>;
}
