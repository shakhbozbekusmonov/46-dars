import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
    email: z.string().min(2, {
        message: 'Email must be at least 2 characters.',
    }),
    password: z.string().min(2, {
        message: 'Password must be at least 2 characters.',
    }),
});

const LoginForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Kirish</CardTitle>
            </CardHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="email">Elektron pochta</Label>
                            <Input id="email" {...form.register('email')} />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="password">Parol</Label>
                            <Input
                                id="password"
                                type="password"
                                {...form.register('password')}
                            />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Kirish</Button>
                    </CardFooter>
                </form>
            </Form>
        </Card>
    );
};

export default LoginForm;
