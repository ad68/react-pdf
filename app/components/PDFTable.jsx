"use client";

import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const PDFTable = () => {
  // استایل‌ها
  const styles = StyleSheet.create({
    page: {
      padding: 20,
    },
    table: {
      display: "table",
      width: "auto",
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "#ccc",
    },
    tableRow: {
      flexDirection: "row",
    },
    tableCol: {
      width: "25%",
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "#ccc",
      padding: 5,
    },
    tableCell: {
      fontSize: 10,
    },
  });

  // ساختار PDF با جدول
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* جدول */}
        <View style={styles.table}>
          {/* ردیف هدر */}
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Header 1</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Header 2</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Header 3</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Header 4</Text>
            </View>
          </View>
          {/* ردیف‌های داده */}
          {[1, 2, 3].map((row, index) => (
            <View style={styles.tableRow} key={index}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Row {row} - Col 1</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Row {row} - Col 2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Row {row} - Col 3</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Row {row} - Col 4</Text>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default PDFTable;
