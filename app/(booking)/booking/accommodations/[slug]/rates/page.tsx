import { villas } from "@/app/data/villas";
import { notFound } from "next/navigation";
import RatesContent from "./components/RatesContent";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function RatesPage({ params }: PageProps) {
    const { slug } = await params;
    const villa = villas.find((v) => v.slug === slug);

    if (!villa) {
        notFound();
    }

    return <RatesContent villa={villa} />;
}
