import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: process.env.OPENAI_API_KEY,
    apiKey: process.env.OPENAI_API_ORGANIZATION_ID,
});

const openai = new OpenAIApi(configuration);

export default openai;