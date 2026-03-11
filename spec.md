# Lowcademy

## Current State
All main pages are live (Home, About, Programs, Courses, Corporate Training, Cohort Landing, Cohort Details, Event, Contact). The homepage has a BlogSection with 3 static blog post cards (tag, title, excerpt, read time, date, image). Clicking blog cards does nothing currently. The `Page` type has no blog entries. Navigation has no Blog link.

## Requested Changes (Diff)

### Add
- `blog` page type and `blog-detail` page type to the `Page` union type
- `BlogPage` component: full blog listing page with hero, search/filter by category, and a grid of all blog posts (expanded from the 3 on homepage to at least 6 posts)
- `BlogDetailPage` component: full article view with hero image, title, tag, date, read time, author (Ankit Gangrade), article body (rich markdown-style content), related posts section, and CTA
- Navigation: add "Blog" link in the header nav (desktop and mobile)
- Homepage BlogSection cards: clicking a card navigates to the blog detail page for that post
- Blog post data: a shared static array of blog posts (id, tag, title, excerpt, image, date, readTime, body content) used across BlogSection, BlogPage, and BlogDetailPage

### Modify
- `Page` type: add `"blog"` and `"blog-detail"`
- `App`: add routing for blog and blog-detail pages
- `BlogSection` on homepage: cards become clickable and navigate to `blog-detail` with the selected post
- `Header`: add Blog nav link
- `Footer`: add Blog link

### Remove
- Nothing removed

## Implementation Plan
1. Define shared `BLOG_POSTS` array with 6+ posts (id, tag, title, excerpt, image, date, readTime, body)
2. Extend `Page` type with `"blog"` and `"blog-detail"`
3. Update App state to track selected blog post id
4. Update `BlogSection` to pass `onNavigate` and a post id setter; make cards clickable
5. Build `BlogPage`: hero + search/tag filter + responsive 3-col grid of all posts
6. Build `BlogDetailPage`: hero banner, metadata row, full article body, related posts, CTA
7. Add Blog to Header and Footer navigation
8. Wire routing in App render
