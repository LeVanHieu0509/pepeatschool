import * as dotenv from "dotenv";
import { NextApiRequest, NextApiResponse } from "next";
// import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";
// import { OpenAIModel } from "src/plugins/chat-gpt/types/Model";
import OpenAI from "openai";
// Get your environment variables

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const body = req.body;
  const messages = body?.messages || [];

  try {
    const chatCompletion: any = await openai.chat.completions.create({
      messages: messages,
      model: "gpt-3.5-turbo",
    });

    const responseMessage = chatCompletion.choices[0].message?.content.trim();

    // console.log({ chatCompletion });
    res.status(200).json({
      message: responseMessage,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "An error occurred during ping to OpenAI. Please try again.",
    });
  }
}
