import Link from "next/link";

const researchPapers = [
  {
    title: "Consistency guarantees in distributed ML training",
    href: "/research/consistency-guarantees-in-distributed-ml-training",
    authors: "Merin Labs",
    date: "2024",
    topics: ["Distributed Systems", "Machine Learning"],
    abstract: "Exploring consistency models for parameter synchronization...",
  },
  {
    title: "Edge-native inference: a performance study",
    href: "/research/edge-native-inference-a-performance-study",
    authors: "Merin Labs",
    date: "2024",
    topics: ["Edge Computing", "ML Inference"],
    abstract: "Benchmarking inference performance across edge topologies...",
  },
];

export default function ResearchPage() {
  const papersByYear = researchPapers.reduce((acc, paper) => {
    const year = paper.date;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(paper);
    console.log(acc);
    return acc;
  }, {} as Record<string, typeof researchPapers>);

  return (
    <div className="container mx-auto px-4 pt-32">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-semibold text-center tracking-tight">
          Research
        </h1>
        <p className="text-2xl mt-4 text-center">
          A collection of research papers and publications we&apos;ve written.
        </p>
      </section>
      <section className="max-w-3xl mx-auto mt-28">
        <div className="mt-6">
          {Object.entries(papersByYear).map(([year, papers]) => (
            <div key={year} className="flex gap-24">
              <h2 className="text-2xl font-semibold tracking-tight">{year}</h2>
              <div className="flex flex-col gap-14 w-full">
                {papers.map((paper) => (
                  <Link
                    href={paper.href}
                    className="hover:opacity-65 transition-opacity"
                    key={paper.href}
                  >
                    <div className="w-full h-64 bg-muted" />
                    <h3 className="text-xl font-medium tracking-tight mt-4">
                      {paper.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {paper.abstract}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
