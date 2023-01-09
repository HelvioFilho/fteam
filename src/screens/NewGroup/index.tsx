import React, { useState } from 'react';
import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';

import { Container, Content, Icon } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { groupCreate } from '@storage/group/groupCreate';
import { AppError } from '@utils/AppError';

export function NewGroup(){
  const [group, setGroup] = useState('');

  const {navigate} = useNavigation();

  function handleNew(){
    if(group.trim().length === 0){
      return Alert.alert('Novo grupo', 'Informe o nome da turma.');
    }

    groupCreate(group)
    .then(() => {
      navigate('players',{ group });
    })
    .catch((e) => {
      if(e instanceof AppError){
        Alert.alert('Novo Grupo', e.message);
      }else{
        Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo.');
        console.log(e);
      }
    });
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight 
          title='Nova turma'
          subtitle='crie a turma para adicionar as pessoas'
        />
          <Input 
            placeholder='Nome da turma'
            onChangeText={setGroup}
          />
        <Button 
          title='Criar'
          style={{marginTop: 20}}
          onPress={handleNew}
        />
      </Content>
    </Container>
  );
}