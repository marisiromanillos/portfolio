import UniqueProjectSlug from "@/components/UniqueProjectSlug";

// Define params type
interface PageParams {
  params: {
    slug: string;
  };
}

// Define slug type for generateStaticParams
interface SlugType {
  slug: string;
}

// Make component async and await params
export default async function ProjectPage({ params }: PageParams) {
  // Await params before accessing slug
  const { slug } = await params;

  return <UniqueProjectSlug slug={slug} />;
}

export async function generateStaticParams(): Promise<SlugType[]> {
  return [
    { slug: "route1" },
    { slug: "route2" },
    { slug: "route3" },
    { slug: "route4" },
    { slug: "route5" },
  ];
}
