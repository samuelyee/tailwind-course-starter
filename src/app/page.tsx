import Image from 'next/image';
export default function Home() {
    return (
        <main>
            <header>
                <nav className="sticky top-0 bg-gradient-to-r from-rose-500 to-pink-500">
                    <div className="flex items-center p-2 gap-2">
                        <Image
                            src="/assets/images/logo-inverted.png"
                            alt="logo"
                            width={50}
                            height={50}
                        />
                        <div className="font-bold text-2xl">
                            tw
                            <span className="text-sky-900">:mf</span>
                        </div>
                        <div className="block md:hidden ml-auto pr-4 my-auto">
                            <div>
                                <div className="h-1 w-8 rounded-full bg-zinc-200"></div>
                                <div className="h-1 w-8 rounded-full bg-zinc-200 mt-1"></div>
                                <div className="h-1 w-8 rounded-full bg-zinc-200 mt-1"></div>
                            </div>
                        </div>
                        <div className="flex-1 md:flex hidden items-center justify-end">
                            <div className="menu-item">
                                <span>Home</span>
                            </div>
                            <div className="menu-item">
                                <span>Lineup</span>
                            </div>
                            <div className="menu-item group">
                                <span>Tickets</span>
                                <div className="group-hover:block absolute hidden top-full bg-pink-500 right-0 whitespace-nowrap rounded-b text-right">
                                    <div className="p-4 font-bold hover:bg-white/5 hover:text-zinc-200 transition-colors ease-in-out cursor-pointer text-zinc-200">
                                        <span>Single day ticket</span>
                                    </div>
                                    <div className="p-4 font-bold hover:bg-white/5 hover:text-zinc-200 transition-colors ease-in-out cursor-pointer text-zinc-200">
                                        <span>7 day ticket</span>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-item">
                                <span>Support</span>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </main>
    );
}
