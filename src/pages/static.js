import { Fragment } from "react";

export async function getStaticProps() {
    const req = await fetch(`https://vqueue.app/`)
    const html = await req.text();
    const seo = "Waitwhile Who?"
    return {
        props: {
            html,
            seo
        }
    };
}

export default function Static({html, seo}) {
    return <Fragment>
        {html}
        <br></br>
        <br></br>
        <br></br>
        {seo}
    </Fragment>
}