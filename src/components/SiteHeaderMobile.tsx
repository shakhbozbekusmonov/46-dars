import { MenuIcon } from '@/components/Icons';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { navList } from '@/mock/nav-list';

const SiteHeaderMobile = () => {
    return (
        <Sheet>
            <SheetTrigger className="md:hidden">
                <MenuIcon />
                <span className="sr-only">Menu icon</span>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>MaxWay</SheetTitle>
                    <SheetDescription>Birinchi Milliy Fast-Food</SheetDescription>
                </SheetHeader>
                <NavigationMenu className="mt-10">
                    <NavigationMenuList className="flex flex-col items-start gap-4 space-x-0">
                        {navList.map((item) => (
                            <NavigationMenuItem key={item.label}>
                                <NavigationMenuLink href={item.path}>
                                    {item.label}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </SheetContent>
        </Sheet>
    );
};

export default SiteHeaderMobile;
