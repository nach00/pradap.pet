# Work Pages

This directory contains the work portfolio pages for showcasing projects and case studies.

## Structure

- `/work/page.tsx` - Main work listing page with featured and all projects
- `/work/[slug]/page.tsx` - Dynamic work detail template for individual project pages

## Usage

### Work Listing Page (`/work`)
- Displays featured projects prominently
- Shows all projects in a filterable grid
- Includes category browsing
- Explains work approach and methodology

### Work Detail Pages (`/work/[slug]`)
- Comprehensive project case study template
- Includes project metadata, images, process, and results
- Structured sections: Overview, Process, Results, Lessons Learned
- Related work suggestions
- Back navigation to work listing

## Customization

To add new projects:

1. Update the `projects` array in `/work/page.tsx` with your project data
2. Create actual project pages by replacing the template data in `/work/[slug]/page.tsx`
3. Consider creating a data source (JSON, CMS, or database) for dynamic content

## Template Sections

The work detail template includes:

- **Header** - Title, description, metadata, action buttons
- **Project Details** - Client info, duration, team, technologies
- **Overview** - Challenge and solution summary
- **Process** - Step-by-step methodology
- **Results** - Metrics and impact
- **Lessons Learned** - What worked and areas for improvement
- **Next Steps** - Future plans and enhancements
- **Related Work** - Links to similar projects

## Design System

All pages use the established typography system with components like:
- `Headline`, `Subheading`, `SectionHeading` for hierarchy
- `Paragraph`, `Lede`, `SmallText` for content
- `CategoryTag`, `Badge`, `Status` for metadata
- `DataPair`, `DataGrid` for structured information
- `ButtonText`, `LinkText` for interactions