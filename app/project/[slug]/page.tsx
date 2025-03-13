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
  const resolvedParams = await Promise.resolve(params);
  const { slug } = resolvedParams;

  return <UniqueProjectSlug slug={slug} />;
}

export async function generateStaticParams(): Promise<SlugType[]> {
  return [
    { slug: "swytchbike-store-locator" },
    { slug: "swytchbike-main-site" },
    { slug: "swytch-tools-zendesk-app" },
    { slug: "simpsons-api" },
    { slug: "kaizen-physiotherapy" },
    { slug: "pathfinder" },
  ];
}
