import { SignUp } from "@clerk/nextjs";

export default function Page() {
	return (
		<main className="flex flex-col items-center justify-center space-y-8 p-12">
			<h1>Meal Prep App</h1>
			<SignUp fallbackRedirectUrl={"/"} />
		</main>
	);
}
