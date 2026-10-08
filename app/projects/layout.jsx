import Footer from "@/components/Footer";

export const metadata = {
	title: "Dony Al-Uzzam | Projects",
	description:
		"Selected work and case studies by Dony Al-Uzzam — production systems, dashboards, CMS platforms, government applications, and AI products.",
};

export default function Layout({ children }) {
	return (
		<>
			{children}
			<Footer />
		</>
	);
}
