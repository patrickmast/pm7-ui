# PM7 Sidebar Component

A versatile sidebar component that provides navigation and content organization with multiple display modes and rich interaction patterns.

## Installation

The Sidebar component is included in the PM7 UI library:

```bash
npm install @pm7/core
```

```html
<!-- Include PM7 UI -->
<link rel="stylesheet" href="path/to/@pm7/core/dist/pm7.css">
<script src="path/to/@pm7/core/dist/pm7.js"></script>
```

## Basic Usage

### Simple Sidebar

```html
<!-- Sidebar -->
<aside class="pm7-sidebar" id="sidebar" data-pm7-sidebar>
  <div class="pm7-sidebar-header">
    <h2>Navigation</h2>
    <button class="pm7-sidebar-close" aria-label="Close sidebar">
      <svg class="pm7-icon"><!-- close icon --></svg>
    </button>
  </div>
  
  <div class="pm7-sidebar-content">
    <nav class="pm7-sidebar-nav">
      <a href="#" class="pm7-sidebar-item pm7-sidebar-item--active">
        <svg class="pm7-sidebar-item-icon"><!-- icon --></svg>
        <span class="pm7-sidebar-item-text">Dashboard</span>
      </a>
      <a href="#" class="pm7-sidebar-item">
        <svg class="pm7-sidebar-item-icon"><!-- icon --></svg>
        <span class="pm7-sidebar-item-text">Projects</span>
      </a>
      <a href="#" class="pm7-sidebar-item">
        <svg class="pm7-sidebar-item-icon"><!-- icon --></svg>
        <span class="pm7-sidebar-item-text">Settings</span>
      </a>
    </nav>
  </div>
  
  <div class="pm7-sidebar-footer">
    <a href="#" class="pm7-sidebar-item">
      <svg class="pm7-sidebar-item-icon"><!-- icon --></svg>
      <span class="pm7-sidebar-item-text">Logout</span>
    </a>
  </div>
</aside>

<!-- Trigger button -->
<button class="pm7-sidebar-trigger" data-pm7-sidebar-trigger="sidebar">
  <svg class="pm7-icon pm7-icon-menu"><!-- menu icon --></svg>
</button>
```

## Display Modes

### Overlay Mode (Default)

The sidebar overlays the content with a semi-transparent backdrop:

```html
<aside class="pm7-sidebar" data-pm7-sidebar>
  <!-- sidebar content -->
</aside>
```

### Push Mode

The sidebar pushes the main content aside when open:

```html
<aside class="pm7-sidebar" data-pm7-sidebar>
  <!-- sidebar content -->
</aside>

<main class="pm7-sidebar-push">
  <!-- main content that gets pushed -->
</main>
```

### Static Mode

The sidebar is always visible and doesn't overlay content:

```html
<aside class="pm7-sidebar pm7-sidebar--static" data-pm7-sidebar>
  <!-- sidebar content -->
</aside>
```

## Sidebar Variants

### Right-Aligned Sidebar

```html
<aside class="pm7-sidebar pm7-sidebar--right" data-pm7-sidebar>
  <!-- sidebar content -->
</aside>
```

### Mini Sidebar

A compact sidebar showing only icons:

```html
<aside class="pm7-sidebar pm7-sidebar--mini" data-pm7-sidebar>
  <nav class="pm7-sidebar-nav">
    <button class="pm7-sidebar-item" title="Dashboard">
      <svg class="pm7-sidebar-item-icon"><!-- icon --></svg>
    </button>
    <button class="pm7-sidebar-item" title="Projects">
      <svg class="pm7-sidebar-item-icon"><!-- icon --></svg>
    </button>
  </nav>
</aside>
```

### Floating Sidebar

A sidebar with rounded corners and shadow:

```html
<aside class="pm7-sidebar pm7-sidebar--floating" data-pm7-sidebar>
  <!-- sidebar content -->
</aside>
```

### Compact Spacing

Reduced padding for dense navigation:

```html
<aside class="pm7-sidebar pm7-sidebar--compact" data-pm7-sidebar>
  <!-- sidebar content -->
</aside>
```

