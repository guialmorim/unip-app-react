import { useState, ChangeEvent, MouseEvent } from 'react';
import {
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Input,
	Button,
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { FormProps, User } from '../types';

const Form = ({ username, handleSetUsername, handleSetUser }: FormProps) => {
	const [inputTouched, setInputTouched] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleMapDataToUser = (data: any) => {
		const user: User = {
			id: data.id,
			name: data.name,
			email: data.email,
			avatar: data.avatar_url,
			login: data.login,
			bio: data.bio,
			blog: data.blog,
			company: data.company,
			url: data.url,
		};
		return user;
	};

	const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
		setIsLoading(true);
		const endpoint = `https://api.github.com/users/${username}`;
		const response = await fetch(endpoint);
		const data = await response.json();
		const user = handleMapDataToUser(data);
		handleSetUser(user);
		setIsLoading(false);
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		handleSetUsername(e.target.value);
		if (!inputTouched) setInputTouched(true);
	};

	const isError = username === '' && inputTouched;

	return (
		<>
			<FormControl isInvalid={isError}>
				<FormLabel htmlFor="email">Username</FormLabel>
				<Input
					id="email"
					type="email"
					value={username}
					onChange={handleInputChange}
					size="lg"
					variant="filled"
					colorScheme="teal"
				/>
				{!isError ? (
					<FormHelperText>Digite seu nome de usuário do github.</FormHelperText>
				) : (
					<FormErrorMessage>O username é obrigatório.</FormErrorMessage>
				)}
			</FormControl>
			<Button
				marginTop={5}
				isLoading={isLoading}
				loadingText="Buscando.."
				type="submit"
				onClick={handleSubmit}
				rightIcon={<FaArrowRight />}
				disabled={isError || isLoading || !inputTouched}
			>
				Procurar
			</Button>
		</>
	);
};

export default Form;
