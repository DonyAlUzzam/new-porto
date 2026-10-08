import Footer from "@/components/Footer";

export const metadata = {
	title: "Dony Al-Uzzam | About",
	description:
		"About Dony Al-Uzzam — Full Stack Developer with 10+ years of experience across backend, frontend, databases, APIs, and technical leadership.",
};

export default function Layout({ children }) {
	return (
		<>
			{children}
			<Footer />
		</>
	);
}
