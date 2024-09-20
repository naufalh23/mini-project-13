import ShareButton from "@/components/share";
import Wrapper from "@/components/wrapper"
import { formatDate } from "@/helper/formatDate";
import { getEventSlug, getEvents } from "@/lib/event"
import Link from "next/link";

export const revalidate = 3600

export const generateStaticParams = async () => {
    const { events } = await getEvents()

    return events.map((events: any) => ({
        params: {
            slug: events.slug
        }
    }))
}

export async function generateMetadata({ params }: { params: { slug: string }}) {
    const { events } = await getEventSlug(params.slug)

    return {
        title: events.title,
        description: events.title,
        authors: events.author.name,
        openGraph: {
            images: [events.image],
        },
    }
}

export default async function BlogDetail({ params }: { params: { slug: string }}) {
    const { events } = await getEventSlug(params.slug)
    return (
        <Wrapper>
            <div className="flex">
                <div className="flex-1 sticky max-md:hidden top-[100px] h-full">
                    <Link href={`/`} className="flex items-center gap-2">
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                        </svg>
                        back
                    </Link>
                    <ShareButton slug={events.slug} className="mt-5"/>
                </div>
                <div className="flex-[2] pr-52 max-lg:pr-0">
                    <h5 className="mb-2 text-[32px] max-md:text-[24px] font-bold tracking-tight text-gray-900 ">{events.title}</h5>
                    <div className="flex gap-1">
                        <p className="font-bold text-[18px] max-md:text-[14px]">{events.author.name}</p>
                        ∙
                        <p className="text-[18px] max-md:text-[14px]">{formatDate(events.createdAt)}</p>
                    </div>
                    <ShareButton slug={events.slug} className="hidden max-md:block" />
                    <img className="h-[350px] max-sm:h-[200px] max-md:h-[300px] w-full my-5 shadow" src={events.image} alt={events.title} />
                    <div>{events.content}</div>
                </div>
            </div>
        </Wrapper>
    )
}