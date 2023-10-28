"use client";

import { useForm } from "react-hook-form";


type FormData = {
    firstName: string;
    lastName: string;
};


const Form = () => {
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>();

    const onSubmit = handleSubmit(({ firstName, lastName }) => {
        console.log(firstName, lastName);
    }); //

    return (
        <form onSubmit={onSubmit} >
            asdljaslkdjklasjdlkasjdklasjd
            <label>First Name</label>
            <input {...register("firstName")} />
            <label>Last Name</label>
            <input {...register("lastName")} />
            <button
                type="button"
                onClick={() => {
                    setValue("lastName", "luo");
                }}
            >
                SetValue
            </button>
            <input type="submit" />
        </form>
    );
}

export default Form;