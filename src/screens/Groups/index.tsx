import React, { useState } from 'react';
import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';

import { Container } from './styles';
import { GroupCard } from '@components/GroupCard';
import { Loading } from '@components/Loading';
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
                onPress={() => { }}
              />
            )}
            contentContainerStyle={groups.length === 0 && {flex: 1}}
            ListEmptyComponent={() => (
              <ListEmpty 
                message='Que tal cadastrar a primeira turma?'
              />
            )}
          />
      }
      <Button
        title='Criar nova Turma'
        onPress={() => { }}
      />
    </Container>
  );
}