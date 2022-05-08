import {
	Heading,
	Avatar,
	Box,
	Center,
	Text,
	Stack,
	Link,
	Badge,
	useColorModeValue,
} from '@chakra-ui/react';
import { ProfileProps } from '../types';

export default function Profile({ user }: ProfileProps) {
	return (
		<Center py={6}>
			<Box
				maxW={'320px'}
				w={'full'}
				bg={useColorModeValue('white', 'gray.900')}
				boxShadow={'2xl'}
				rounded={'lg'}
				p={6}
				textAlign={'center'}
			>
				<Avatar size={'xl'} src={user.avatar} mb={4} pos={'relative'} />

				{user.name ? (
					<Heading fontSize={'2xl'} fontFamily={'body'}>
						{user.name}
					</Heading>
				) : (
					<Heading fontSize={'2xl'} fontFamily={'body'}>
						Usuário não encontrado
					</Heading>
				)}

				{user.login ? (
					<Text fontWeight={600} color={'gray.500'} mb={4}>
						{user.login}
					</Text>
				) : (
					<Text fontWeight={500} color={'gray.500'} mb={4}>
						Talvez este nome de usuário não exista :(
					</Text>
				)}

				<Text
					textAlign={'center'}
					color={useColorModeValue('gray.700', 'gray.400')}
					px={3}
				>
					{user.bio}
				</Text>

				<Stack mt={8} direction={'row'} spacing={4}>
					<Text
						textAlign={'center'}
						color={useColorModeValue('gray.700', 'gray.400')}
						px={3}
					>
						{user.company}
					</Text>
					<Text
						textAlign={'center'}
						color={useColorModeValue('gray.700', 'gray.400')}
						px={3}
					>
						{user.blog}
					</Text>
				</Stack>

				{user.email && (
					<Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
						<Badge px={2} py={1} fontWeight={'400'}>
							{user.email}
						</Badge>
					</Stack>
				)}

				{user.url && (
					<Link href="https://chakra-ui.com" isExternal color="teal.500">
						Ver Perfil
					</Link>
				)}
			</Box>
		</Center>
	);
}
