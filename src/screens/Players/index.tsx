import React, { useEffect, useRef, useState } from 'react';
import { FlatList, TextInput, Alert } from 'react-native';
import { Button } from '@components/Button';
import { ButtonIcon } from '@components/ButtonIcon';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { ListEmpty } from '@components/ListEmpty';
import { Loading } from '@components/Loading';
import { PlayerCard } from '@components/PlayerCard';
import { useNavigation, useRoute } from '@react-navigation/native';
import { playerAddByGroup } from '@storage/player/playerAddByGroup';
import { playersGetByGroupAndTeam } from '@storage/player/playersGetByGroupAndTeam';
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO';
import { AppError } from '@utils/AppError';

import { Container, Form, HeaderList, NumberOfPlayers } from './styles';
import { playerRemoveByGroup } from '@storage/player/playerRemoveByGroup';
import { groupRemoveByName } from '@storage/group/groupRemoveByName';

type RouteParams = {
  group: string;
}

export function Players() {
  const [isLoading, setLoading] = useState(true);
  const [newPlayerName, setNewPlayerName] = useState('');
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const newPlayerNameInputRef = useRef<TextInput>(null);

  const { navigate } = useNavigation();
  const route = useRoute();
  const { group } = route.params as RouteParams;

  function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert('Atenção', 'Informe o nome da pessoa para adicionar.');
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    }

    playerAddByGroup(newPlayer, group)
      .then(() => {
        newPlayerNameInputRef.current?.blur();

        setNewPlayerName('');
        fetchPlayersByTeam();
      })
      .catch((e) => {
        if (e instanceof AppError) {
          Alert.alert('Atenção', e.message);
        } else {
          Alert.alert('Atenção', 'Não foi possível adicionar.');
          console.log(e);
        }
      });
  }

  function fetchPlayersByTeam() {
    setLoading(true);
    playersGetByGroupAndTeam(group, team)
      .then((playersByTeam) => {
        setPlayers(playersByTeam);
      })
      .catch((e) => {
        Alert.alert('Atenção', 'Não foi possível carregar as pessoas do time selecionado.');
        console.log(e)
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handleRemovePlayer(id: string) {
    playerRemoveByGroup(id, group)
    .then(() => {
      fetchPlayersByTeam();
    })
    .catch((e) => {
      Alert.alert('Atenção', 'Não foi possível remover essa pessoa.');
      console.log(e);
    })
  }

  function groupRemove(){
    groupRemoveByName(group)
    .then(() => {
      navigate('groups');
    })
    .catch((e) => {
      Alert.alert('Atenção', 'Não foi possível remover o grupo.');
      console.log(e);
    });
  }

  function handleRemoveGroup() {
    Alert.alert(
      'Atenção',
      'Deseja remover a turma? \nEssa ação não pode ser desfeita!',
      [
        {
          text: 'Não',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => groupRemove(),
        }
      ]
    )
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title={group}
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