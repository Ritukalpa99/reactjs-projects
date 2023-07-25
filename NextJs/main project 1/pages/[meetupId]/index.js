import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
function MeetupDetails(props) {
	return (
		<MeetupDetail
			image={props.meetupData.image}
			title={props.meetupData.title}
			address={props.meetupData.address}
			description={props.meetupData.description}
		/>
	);
}

export async function getStaticPaths() {
	const client = await MongoClient.connect(
		"mongodb+srv://jinn:1a2b3c4d@cluster0.r8kcdqi.mongodb.net/meetups?retryWrites=true&w=majority"
	);

	const db = client.db();

	const meetupsCollection = db.collection("meetups");

	const meetups = await meetupsCollection.find({},{_id : 1}).toArray();

	return {
		fallback : false,
		paths: meetups.map(meetup => ({
			params : {meetupId : meetup._id.toString()}
		}))
		
		// [
		// 	{
		// 		params: {
		// 			meetupId: "m1",
		// 		},
		// 	},
		// 	{
		// 		params: {
		// 			meetupId: "m2",
		// 		},
		// 	},
		// ],
	};
}

export async function getStaticProps(context) {
	const meetupId = context.params.meetupId;

	// console.log(meetupId);
	const client = await MongoClient.connect(
		"mongodb+srv://jinn:1a2b3c4d@cluster0.r8kcdqi.mongodb.net/meetups?retryWrites=true&w=majority"
	);

	const db = client.db();

	const meetupsCollection = db.collection("meetups");

	const selectedMeetup = await meetupsCollection.findOne({_id : new ObjectId(meetupId)})

	client.close()
	//always need to return obj
	return {
		props: {
			meetupData: {
				id :selectedMeetup._id.toString(),
				title : selectedMeetup.title,
				address : selectedMeetup.address,
				image : selectedMeetup.image,
				description : selectedMeetup.description
			},
		},
		revalidate: 10,
	};
}
export default MeetupDetails;
