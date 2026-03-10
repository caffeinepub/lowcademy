# Lowcademy – Programs Page Rebuild

## Current State
The ProgramsPage exists in App.tsx with sections: Hero, Upcoming Cohort (with instructor card), Who This Program Is For (4 cards), What Makes This Program Different (4 cards), and CTA. Apply buttons navigate to the Contact page. No application popup form exists.

## Requested Changes (Diff)

### Add
- Program Learning Flow section (White BG): "How the Cohort Works" – visual timeline with 5 phases showing phase name + activity items
- Additional Learning Support section (White BG): "Beyond the Program" – 4 support cards (Career Roadmap, Interview Prep, Industry Insights, Community Interaction)
- Application Form popup (Dialog): triggered by all "Apply Now" buttons; fields: Name, Email, Current Role, Years of Experience, Message; submit shows confirmation message
- Secondary hero button label changed to "View Program Overview" (scroll to cohort section)

### Modify
- Hero headline: "Join the Next Live Cohort"
- Hero secondary button label: "View Program Overview"
- Upcoming Cohort section: remove instructor card entirely; center layout; keep program name, description, badges (Start Date, End Date, Mode), Apply Now + View Curriculum buttons
- Who This Program Is For: update card descriptions to match new spec text
- What Makes This Program Different: move to Light Grey BG; update card titles/descriptions to match new spec
- Final CTA: headline "Apply for the Next Cohort", subheadline "Limited seats to ensure interactive learning."
- All Apply Now buttons open the popup instead of navigating to contact page

### Remove
- Instructor card from Upcoming Cohort section

## Implementation Plan
1. Add `applyOpen` state and Dialog-based ApplicationFormModal component in ProgramsPage
2. Replace hero buttons – primary opens apply modal, secondary scrolls to cohort
3. Rebuild Upcoming Cohort section: full-width centered layout, 3 detail badges, Apply Now + View Curriculum buttons
4. Update Who This Program Is For cards (descriptions only)
5. Add Program Learning Flow section after Who This Is For: horizontal or vertical timeline with Phase 1–4 + Final Phase
6. Update What Makes This Program Different section to Light Grey BG with correct content
7. Add Beyond the Program section (White BG) with 4 support cards
8. Update CTA section text and wire Apply Now to modal
9. Add ApplicationFormModal with form fields + confirmation state
