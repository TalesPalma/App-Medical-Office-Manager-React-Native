import { Box, Button, Checkbox, VStack } from 'native-base'
import { Title } from './components/Title';
import { InputFromUser } from './components/InputFromUser';
import { useState } from 'react';




interface Sections {
  id: number,
  title: string,
  fields: {
    title: string,
    content: string
  }[]
}



export default function Register() {
  const [numSection, setNumberSection] = useState(0);
  const sections: Sections[] = [
    {
      id: 1,
      title: 'Cadastro',
      fields: [{
        title: 'Name',
        content: 'Digite seu nome',
      },
      {
        title: 'Email',
        content: 'Digite seu email',
      },
      {
        title: 'Senha',
        content: 'Digite sua senha',
      },
      {
        title: 'Repita a senha',
        content: 'Repita sua senha',
      },
      ]
    },
    {
      id: 2,
      title: 'Passo 2',
      fields: [
        {
          title: 'CPF',
          content: 'Digite seu cpf'
        }
      ]
    },
    {
      id: 3,
      title: 'Passo 3',
      fields: [
        {
          title: '1',
          content: 'Sulamerica'
        },
        {
          title: '2',
          content: 'Unimed'
        },
        {
          title: '3',
          content: 'SAUDE LTDA'
        }
      ]
    }
  ]

  return (
    <VStack flex={1} alignItems={'center'} p={5}>
      <Title>{sections[numSection].title}</Title>
      <Box w={'100%'}>
        {numSection == 2 ?
          sections[2].fields.map(field => {
            return <Checkbox value={field.content} key={field.title}>{field.content}</Checkbox>
          })
          :
          sections[numSection].fields.map(({ title, content }) => {
            const type = title == "Senha" || title == "Repita a senha" ? "password" : "text"
            return <InputFromUser label={title} placeholder={content} type={type} key={title} />
          })
        }
      </Box>

      <Button
        w="100%"
        bg={'blue.800'}
        mt={10}
        borderRadius={'lg'}
        onPress={() => numSection < sections.length - 1 ? setNumberSection(numSection + 1) : numSection}
      > Avançar</Button>

      {numSection > 0 &&
        <Button
          w="100%"
          bg={'green.400'}
          mt={10}
          borderRadius={'lg'}
          onPress={() => numSection > 0 ? setNumberSection(numSection - 1) : numSection}
        >Voltar</Button>}



    </VStack >
  );
}
