import React, { useCallback, useState } from 'react';
import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';

import { Container } from './styles';
import { GroupCard } from '@components/GroupCard';
import { Loading } from '@components/Loading';
import { Alert, FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { groupsGetAll } from '@storage/group/groupsGetAll';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { navigate } = useNavigation();

  function fetchGroup() {
    setIsLoading(true);
    groupsGetAll()
      .then((data) => {
        setGroups(data);
      })
      .catch((e) => {
        Alert.alert('Turmas', 'Não foi possível carregar as turmas');
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  useFocusEffect(useCallback(() => {
    fetchGroup();
  }, []));

  return (
    <Container>
      <Header />
      <Highlight
        title='Turmas'
        subtitle='Jogue com sua turma'
      />
      {
        isLoading
          ?
          <Loading />
          :
          <FlatList
            data={groups}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <GroupCard
                title={item}
                onPress={() => navigate('players', { group: item })}
              />
            )}
            contentContainerStyle={groups.length === 0 && { flex: 1 }}
            ListEmptyComponent={() => (
              <ListEmpty
                message='Que tal cadastrar a primeira turma?'
              />
            )}
          />
      }
      <Button
        title='Criar nova Turma'
        onPress={() => navigate('newGroup')}
      />
    </Container>
  );
}