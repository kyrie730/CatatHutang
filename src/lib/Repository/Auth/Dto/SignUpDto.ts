import type { SignInDto } from './SignInDto';

export interface SignUpDto extends SignInDto {
	name: string;
}
