import { Text, Box, Button, Link, VStack } from 'native-base'
import { TouchableOpacity } from 'react-native';
import { Title } from './components/Title';
import { InputFromUser } from './components/InputFromUser';

export default function Login() {
  return (
    <VStack flex={1} alignItems={'center'} p={5}>
      <Title>Login</Title>
      <Box w={'100%'}>
        <InputFromUser label={'Email'} placeholder={'Digite seu email'} />
        <InputFromUser label={'Senha'} placeholder={'Digite sua senha'} type={'password'} />
      </Box>

      <Button
        w="100%"
        bg={'blue.800'}
        mt={10}
        borderRadius={'lg'}
      >Entrar</Button>

      <Link
        href={'#'}
        _text={{ color: 'blue.800', fontWeight: 'bold' }}
        mt={5}
      >Esqueceu sua senha?</Link>


      <Box
        w={'100%'}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Text>Ainda não possui conta </Text>
        <TouchableOpacity>
          <Text color={'blue.300'}>Cadastre-se</Text>
        </TouchableOpacity>
      </Box>

    </VStack >
  );
}
