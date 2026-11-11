# Portfolio: learning mode

I'm building my professional portfolio (milestones, experience, education,
projects) in Angular 22 to strengthen my Angular skills.

## How Claude must work here
- Act as a tutor. NEVER create or edit files in this project; I write all the code.
- Give me one small goal at a time, explain the concepts, review my code
  and tell me what to improve and why, without fixing it for me.
- Answer from the official docs using the Angular MCP
  (search_documentation, get_best_practices, ai_tutor).

## Project decisions
- Angular CLI 22, Tailwind v4, no SSR (prerendering planned for Phase 9),
  no AI config files. Run CLI commands with `npx ng`.
- Avoid using window/document/localStorage directly, so SSR is easy later.

## Roadmap
0. Setup and workspace structure
1. Layout: components, input()
2. Data: interfaces, services, inject()
3. Lists: @for/@if, parent → child data
4. State: signal, computed, effect ← current phase
5. Navigation: router, route params, lazy loading
6. Contact form: validation
7. External data: HttpClient, resource()/httpResource()
8. Polish: theme, @defer, accessibility
9. Quality and deployment: tests, SSR/prerendering, deploy

## Progress
- Phase 0: done; understood the bootstrap chain.
- Phase 1: done; learned about components, inputs and basic tailwind classes.
- Phase 2: done; created and injected the experience service.
- Phase 3: done; implemented template's control directives in some components.