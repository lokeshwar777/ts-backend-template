export enum Role {
	USER = "USER",
	ADMIN = "ADMIN",
	GUEST = "GUEST",
}

export interface User {
	readonly id: string;
	fullName: string;
	username: string;
	email: string;
	password: string;
	role: Role;
	isVerified: boolean;
	createdAt: Date;
	updatedAt: Date;
}
