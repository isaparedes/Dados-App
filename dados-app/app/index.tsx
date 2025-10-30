import { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Button, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export default function Index() {

  const [num, setNum] = useState("⚀");
  const [num2, setNum2] = useState("⚀");
  const [dado, setDado] = useState(1);

  const tirarDado = (nroDado: number) => {
    const numeros = ["⚀","⚁","⚂","⚃","⚄","⚅"];
    const valor = Math.floor(Math.random() * numeros.length);
    if (nroDado === 1) setNum(numeros[valor]);
    else setNum2(numeros[valor]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.encabezado}>
        <Text style={[styles.texto, styles.titulo]}>TIRAR DADO</Text>
        <TouchableOpacity 
          style={styles.botonDiv}
          onPress={() => setDado(dado === 1 ? 2 : 1)}>
          <Text style={[styles.texto, styles.boton]}>{dado === 1 ? "2 dados" : "1 dado"}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dados}>
        <TouchableOpacity onPress={() => tirarDado(1)}>
          <Text style={styles.dado}>{num}</Text>
        </TouchableOpacity>
        {dado === 2 && (
          <TouchableOpacity onPress={() => tirarDado(2)}>
            <Text style={styles.dado}>{num2}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8a8484ff"
  },
  texto: {
    fontFamily: 'Avenir'
  },
  encabezado: {
    alignItems: "center",
    paddingTop: 100,
    marginBottom: 30
  },
  titulo: {
    fontSize: 45,
    fontWeight: "bold",
    marginBottom: 40,
  },
  botonDiv:{
    backgroundColor: "#000000ff",
    borderRadius: 5
  },
  boton: {
    fontSize: 20,
    color: "#a39e9eff",
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  dados: {
    flex: 1,
    alignItems: "center"
  },
  dado: {
    fontSize: width / 2,
    //borderWidth: 3,
    lineHeight: width / 2
  }
});