## Navigation Patterns

### Sections with Titles

```html
<div class="pm7-sidebar-content">
  <div class="pm7-sidebar-section">
    <h3 class="pm7-sidebar-section-title">Main</h3>
    <nav class="pm7-sidebar-nav">
      <a href="#" class="pm7-sidebar-item">Dashboard</a>
      <a href="#" class="pm7-sidebar-item">Analytics</a>
    </nav>
  </div>
  
  <div class="pm7-sidebar-divider"></div>
  
  <div class="pm7-sidebar-section">
    <h3 class="pm7-sidebar-section-title">Settings</h3>
    <nav class="pm7-sidebar-nav">
      <a href="#" class="pm7-sidebar-item">Profile</a>
      <a href="#" class="pm7-sidebar-item">Preferences</a>
    </nav>
  </div>
</div>
```

### Collapsible Sections

```html
<div class="pm7-sidebar-collapsible" data-state="open">
  <button class="pm7-sidebar-collapsible-trigger">
    <span>Projects</span>
    <svg class="pm7-sidebar-collapsible-icon"><!-- chevron icon --></svg>
  </button>
  <div class="pm7-sidebar-collapsible-content">
    <nav class="pm7-sidebar-nav pm7-sidebar-nav--nested">
      <a href="#" class="pm7-sidebar-item">Project Alpha</a>
      <a href="#" class="pm7-sidebar-item">Project Beta</a>
    </nav>
  </div>
</div>
```

### Navigation with Icons and Badges

```html
<nav class="pm7-sidebar-nav">
  <a href="#" class="pm7-sidebar-item">
    <svg class="pm7-sidebar-item-icon"><!-- inbox icon --></svg>
    <span class="pm7-sidebar-item-text">Inbox</span>
    <span class="pm7-badge pm7-badge--primary">5</span>
  </a>
  <a href="#" class="pm7-sidebar-item">
    <svg class="pm7-sidebar-item-icon"><!-- star icon --></svg>
    <span class="pm7-sidebar-item-text">Starred</span>
  </a>
</nav>
```

## Responsive Behavior

### Mobile-First Approach

```html
<!-- Mobile: Overlay sidebar -->
<aside class="pm7-sidebar" data-pm7-sidebar>
  <!-- sidebar content -->
</aside>

<!-- Desktop: Static sidebar -->
<style>
  @media (min-width: 768px) {
    .pm7-sidebar {
      position: relative;
      transform: translateX(0);
    }
  }
</style>
```

### Responsive Static Sidebar

Use the `pm7-sidebar--static` modifier for automatic responsive behavior:

```html
<div class="app-layout">
  <aside class="pm7-sidebar pm7-sidebar--static" data-pm7-sidebar>
    <!-- sidebar content -->
  </aside>
  <main class="app-content">
    <!-- main content -->
  </main>
</div>

<style>
  .app-layout {
    display: flex;
  }
  
  .app-content {
    flex: 1;
  }
  
  @media (max-width: 767px) {
    .pm7-sidebar--static {
      position: fixed;
      transform: translateX(-100%);
    }
    
    .pm7-sidebar--static.pm7-sidebar--open {
      transform: translateX(0);
    }
  }
</style>
```

## JavaScript API

### Initialization

Sidebars with `data-pm7-sidebar` are automatically initialized:

```javascript
// Manual initialization
const sidebar = new PM7.Sidebar(element);

// Access instance
const sidebar = element.PM7Sidebar;
```

### Methods

```javascript
// Open sidebar
sidebar.open();

// Close sidebar
sidebar.close();

// Toggle sidebar
sidebar.toggle();

// Destroy instance
sidebar.destroy();
```

### Events

```javascript
// Sidebar opened
element.addEventListener('pm7:sidebar:open', (e) => {
  console.log('Sidebar opened', e.detail.sidebar);
});

// Sidebar closed
element.addEventListener('pm7:sidebar:close', (e) => {
  console.log('Sidebar closed', e.detail.sidebar);
});

// Collapsible toggled
element.addEventListener('pm7:sidebar:collapsible:toggle', (e) => {
  console.log('Collapsible toggled', e.detail.isOpen);
});
```

