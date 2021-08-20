import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer  } from '@react-pdf/renderer';
import IconButton from '@material-ui/core/IconButton';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Link } from "react-router-dom";
import '../../styles/Global.css'

const styles = StyleSheet.create({
  container: {
    marginVertical: 70,
    marginHorizontal: "10%",
  },
  text: {
    fontSize: 20,
    textAlign: 'center'
  }
});

function ViewProntuario(){
  return(
    <div style={{width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div className="menu" styles={{display: 'flex', flexDirection: 'column', border: '1px solid'}}>
        <Link to="/prontuarios">
          <IconButton style={{}}>
            <KeyboardBackspaceIcon/>
          </IconButton>
        </Link>
        <IconButton style={{}}>
            <KeyboardBackspaceIcon/>
        </IconButton>
      </div>
      <PDFViewer style={{ width: '80%', height: '100%' ,border: 'none',overflowX: "hidden"}}>
        <Document>
          <Page size="A4">
            <View style={styles.container}>
              <Text style={styles.text}>
                Pedrinho React Developer
              </Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  )
}
// const ViewProntuario = () => (
//   <div>
//     <PDFDownloadLink style={{ textDecoration: 'none'}} document={<MyDoc />} fileName="Prontuário.pdf">
//       <Button variant="contained" color="secondary">Baixar prontuário em pdf!</Button>
//     </PDFDownloadLink>
//     <Button variant="contained" color="primary" onClick={() => window.print()}>imprimir</Button>
//   </div>
// );

export default ViewProntuario
