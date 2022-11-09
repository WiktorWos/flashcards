import React, { useEffect, useState } from "react";

import {StyleSheet, Text, View} from "react-native";
import { getUserStats } from "../../service/stats";
import {BarChart} from "react-native-chart-kit";
import {SafeAreaView, Dimensions} from "react-native";

const data = {
  labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
  datasets: [
    {
      data: [2, 3, 1, 0, 0, 1, 0]
    }
  ]
};

const STATS_COLOR = "#6C63FF";

export default function Stats() {
  // useEffect(() => {
  //   getUserStats(60);
  // }, []);

  return <SafeAreaView style={styles.container}>
    <Text style={styles.title}>STATS</Text>
    <Text style={styles.chartTitle}>Learning time</Text>
    <BarChart
        style={styles.chart}
        data={data}
        width={Dimensions.get("window").width - 20}
        height={200}
        yAxisSuffix="h"
        chartConfig={{
          backgroundColor: "#fff",
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(108, 99, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        verticalLabelRotation={0}
    />
    <View style={styles.totalTextWrapper}>
      <Text style={styles.totalText}>Total time learning: </Text>
      <Text style={styles.totalValue}>21h</Text>
    </View>
    <View style={styles.totalTextWrapper}>
      <Text style={styles.totalText}>Total accuracy: </Text>
      <Text style={styles.totalValue}>70%</Text>
    </View>
    <View style={styles.totalTextWrapper}>
      <Text style={styles.totalText}>Total learned: </Text>
      <Text style={styles.totalValue}>453</Text>
    </View>
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  title: {
    width: "100%",
    textAlign: "center",
    marginTop: 20,
    fontSize: 50,
    fontWeight: "bold",
  },
  chartTitle: {
    marginLeft: 30,
    marginTop: 20,
    marginBottom: 5,
    fontSize: 18,
  },
  container: {
    display: "flex",
  },

  chart: {
    marginBottom: 20
  },

  totalTextWrapper: {
    width: "60%",
    borderBottomWidth: 1,
    borderColor: STATS_COLOR,
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    flexDirection: "row"
  },

  totalText: {
    fontSize: 18,
  },

  totalValue: {
    color: STATS_COLOR,
    fontWeight: "bold",
    fontSize: 18
  }

});
