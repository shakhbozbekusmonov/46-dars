import AuthTabs from '@/components/AuthTabs';
import { UserIcon } from '@/components/Icons';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const AuthDialog = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <div className="text-white">
                    <UserIcon />
                    <span className="sr-only">User icon</span>
                </div>
            </DialogTrigger>
            <DialogContent>
                <AuthTabs />
            </DialogContent>
        </Dialog>
    );
};

export default AuthDialog;
