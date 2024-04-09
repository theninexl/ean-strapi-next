import { API_URL,STRAPI_URL } from "../config";

export async function getWorks () {
  const res = await fetch(`${API_URL}/works?populate[work_categories][fields][0]=Name&populate[Cover_picture][fields][1]=url`)
  if (!res.ok) {
    throw new Error('Something went wrong');
  }
  const { data } = await res.json();

  return data.map(({attributes,id}) => {
    const { Title, Description } = attributes;
    const { url:cover } = attributes.Cover_picture.data.attributes
    return { id, Title, Description, cover }
  })
}

export function getCoverImage(attributes ) {
  return `${STRAPI_URL}${attributes}`
}