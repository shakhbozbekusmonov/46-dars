import {
    FacebookIcon,
    InstagramIcon,
    LogoIcon,
    TelegramIcon,
    TikTokIcon,
    YouTubeIcon,
} from '@/components/Icons';

const SiteFooter = () => {
    return (
        <footer className="body-font text-gray-600">
            <div className="container">
                <div className="mx-auto flex flex-col flex-wrap py-24 md:flex-row md:flex-nowrap md:items-center lg:items-start">
                    <div className="mx-auto w-64 flex-shrink-0 text-center md:mx-0 md:text-left">
                        <a className="flex items-center justify-center md:justify-start">
                            <LogoIcon />
                            <span className="sr-only">MaxWay icon</span>
                        </a>
                    </div>
                    <div className="-mb-10 mt-10 flex flex-grow flex-wrap text-center md:mt-0 md:text-left">
                        <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                            <h2 className="mb-3 text-xl font-semibold tracking-widest text-[#003846]">
                                Asosiy
                            </h2>
                            <ul className="mb-10 flex flex-col gap-5">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">
                                        Kompaniya haqida
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">
                                        Filiallar
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">
                                        Bolalar uchun
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                            <h2 className="mb-3 text-xl font-semibold tracking-widest text-[#003846]">
                                Qo’shimcha
                            </h2>
                            <ul className="mb-10 flex flex-col gap-5">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">
                                        Kompaniya haqida
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">
                                        Filiallar
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">
                                        Bolalar uchun
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full px-4 md:w-1/2 lg:w-1/4"></div>
                        <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                            <h2 className="mb-3 text-xl font-semibold tracking-widest text-[#003846]">
                                Biz bilan aloqa
                            </h2>
                            <nav className="mb-10 list-none">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">
                                        First Link
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">
                                        Second Link
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">
                                        Third Link
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">
                                        Fourth Link
                                    </a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <div className="container mx-auto flex flex-col flex-wrap py-4 pr-5 sm:flex-row">
                        <p className="text-center text-sm text-gray-500 sm:text-left">
                            © Maxway, 2024
                            <a
                                href="https://github.com/shakhbozbekusmonov"
                                rel="noopener noreferrer"
                                className="ml-1 text-gray-600"
                                target="_blank"
                            >
                                @shakhbozbekusmonov
                            </a>
                        </p>
                        <ul className="mt-2 inline-flex justify-center gap-6 sm:ml-auto sm:mt-0 sm:justify-start">
                            <a>
                                <YouTubeIcon />
                                <span className="sr-only">Youtube icon</span>
                            </a>
                            <a>
                                <FacebookIcon />
                                <span className="sr-only">Facebook icon</span>
                            </a>
                            <a>
                                <InstagramIcon />
                                <span className="sr-only">Instagram icon</span>
                            </a>
                            <a>
                                <TelegramIcon />
                                <span className="sr-only">Telegram icon</span>
                            </a>
                            <a>
                                <TikTokIcon />
                                <span className="sr-only">TikTok icon</span>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default SiteFooter;
