import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { systemPrompt } from './systemPrompt';

export async function runVercelAgent(messages: any[]) {
  return streamText({
    model: openai('gpt-4o'),
    system: systemPrompt,
    messages
  });
}