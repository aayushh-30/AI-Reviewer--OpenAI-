# CodeReview Backend

A lightweight Node.js backend for AI-assisted code review and prompt-based API handling.

## Project Structure

- `server.js` - App entry and server bootstrap.
- `src/index.js` - Application initialization.
- `src/controllers/ai.controllers.js` - AI controller endpoints.
- `src/routes/ai.routes.js` - Route definitions for AI endpoints.
- `src/services/api.services.js` - Service layer calling external AI APIs.
- `validators/prompt.validator.js` - Prompt validation logic.

## Setup

1. Install dependencies:

```
npm install
```

2. Start the server:

```
node server.js
```

By default the server listens on the port configured in `server.js` or the `PORT` environment variable.

## API (Quick)

- POST /api/ai/review - Accepts a JSON payload with a `prompt` (or structured input) and returns AI-generated review results. See `src/routes/ai.routes.js` and `src/controllers/ai.controllers.js` for details.

Example request body:

```
{
  "prompt": "Please review the following code snippet for bugs and style issues: ..."
}
```

## Prompt Engineering (Short)

The project uses concise, structured prompt engineering to improve AI responses and reliability:

- **Clear intent:** Each prompt begins with an explicit instruction describing the goal (e.g., "Review for bugs and security issues").
- **Context + constraints:** Prompts include the minimal necessary context (code snippet, file path, language) and constraints (format of the output, length limits).
- **Role framing:** When relevant, prompts frame the AI's role (e.g., "You are a senior JavaScript reviewer").
- **Validation:** `validators/prompt.validator.js` ensures required fields exist and enforces size/format limits before sending prompts to the AI service.
- **Safety & cost controls:** Prompts avoid asking for executable payloads or secrets, and the service layer controls model parameters (temperature, max tokens) to limit hallucination and cost.
- **Examples / few-shot:** For tasks that benefit from examples, short few-shot inputs are used to demonstrate expected output format.

These practices help produce consistent, actionable, and safe AI-generated reviews while keeping prompts small and focused.

## Next steps / Notes

- Adjust model parameters and token limits in `src/services/api.services.js` to tune creativity vs. determinism.
- Extend `prompt.validator.js` to add heuristics (e.g., detect very large code blobs) if needed.

---

If you want, I can also add example curl requests, expand the API docs, or include a CONTRIBUTING section.
