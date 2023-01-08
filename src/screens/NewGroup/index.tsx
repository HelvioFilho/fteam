import React, { useState } from 'react';
import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';

import { Container, Content, Icon } from './styles';

export function NewGroup(){
  const [group, setGroup] = useState('');

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
          onPress={() => {}}
        />
      </Content>
    </Container>
  );
}