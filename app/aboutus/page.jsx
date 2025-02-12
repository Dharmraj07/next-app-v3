import Link from "next/link";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

const AboutUs = () => {
  return (
    <div>
      <h1>Team Members</h1>
      <ul>
        {details.map((member) => (
          <li key={member.id}>
            <Link href={`/aboutus/${member.id}`}>{member.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutUs;
