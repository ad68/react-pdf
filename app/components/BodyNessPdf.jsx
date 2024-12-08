"use client";

import React from "react";
import { Document, Page, Text, View, StyleSheet, Image, Font } from "@react-pdf/renderer";
Font.register({ family: 'iransans', src: "/fonts/iransans/iransans-regular.ttf" });
const PDFTable = () => {
  // استایل‌ها
  const styles = StyleSheet.create({
    page: {
      padding: 20,
    },
    table: {
      display: "table",
      width: "auto",
      /*    borderStyle: "solid",
         borderWidth: 1,
         borderColor: "#5606a8", */
      marginTop: 40
    },
    tableRowHeader: {
      flexDirection: "row",
      backgroundColor: "#F1E8FC",
      borderRadius: 5
    },
    tableRow: {
      flexDirection: "row",

    },
    tableCol: {
      width: "25%",
      /* borderStyle: "solid",
      borderWidth: 1,
      borderColor: "#5606a8", */
      padding: 5,
    },
    header: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      fontFamily: "iransans",

    },
    tableCell: {
      fontSize: 10,
      fontFamily: "iransans",
      textAlign: "center",
      color: "#5606a8"
    },
    logo: {
      width: 80,
      height: 80
    }
  });

  // ساختار PDF با جدول
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text>برنامه پزشکی</Text>
          <Image alt="" style={styles.logo} src="/images/logoWhite.png" />
        </View>
        {/* جدول */}
        <View style={styles.table}>
          {/* ردیف هدر */}
          <View style={styles.tableRowHeader}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>ردیف</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>نام غذا</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>کالری</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>پروتئین</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>کربوهیدارت</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>چربی</Text>
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
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Row {row} - Col 4</Text>
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
