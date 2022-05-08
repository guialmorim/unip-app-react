import { useState } from 'react';
import {
	ChakraProvider,
	Box,
	VStack,
	Grid,
	theme,
	Heading,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import Form from './components/Form';
import Profile from './components/Profile';
import { User } from './types';

export const App = () => {
	const [username, setUsername] = useState('');
	const [user, setUser] = useState<User | null>(null);

	const handleSetUser = (user: User) => setUser(user);
	const handleSetUsername = (username: string) => setUsername(username);

	return (
		<ChakraProvider theme={theme}>
			<Box textAlign="center" fontSize="xl">
				<Grid minH="100vh" p={3}>
					<ColorModeSwitcher justifySelf="flex-end" />
					<VStack spacing={10}>
						<Heading as="h2" size="xl">
							GitHub Profile Finder
						</Heading>
						<Heading as="h3" size="lg">
							Encontre perfis do github aqui, basta digitar o username!
						</Heading>
						{user && <Profile user={user} />}
						<Form
							username={username}
							handleSetUsername={handleSetUsername}
							handleSetUser={handleSetUser}
						/>
					</VStack>
				</Grid>
			</Box>
		</ChakraProvider>
	);
};
