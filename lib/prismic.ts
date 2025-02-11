import * as prismic from "@prismicio/client"

const repositoryName = process.env.PRISMIC_REPOSITORY_NAME || "hello"
const accessToken = process.env.PRISMIC_ACCESS_TOKEN || "hello"

export const createClient = () => {
  const client = prismic.createClient(repositoryName, { accessToken })
  return client
}

