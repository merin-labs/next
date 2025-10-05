const teamMembers = [
  {
    name: "Adrian Lam",
    role: "Researcher",
    bio: "Adrian is a math student at UBC and works at Vercel. At Merin Labs, he brings practical ML engineering experience-building models, optimizing inference, and exploring how to deploy AI systems reliably at scale.",
  },
  {
    name: "Shubhaankar Sharma",
    role: "Researcher",
    bio: "Shubhaankar is a CS student at UBC conducting research at Systopia Labs with NVIDIA on real-time edge computing. At Merin Labs, he leads the distributed systems research-exploring consensus, fault tolerance, and performance guarantees in distributed environments.",
  },
];

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 pt-32">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-semibold text-center tracking-tight">
          Team
        </h1>
        <p className="text-2xl mt-4 text-center">
          The people that stand behind Merin Labs.
        </p>
      </section>
      <section className="max-w-3xl mx-auto mt-28">
        <div className="mt-6 space-y-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex gap-24">
              <h2 className="text-xl font-semibold tracking-tight w-1/3">
                {member.name}
              </h2>
              <div className="flex flex-col gap-14 w-full">
                <p className="text-sm text-muted-foreground mt-0.5">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
