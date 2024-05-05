import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react';
import LoginForm from './LoginForm';
import OTPConfirmationForm from './OTPConfirmationForm';
import RegisterForm from './RegisterForm';

const AuthTabs = () => {
    const [showOTP, setShowOTP] = React.useState(false);

    return (
        <Tabs defaultValue="signin" className="pt-5">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Kirish</TabsTrigger>
                <TabsTrigger value="signup">Ro'yhatdan o'tish</TabsTrigger>
            </TabsList>
            <TabsContent value="signin">
                <LoginForm />
            </TabsContent>
            <TabsContent value="signup">
                {showOTP ? <OTPConfirmationForm /> : <RegisterForm setShowOTP={setShowOTP} />}
            </TabsContent>
        </Tabs>
    );
};

export default AuthTabs;