## Accessibility

### ARIA Attributes

The sidebar component automatically manages ARIA attributes:

```html
<!-- Sidebar with proper ARIA -->
<aside 
  class="pm7-sidebar" 
  id="main-sidebar"
  data-pm7-sidebar
  aria-label="Main navigation"
  aria-hidden="true"
>
  <!-- content -->
</aside>

<!-- Trigger with ARIA -->
<button 
  data-pm7-sidebar-trigger="main-sidebar"
  aria-controls="main-sidebar"
  aria-expanded="false"
>
  Menu
</button>
```

### Keyboard Navigation

- `Tab` - Navigate through sidebar items
- `Arrow Up/Down` - Navigate between items
- `Home` - Jump to first item
- `End` - Jump to last item
- `Escape` - Close sidebar (when in overlay mode)

### Focus Management

The sidebar automatically:
- Traps focus when open in overlay mode
- Returns focus to trigger when closed
- Manages focus for keyboard navigation

## Customization

### CSS Variables

```css
:root {
  /* Sidebar dimensions */
  --pm7-sidebar-width: 280px;
  --pm7-sidebar-bg: var(--pm7-background);
  
  /* Item hover state - optional override */
  --pm7-sidebar-item-hover-bg: transparent; /* Default: uses dynamic 20% overlay */
}

/* Custom mini sidebar width */
.pm7-sidebar--mini {
  --pm7-sidebar-width: 60px;
}
```

#### Dynamic Hover Effect

By default, sidebar items have a smart hover effect that automatically creates a 20% darker background in light mode and 20% lighter background in dark mode. This works regardless of the sidebar's background color, ensuring consistent visual feedback.

```css
/* The hover effect adapts to any background color */
.my-custom-sidebar {
  --pm7-sidebar-bg: #6B46C1; /* Purple sidebar */
}
/* Hover will automatically be 20% darker than #6B46C1 */

/* Override with custom hover color if needed */
.my-custom-sidebar .pm7-sidebar-item {
  --pm7-sidebar-item-hover-bg: rgba(255, 255, 255, 0.1);
}
```

### Custom Styling

```css
/* Brand-colored sidebar */
.pm7-sidebar--brand {
  background-color: var(--pm7-primary);
  color: var(--pm7-primary-foreground);
}

.pm7-sidebar--brand .pm7-sidebar-item {
  color: var(--pm7-primary-foreground);
}

.pm7-sidebar--brand .pm7-sidebar-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Transparent sidebar */
.pm7-sidebar--transparent {
  background-color: transparent;
  backdrop-filter: blur(10px);
}
```

## Complete Examples

### Dashboard Layout with Sidebar

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="path/to/@pm7/core/dist/pm7.css">
</head>
<body>
  <!-- Sidebar -->
  <aside class="pm7-sidebar" id="app-sidebar" data-pm7-sidebar>
    <div class="pm7-sidebar-header">
      <img src="logo.svg" alt="Logo" class="logo">
      <button class="pm7-sidebar-close">×</button>
    </div>
    
    <div class="pm7-sidebar-content">
      <!-- Main navigation -->
      <nav class="pm7-sidebar-nav">
        <a href="#" class="pm7-sidebar-item pm7-sidebar-item--active">
          <svg class="pm7-sidebar-item-icon"><!-- home icon --></svg>
          <span>Home</span>
        </a>
        <a href="#" class="pm7-sidebar-item">
          <svg class="pm7-sidebar-item-icon"><!-- projects icon --></svg>
          <span>Projects</span>
        </a>
      </nav>
      
      <!-- Collapsible section -->
      <div class="pm7-sidebar-collapsible" data-state="open">
        <button class="pm7-sidebar-collapsible-trigger">
          <span>Team</span>
          <svg class="pm7-sidebar-collapsible-icon"><!-- chevron --></svg>
        </button>
        <div class="pm7-sidebar-collapsible-content">
          <nav class="pm7-sidebar-nav pm7-sidebar-nav--nested">
            <a href="#" class="pm7-sidebar-item">Members</a>
            <a href="#" class="pm7-sidebar-item">Roles</a>
          </nav>
        </div>
      </div>
    </div>
    
    <div class="pm7-sidebar-footer">
      <a href="#" class="pm7-sidebar-item">
        <img src="avatar.jpg" alt="User" class="avatar">
        <span>John Doe</span>
      </a>
    </div>
  </aside>
  
  <!-- Main content -->
  <div class="pm7-sidebar-push">
    <header>
      <button class="pm7-sidebar-trigger" data-pm7-sidebar-trigger="app-sidebar">
        <svg class="pm7-icon"><!-- menu icon --></svg>
      </button>
      <h1>Dashboard</h1>
    </header>
    
    <main>
      <!-- page content -->
    </main>
  </div>
  
  <script src="path/to/@pm7/core/dist/pm7.js"></script>
