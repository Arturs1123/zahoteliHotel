import Navbar from "./Navbar"
import PendingShow from "./PendingShow"

export default function RegisteredLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode
}) {
	return (
		<section className="LC-container">
			<PendingShow registrationDate="18 марта 2024" />
			<Navbar/>
			{/* Include shared UI here e.g. a header or sidebar */}
			{children}
		</section>
	)
}