import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
	{
		id: "m1",
		title: "A first Meetup",
		image: "https://images.unsplash.com/photo-1519922639192-e73293ca430e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
		address: "Some address 5, 1234",
		description: "this is a first meetup",
	},
	{
		id: "m2",
		title: "A 2nd Meetup",
		image: "https://images.unsplash.com/photo-1598751337485-0d57b0c50b83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		address: "Some address 5, 1234",
		description: "this is a 2nd meetup",
	},
];

function HomePage() {
	return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
