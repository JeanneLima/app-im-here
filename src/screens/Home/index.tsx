import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export function Home() {
  const participants = ['Fulano da Silva', 'Lana Rodrigues', 'Tiago Matos', 'Rodrigo Santiago', 'Vinícius Araújo', 'Bia Aranto', 'Gabriela Menezes', 'Luca Mentos', 'Barbara Souza', 'Bento Rodrigues'];

  function handleParticipantAdd() {
    if (participants.includes('Fulano da Silva')) {
      return Alert.alert('Participante Existente', "Já existe um participante na lista com esse nome.")
    }
  };

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado!')
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      
      <Text style={styles.eventDate}>
        Quarta, 21 de dezembro de 2022.
      </Text>
      
      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder='Nome do participante'
          placeholderTextColor='#6B6B6B'
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => 
          <Participant 
            key={item} 
            name={item} 
            onRemove={() => handleParticipantRemove(item)} 
          />
        }
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou ao evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  );
}