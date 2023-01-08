import { Button } from '@components/Button';
import { ButtonIcon } from '@components/ButtonIcon';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { ListEmpty } from '@components/ListEmpty';
import { Loading } from '@components/Loading';
import { PlayerCard } from '@components/PlayerCard';
import React, { useRef, useState } from 'react';
import { FlatList, TextInput } from 'react-native';

import { Container, Form, HeaderList, NumberOfPlayers } from './styles';

type PlayersProps = {
  name: string;
}

export function Players() {
  const [isLoading, setLoading] = useState(false);
  const [newPlayerName, setNewPlayerName] = useState('');
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState<PlayersProps[]>([]);

  const newPlayerNameInputRef = useRef<TextInput>(null);

  function handleAddPlayer() {

  }

  function handleRemovePlayer(id: string) {

  }

  function handleRemoveGroup(){
    
  }

  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title='Teste'
        subtitle='adicione a galera e separe os times'
      />
      <Form>
        <Input
          inputRef={newPlayerNameInputRef}
          placeholder='Nome da pessoa'
          value={newPlayerName}
          onChangeText={setNewPlayerName}
          autoCorrect={false}
          onSubmitEditing={handleAddPlayer}
          returnKeyType='done'
        />
        <ButtonIcon
          icon="add"
          onPress={handleAddPlayer}
        />
      </Form>
      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>
          {players.length}
        </NumberOfPlayers>
      </HeaderList>
      {
        isLoading
          ?
          <Loading />
          :
          <FlatList
            data={players}
            keyExtractor={item => item.name}
            renderItem={({ item }) => (
              <PlayerCard
                name={item.name}
                onRemove={() => handleRemovePlayer(item.name)}
              />
            )}
            ListEmptyComponent={() => (
              <ListEmpty message='Não há pessoas nesse time' />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
          />
      }
      <Button 
        title='Remover Turma'
        type='secondary'
        onPress={handleRemoveGroup}
      />
    </Container>
  );
}