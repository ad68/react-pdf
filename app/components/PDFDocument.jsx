"use client";
import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const PDFDocument = () => {
  // استایل‌ها
  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      padding: 20,
    },
    section: {
      margin: 10,
      padding: 10,
      border: "1px solid #ccc",
    },
  });

  // ساختار PDF
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Hello, this is your PDF!</Text>
        </View>
        <View style={styles.section}>
          <Text>React-PDF is great for generating documents.</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFDocument;
