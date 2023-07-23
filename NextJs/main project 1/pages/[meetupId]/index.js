import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
	return (
		<MeetupDetail
			image="https://images.unsplash.com/photo-1519922639192-e73293ca430e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
			title="first title"
			address="lol street"
			desciption="first meetup"
		/>
	);
}

export async function getStaticPaths() {
	return {
		fallback : false,
		paths: [
			{
				params: {
					meetupId: "m1",
				},
			},
			{
				params: {
					meetupId: "m2",
				},
			},
		],
	};
}

export async function getStaticProps(context) {
	const meetupId = context.params.meetupId;

	// console.log(meetupId);
	//always need to return obj
	return {
		props: {
			meetupData: {
				image: "https://images.unsplash.com/photo-1519922639192-e73293ca430e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
				id: "m1",
				title: "First Meetup",
				address: "some lol Street",
			},
		},
		revalidate: 10,
	};
}
export default MeetupDetails;
