import { useRouter } from "next/router";

function Team() {
	const details = [
		{
			id: "1",
			name: "Yash",
			role: "Senior Developer",
		},
		{
			id: "2",
			name: "Vaibhav",
			role: "Backend Developer",
		},
		{
			id: "3",
			name: "Suresh",
			role: "Frontent Developer",
		},
	];
	const router = useRouter();
	const urlId = router.query.Id;

    const teamDetails = details.find((dets) => dets.id === urlId)

    // console.log(`id is ${urlId}`);
    // console.log(teamDetails);
	return <>
     <h1>{ teamDetails.name}</h1>
    <h2>{  teamDetails.role}</h2> 
    </>;
}

export default Team;
