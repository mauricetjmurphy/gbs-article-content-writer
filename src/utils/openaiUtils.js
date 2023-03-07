import openai from "../config/openaiConfig";

export const generateResponse = async (
  prompt,
  model,
  temperature,
  max_tokens
) => {
  const response = await openai.createCompletion({
    model,
    prompt,
    temperature,
    max_tokens: max_tokens,
  });

  return response.data.choices[0].text;
};
