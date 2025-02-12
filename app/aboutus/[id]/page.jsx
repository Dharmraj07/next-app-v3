
// import { useRouter } from "next/router";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

const TeamMember =async ({params}) => {
  // const router = useRouter();
 // const { id } = router.query;
 const id = (await params).id


  // Wait until router is ready to avoid undefined
  // if (!router.isReady) return <p>Loading...</p>;

  // Convert id to number and find team member
  const member = details.find((person) => person.id === Number(id));

  // Show error if the member is not found
  if (!member) return <h1>Developer doesn't exist</h1>;

  return (
    <div>
      <h1>{member.name}</h1>
      <p>{member.role}</p>
    </div>
  );
};

export default TeamMember;
