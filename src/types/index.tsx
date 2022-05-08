export type FormProps = {
	username: string;
	handleSetUsername: (username: string) => void;
	handleSetUser: (user: User) => void;
};

export type ProfileProps = {
	user: User;
};

export type User = {
	id: number;
	url: string;
	blog: string;
	bio: string;
	name: string;
	email: string;
	company: string;
	login: string;
	avatar: string;
};
