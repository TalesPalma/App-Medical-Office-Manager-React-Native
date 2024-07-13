import { Image, Text, View } from "native-base";
import Logo from '../assets/man-doctor.png';
import { ReactNode } from "react";


interface TitleProps {
  children: ReactNode
}


export const Title = ({ children, ...rest }: TitleProps) => {
  return (
    <View>
      <Image source={Logo} alt={'logo'} size={'xl'} />
      <Text
        fontSize={'4xl'}
        fontWeight={'bold'}
        color={'gray.500'}
        textAlign={'center'}
        {...rest}
      >{children}</Text>
    </View>
  );
}
