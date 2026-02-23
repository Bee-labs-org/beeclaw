export function json(data: unknown): void {
  console.log(JSON.stringify(data, null, 2));
}

export function error(message: string, details?: unknown): void {
  const output: Record<string, unknown> = { error: message };
  if (details !== undefined) {
    output.details = details;
  }
  console.error(JSON.stringify(output, null, 2));
  process.exit(1);
}

export function success(data?: unknown): void {
  if (data === undefined) {
    console.log(JSON.stringify({ success: true }));
  } else {
    console.log(JSON.stringify(data, null, 2));
  }
}
