import Link from "next/link";

const blogPosts = [
  {
    title: "Understanding Raft consensus in distributed databases",
    href: "/blog/raft-consensus",
    date: "March 2024",
    description:
      "A deep dive into how Raft maintains consistency across distributed nodes",
  },
  {
    title: "Optimizing ML model serving at the edge",
    href: "/blog/ml-model-serving-at-the-edge",
    date: "February 2024",
    description:
      "Techniques for reducing inference latency in edge deployments",
  },
];

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

export default function Home() {
  return (
    <div className="container mx-auto px-4 pt-52">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto">
        <h1 className="text-6xl font-semibold text-center tracking-tight">
          Investigating AI applications at scale
        </h1>
        <p className="text-2xl mt-4 text-center">
          Merin is a research lab exploring the intersection of edge computing,
          distributed systems, and machine learning at scale.
        </p>
      </section>
      {/* Blog Section */}
      <section className="max-w-5xl mx-auto mt-72">
        <h2 className="text-2xl font-semibold tracking-tight">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {blogPosts.map((post) => (
            <Link
              href={post.href}
              className="hover:opacity-65 transition-opacity"
              key={post.title}
            >
              <div className="w-full bg-muted h-72" />
              <h3 className="text-xl font-medium tracking-tight mt-4">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-0.5">
                {post.date}
              </p>
            </Link>
          ))}
        </div>
      </section>
      <section className="max-w-5xl mx-auto mt-32">
        <h2 className="text-2xl font-semibold tracking-tight">
          Latest Research
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {researchPapers.map((paper) => (
            <Link
              href={paper.href}
              className="hover:opacity-65 transition-opacity"
              key={paper.href}
            >
              <div className="w-full bg-muted h-72" />
              <h3 className="text-xl font-medium tracking-tight mt-4">
                {paper.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-0.5">
                {paper.date}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
