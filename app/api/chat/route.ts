import { runVercelAgent } from '@/lib/ai/agent';

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();
  const result = await runVercelAgent(messages);
  return result.toDataStreamResponse();
}