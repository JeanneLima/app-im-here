import { Text, TextInput, View } from 'react-native';
import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      
      <Text style={styles.eventDate}>
        Quarta, 21 de dezembro de 2022.
      </Text>
      
      <TextInput 
        style={styles.input} 
        placeholder="Nome do participante"
        placeholderTextColor="#6B6B6B"
      />
    </View>
  );
}