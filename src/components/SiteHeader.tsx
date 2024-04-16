import { LogoIcon } from '@/components/Icons';
import SiteHeaderMobile from '@/components/SiteHeaderMobile';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { navList } from '@/mock/nav-list';

const SiteHeader = () => {
    return (
        <header className="bg-gradient-to-r py-[23px] md:from-white md:from-60% md:to-[#800A7A] md:to-40%">
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="flex w-[60%] items-center justify-between">
                        <a href="/">
                            <LogoIcon />
                            <span className="sr-only">MaxWay icon</span>
                        </a>

                        <NavigationMenu className="hidden md:flex">
                            <NavigationMenuList className="gap-10">
                                {navList.map((item) => (
                                    <NavigationMenuItem key={item.label}>
                                        <NavigationMenuLink href={item.path}>
                                            {item.label}
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    <div className="hidden w-[40%] items-center justify-between pl-14 md:flex">
                        <a
                            className='flex items-center gap-4 text-white before:content-[url("./phone-icon.svg")]'
                            href="tel:+998712005400"
                        >
                            <span>
                                <span className="block text-sm">(+99871)</span>
                                <span className="block text-2xl font-bold">
                                    200-54-00
                                </span>
                            </span>
                        </a>

                        <span className="h-11 w-[1px] bg-white"></span>

                        <a
                            className='flex items-center gap-4 text-white before:content-[url("./cart-icon.svg")]'
                            href="/cart"
                        >
                            <span>
                                <span className="block text-2xl font-bold">Korzina</span>
                                <span className="block text-sm">0.00 UZS</span>
                            </span>
                        </a>
                    </div>

                    <SiteHeaderMobile />
                </div>
            </div>
        </header>
    );
};

export default SiteHeader;