</body>
</html>
```

### Settings Page with Static Sidebar

```html
<div class="settings-layout">
  <!-- Settings sidebar -->
  <aside class="pm7-sidebar pm7-sidebar--static pm7-sidebar--compact">
    <nav class="pm7-sidebar-nav">
      <a href="#general" class="pm7-sidebar-item pm7-sidebar-item--active">
        General
      </a>
      <a href="#security" class="pm7-sidebar-item">
        Security
      </a>
      <a href="#notifications" class="pm7-sidebar-item">
        Notifications
      </a>
      <a href="#integrations" class="pm7-sidebar-item">
        Integrations
      </a>
    </nav>
  </aside>
  
  <!-- Settings content -->
  <div class="settings-content">
    <section id="general">
      <h2>General Settings</h2>
      <!-- settings form -->
    </section>
  </div>
</div>

<style>
  .settings-layout {
    display: flex;
    gap: var(--pm7-spacing-6);
  }
  
  .settings-content {
    flex: 1;
  }
</style>
```

## CSS Classes

| Class | Description |
|-------|-------------|
| `.pm7-sidebar` | Base sidebar container |
| `.pm7-sidebar--open` | Open state modifier |
| `.pm7-sidebar--right` | Right-aligned sidebar |
| `.pm7-sidebar--static` | Static/always visible mode |
| `.pm7-sidebar--mini` | Mini/collapsed sidebar |
| `.pm7-sidebar--floating` | Floating variant with shadow |
| `.pm7-sidebar--compact` | Compact spacing variant |
| `.pm7-sidebar-header` | Sidebar header section |
| `.pm7-sidebar-content` | Main content area |
| `.pm7-sidebar-footer` | Sidebar footer section |
| `.pm7-sidebar-nav` | Navigation container |
| `.pm7-sidebar-nav--nested` | Nested navigation |
| `.pm7-sidebar-item` | Navigation item |
| `.pm7-sidebar-item--active` | Active navigation item (primary background) |
| `.pm7-sidebar-item-icon` | Item icon element |
| `.pm7-sidebar-item-text` | Item text element |
| `.pm7-sidebar-overlay` | Background overlay |
| `.pm7-sidebar-trigger` | Trigger button |
| `.pm7-sidebar-push` | Content that gets pushed |
| `.pm7-sidebar-close` | Close button |
| `.pm7-sidebar-section` | Content section |
| `.pm7-sidebar-section-title` | Section title |
| `.pm7-sidebar-divider` | Horizontal divider |
| `.pm7-sidebar-collapsible` | Collapsible section |
| `.pm7-sidebar-collapsible-trigger` | Collapsible trigger |
| `.pm7-sidebar-collapsible-content` | Collapsible content |

## Best Practices

1. **Use Semantic HTML**: Use `<aside>` for sidebars and `<nav>` for navigation
2. **Provide Labels**: Always include aria-label for screen readers
3. **Active States**: Clearly indicate the current page/section
4. **Touch Targets**: Ensure items are at least 44x44px for mobile
5. **Responsive Design**: Test sidebar behavior across different screen sizes
6. **Performance**: Use CSS transforms for smooth animations
7. **Focus Indicators**: Ensure visible focus states for keyboard navigation

## Browser Support

The Sidebar component supports all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)