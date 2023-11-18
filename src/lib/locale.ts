type subList = {
    head: string;
    text: string;
}

type ContentProps = {
    head: string;
    desc: string;
    img: {
        url: string;
        alt: string;
    };
    list: subList[];
}



export type { ContentProps }