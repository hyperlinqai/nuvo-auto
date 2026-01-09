import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, Calendar, AlertCircle, Loader2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface DividendNews {
    title: string;
    link: string;
    pubDate: string;
    description: string;
}

const RecentDividends = () => {
    const [news, setNews] = useState<DividendNews[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDividends = async () => {
            try {
                // Using allorigins as a CORS proxy
                const RSS_URL = 'https://www.5paisa.com/rss/news.xml';
                const PROXY_URL = `https://api.allorigins.win/raw?url=${encodeURIComponent(RSS_URL)}`;

                const response = await fetch(PROXY_URL);
                if (!response.ok) throw new Error('Failed to fetch news feed');

                const text = await response.text();
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(text, "text/xml");
                const items = xmlDoc.querySelectorAll("item");

                const dividendItems: DividendNews[] = [];

                items.forEach(item => {
                    const title = item.querySelector("title")?.textContent || "";
                    const description = item.querySelector("description")?.textContent || "";

                    // Filter for "Dividend" keyword in title or description (case insensitive)
                    if (title.toLowerCase().includes("dividend") || description.toLowerCase().includes("dividend")) {
                        dividendItems.push({
                            title,
                            link: item.querySelector("link")?.textContent || "#",
                            pubDate: item.querySelector("pubDate")?.textContent || "",
                            description: description.replace(/<[^>]*>/g, '').slice(0, 150) + "..." // Strip HTML and truncate
                        });
                    }
                });

                setNews(dividendItems);
            } catch (err) {
                console.error("Error fetching dividends:", err);
                setError("Unable to load latest dividend news at the moment. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchDividends();
    }, []);

    const formatDate = (dateString: string) => {
        try {
            return new Date(dateString).toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        } catch {
            return dateString;
        }
    };

    return (
        <div className="pt-36 min-h-screen bg-slate-50">
            <Helmet>
                <title>Recent Dividends | SATS Finserv</title>
                <meta name="description" content="Stay updated with the latest dividend announcements and corporate actions from Indian stock markets." />
            </Helmet>

            {/* Hero Section */}
            <section className="bg-slate-900 text-white py-16">
                <div className="container-narrow text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Recent Dividends
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-2xl mx-auto"
                    >
                        Track the latest dividend declarations and corporate actions to make informed investment decisions.
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="container-narrow">

                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20">
                            <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
                            <p className="text-slate-600">Fetching latest market updates...</p>
                        </div>
                    ) : error ? (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center max-w-2xl mx-auto">
                            <AlertCircle className="w-10 h-10 text-red-500 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-red-900 mb-2">Something went wrong</h3>
                            <p className="text-red-700">{error}</p>
                            <div className="mt-6">
                                <a
                                    href="https://www.5paisa.com/news/corporate-actions"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                                >
                                    Visit Source Directly <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    ) : news.length === 0 ? (
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
                            <FileText className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-slate-900 mb-2">No Recent Dividend News</h3>
                            <p className="text-slate-500 mb-6">We couldn't find any recent news items specifically mentioning dividends in the feed.</p>
                            <a
                                href="https://www.5paisa.com/news/corporate-actions"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Check All Corporate Actions
                            </a>
                        </div>
                    ) : (
                        <div className="grid gap-6">
                            <div className="flex justify-between items-center mb-6">
                                <p className="text-sm text-slate-500">
                                    Source: 5paisa Market News
                                </p>
                            </div>

                            {news.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="bg-white rounded-xl border border-slate-200 hover:border-primary/50 hover:shadow-md transition-all duration-300 p-6"
                                >
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 text-xs font-medium text-primary mb-2">
                                                <Calendar className="w-3 h-3" />
                                                {formatDate(item.pubDate)}
                                            </div>
                                            <h3 className="text-lg font-semibold text-slate-900 mb-2 leading-tight group-hover:text-primary transition-colors">
                                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                                                    {item.title}
                                                </a>
                                            </h3>
                                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                                {item.description}
                                            </p>
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark"
                                            >
                                                Read Full Article <ExternalLink className="w-3 h-3" />
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default RecentDividends;
