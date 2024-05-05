import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
    first_name: z.string().min(2, {
        message: 'First name must be at least 2 characters.',
    }),
    last_name: z.string().min(2, {
        message: 'Last name must be at least 2 characters.',
    }),
    username: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
    }),
    email: z.string().min(2, {
        message: 'Email must be at least 2 characters.',
    }),
    password: z.string().min(2, {
        message: 'Password must be at least 2 characters.',
    }),
    confirm_password: z.string().min(2, {
        message: 'Confirm password must be at least 2 characters.',
    }),
});

const RegisterForm = ({ setShowOTP }: { setShowOTP: (value: boolean) => void }) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            first_name: '',
            last_name: '',
            username: '',
            email: '',
            password: '',
            confirm_password: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        setShowOTP(true);
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Ro'yhatdan o'tish</CardTitle>
            </CardHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="first_name">Ism</Label>
                            <Input
                                id="first_name"
                                type="text"
                                {...form.register('first_name')}
                            />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="last_name">Familiya</Label>
                            <Input
                                id="last_name"
                                type="text"
                                {...form.register('last_name')}
                            />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="username">Foydalanuvchi nomi</Label>
                            <Input
                                id="username"
                                type="text"
                                {...form.register('username')}
                            />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="email">Elektron pochta</Label>
                            <Input id="email" type="email" {...form.register('email')} />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="password">Parol</Label>
                            <Input
                                id="password"
                                type="password"
                                {...form.register('password')}
                            />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="confirm_password">Tasdiqlash paroli</Label>
                            <Input
                                id="confirm_password"
                                type="password"
                                {...form.register('confirm_password')}
                            />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit">Ro'yhatdan o'tish</Button>
                    </CardFooter>
                </form>
            </Form>
        </Card>
    );
};

export default RegisterForm;
