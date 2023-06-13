import {createClient} from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'



const client = createClient({
    projectId: "mktf9rq5",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: true
});


const builder =imageUrlBuilder(client);

export function urlFor(source){
    return builder.image(source);
}
export default client