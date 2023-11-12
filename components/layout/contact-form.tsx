"use client";

import { Trash } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { useForm, Resolver } from "react-hook-form"

import { Input } from "@/components/shared/input"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/shared/form"
import { Separator } from "@/components/shared/separator"
import { Heading } from "@/components/shared/heading"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/select"
import Image from "next/image";



type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
}

const resolver: Resolver<FormValues> = async (values) => {
    return {
        values: values.firstName ? values : {},
        errors: !values.firstName
            ? {
                firstName: {
                    type: "required",
                    message: "This is required.",
                },
            }
            : {},
    }
}

const ContactForm: React.FC = () => {

    const form = useForm<FormValues>({ resolver });
    const onSubmit = async (data: FormValues) => { };

    return (
        <div className="bg-white relative shadow-xl border border-2 rounded-lg items-center  flex">
            <div
                className="relative w-1/2"
            >
                <Image
                    width={1000}
                    height={1000}
                    src="/people-generating-images-using-artificial-intelligence-laptop.jpg"
                    alt="People generating images using artificial intelligence laptop"
                />
            </div>

            <div className="absolute h-full left-1/3 bg-white">
                <div className="flex flex-1 text-center items-center justify-between">
                    <Heading title={"Contact us"} description={"contact us"} />
                </div>
                <Separator />
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-4  min-w-[300px] p-4">
                        <div className="">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>First name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="First name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </form>
                </Form>
            </div>

        </div>
    );
};

export default ContactForm;