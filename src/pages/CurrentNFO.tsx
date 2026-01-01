import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import { Helmet } from "react-helmet-async";
import { Loader2, AlertTriangle, ExternalLink, Calendar, Info, Building, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NFOItem {
    title: string;
    pubDate: string;
    link: string;
    fundHouse: string;
    schemeType: string;
    schemeCategory: string;
    openDate: string;
    closeDate: string;
}

const CurrentNFO = () => {
    const [nfos, setNfos] = useState<NFOItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNFOs = async () => {
            try {
                const proxyUrl = "https://api.allorigins.win/get?url=";
                const targetUrl = encodeURIComponent("https://portal.amfiindia.com/rssNAV.aspx?nfo=y");

                const response = await fetch(`${proxyUrl}${targetUrl}`);
                const data = await response.json();

                if (!data.contents) throw new Error("No content received");

                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(data.contents, "text/xml");
                const items = xmlDoc.querySelectorAll("item");

                const parsedItems: NFOItem[] = [];
                items.forEach((item) => {
                    const rawDescription = item.querySelector("description")?.textContent || "";

                    // Parse HTML inside description
                    const descParser = new DOMParser();
                    const descDoc = descParser.parseFromString(rawDescription, "text/html");

                    // Extract data from table cells
                    // Expected table rows: Mutual Fund, Scheme Type, Scheme Category, Launch Date, Close Date
                    const getVal = (label: string) => {
                        const rows = descDoc.querySelectorAll("tr");
                        for (let i = 0; i < rows.length; i++) {
                            const cells = rows[i].querySelectorAll("td");
                            if (cells.length >= 2 && cells[0].textContent?.includes(label)) {
                                return cells[1].textContent?.trim() || "";
                            }
                        }
                        return "";
                    };

                    parsedItems.push({
                        title: item.querySelector("title")?.textContent || "Unknown Scheme",
                        pubDate: item.querySelector("pubDate")?.textContent || "",
                        link: item.querySelector("link")?.textContent || "",
                        fundHouse: getVal("Mutual Fund"),
                        schemeType: getVal("Scheme Type"),
                        schemeCategory: getVal("Scheme Category"),
                        openDate: getVal("Launch Date") || getVal("Open Date"), // AMFI sometimes changes labels
                        closeDate: getVal("Close Date")
                    });
                });

                setNfos(parsedItems);
                setLoading(false);
            } catch (err) {
                console.error("Failed to fetch NFOs", err);
                setError("Unable to load latest NFO data. Please visit AMFI India directly.");
                setLoading(false);
            }
        };

        fetchNFOs();
    }, []);

    return (
        <>
            <Helmet>
                <title>Current NFOs | SATS FINSERV</title>
                <meta
                    name="description"
                    content="Track the latest Mutual Fund New Fund Offers (NFOs) in India. Updated directly from AMFI."
                />
            </Helmet>

            <div className="min-h-screen flex flex-col bg-slate-50">
                <Header solid />

                <main className="flex-1 pt-24 pb-20 md:pt-32 md:pb-28">
                    <div className="container-narrow px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-4xl mx-auto"
                        >
                            <div className="text-center mb-12">
                                <div className="inline-flex p-3 bg-blue-50 rounded-full text-blue-600 mb-6">
                                    <Calendar className="w-8 h-8" />
                                </div>
                                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Current New Fund Offers</h1>
                                <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                                    Explore newly launched mutual fund schemes open for subscription.
                                    <span className="block text-xs mt-2 text-slate-400">Data Source: AMFI India</span>
                                </p>
                            </div>

                            {loading ? (
                                <div className="flex flex-col items-center justify-center py-20">
                                    <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
                                    <p className="text-slate-500">Fetching latest NFOs from AMFI...</p>
                                </div>
                            ) : error ? (
                                <div className="bg-red-50 border border-red-100 rounded-2xl p-8 text-center">
                                    <AlertTriangle className="w-10 h-10 text-red-500 mx-auto mb-4" />
                                    <h3 className="text-lg font-semibold text-red-700 mb-2">Unavailable</h3>
                                    <p className="text-red-600 mb-6">{error}</p>
                                    <Button
                                        variant="outline"
                                        className="border-red-200 text-red-700 hover:bg-red-100 hover:text-red-900"
                                        onClick={() => window.open("https://www.amfiindia.com/new-fund-offer", "_blank")}
                                    >
                                        View on AMFI Website <ExternalLink className="w-4 h-4 ml-2" />
                                    </Button>
                                </div>
                            ) : nfos.length === 0 ? (
                                <div className="bg-white rounded-2xl border border-slate-100 p-12 text-center shadow-sm">
                                    <Info className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                                    <h3 className="text-xl font-medium text-slate-900 mb-2">No Active NFOs</h3>
                                    <p className="text-slate-500">There are currently no ongoing New Fund Offers listed by AMFI.</p>
                                </div>
                            ) : (
                                <div className="grid gap-6">
                                    {nfos.map((nfo, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6"
                                        >
                                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                                <div className="space-y-4 flex-1">
                                                    <div>
                                                        <h3 className="text-xl font-bold text-slate-900 text-balance">{nfo.title}</h3>
                                                        {nfo.fundHouse && (
                                                            <div className="flex items-center gap-2 text-slate-500 mt-1">
                                                                <Building className="w-4 h-4" />
                                                                <span className="text-sm font-medium">{nfo.fundHouse}</span>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="flex flex-wrap gap-3">
                                                        {nfo.schemeCategory && (
                                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md border border-slate-200">
                                                                <Tag className="w-3 h-3" /> {nfo.schemeCategory}
                                                            </span>
                                                        )}
                                                        {nfo.schemeType && (
                                                            <span className="inline-flex items-center px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md border border-slate-200">
                                                                {nfo.schemeType}
                                                            </span>
                                                        )}
                                                    </div>

                                                    <div className="grid grid-cols-2 gap-4 max-w-sm pt-2">
                                                        <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                                                            <p className="text-xs text-green-700 font-medium mb-1">Open Date</p>
                                                            <p className="text-sm font-bold text-green-900">{nfo.openDate || "N/A"}</p>
                                                        </div>
                                                        <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                                                            <p className="text-xs text-red-700 font-medium mb-1">Close Date</p>
                                                            <p className="text-sm font-bold text-red-900">{nfo.closeDate || "N/A"}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col gap-3 shrink-0 md:text-right">
                                                    {nfo.link && (
                                                        <Button
                                                            variant="default"
                                                            size="sm"
                                                            className="gap-2"
                                                            onClick={() => window.open(nfo.link, "_blank")}
                                                        >
                                                            View Details <ExternalLink className="w-3 h-3" />
                                                        </Button>
                                                    )}
                                                    <span className="text-xs text-slate-400">Published: {nfo.pubDate.split(' ').slice(0, 4).join(' ')}</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}

                            <div className="mt-12 text-center">
                                <p className="text-sm text-slate-400">
                                    Disclaimer: Information is sourced dynamically from AMFI. SATS FINSERV is not responsible for inaccuracies in the feed.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default CurrentNFO;
