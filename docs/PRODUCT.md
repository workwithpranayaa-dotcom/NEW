# Product notes

ClientFlow is intentionally modeled like internal software a small agency could use.

Core domain:
- Organization
- User / role
- Company
- Contact
- Lead
- Deal
- Task
- Activity

Important engineering decisions:
- Pipeline values are stored as money in the database, not formatted strings.
- Deal stage changes create immutable activity events.
- List screens should use server-side pagination once data grows.
- Permissions should be enforced in the API, not only hidden in the UI.
