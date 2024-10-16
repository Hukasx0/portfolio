import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">404</h1>
                <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">Page Not Found</h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">Oops! The page you're looking for doesn't exist.</p>
                <div className="flex justify-center">
                    <Link href="/">
                        <Button className="flex items-center space-x-2">
                            <span>Go Home</span>
                        </Button>
                    </Link>
                </div>
            </div>
        </main>
    )
}