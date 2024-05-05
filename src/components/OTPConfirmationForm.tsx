import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
const formSchema = z.object({
    code: z.string().min(5, {
        message: 'Code must be at least 5 characters.',
    }),
});

const OTPConfirmationForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            code: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="code"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tasdiqlash kodini kiriting</FormLabel>
                            <FormControl>
                                <InputOTP maxLength={5} {...field}>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={0} />
                                        <InputOTPSlot index={1} />
                                        <InputOTPSlot index={2} />
                                        <InputOTPSlot index={3} />
                                        <InputOTPSlot index={4} />
                                    </InputOTPGroup>
                                </InputOTP>
                            </FormControl>
                        </FormItem>
                    )}
                />

                <Button>Tasdiqlash</Button>
            </form>
        </Form>
    );
};

export default OTPConfirmationForm;
