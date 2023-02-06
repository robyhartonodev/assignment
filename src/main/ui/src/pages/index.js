import {Inter} from '@next/font/google'
import Layout from "@/components/layout";
import {useRouter} from "next/router";
import {useEffect} from "react";

const inter = Inter({subsets: ['latin']})

export default function Index() {
    const router = useRouter();

    // Redirect initial url call, then let nextjs router handles the routing
    useEffect(() => {
        router.push(window.location.pathname)
            .then(() => {
            }).catch(() => {
            router.push('/404')
            })
    }, [])

    return (
        <Layout>
            index
        </Layout>
    )
}
