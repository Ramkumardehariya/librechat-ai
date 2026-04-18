# LibreChat Modern UI Components

A comprehensive, modern UI component library built for LibreChat with accessibility, responsiveness, and beautiful design in mind.

## Design Philosophy

- **Modern & Clean**: Minimal, elegant design with thoughtful details
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Responsive**: Mobile-first design that works seamlessly across all devices
- **Consistent**: Unified design system with predictable patterns
- **Performant**: Optimized animations and efficient rendering

## Color Palette

### Primary Colors
- **Brand Purple**: `#8b5cf6` - Main brand color
- **Brand Indigo**: `#6366f1` - Secondary brand color
- **Brand Blue**: `#3b82f6` - Tertiary brand color
- **Brand Cyan**: `#06b6d4` - Accent color

### Gray Scale
- **Gray 25**: `#fcfcfd` - Lightest background
- **Gray 50**: `#f8fafc` - Light background
- **Gray 100**: `#f1f5f9` - Subtle borders
- **Gray 200**: `#e2e8f0` - Default borders
- **Gray 300**: `#cbd5e1` - Hover states
- **Gray 400**: `#94a3b8` - Disabled text
- **Gray 500**: `#64748b` - Secondary text
- **Gray 600**: `#475569` - Primary text
- **Gray 700**: `#334155` - Dark text
- **Gray 800**: `#1e293b` - Dark backgrounds
- **Gray 850**: `#0f172a` - Darker backgrounds
- **Gray 900**: `#020617` - Darkest backgrounds

### Semantic Colors
- **Success**: Green variants for positive actions
- **Warning**: Amber variants for caution
- **Error**: Red variants for destructive actions

## Typography

### Font Family
- **Primary**: Inter (system fallback: sans-serif)
- **Monospace**: Roboto Mono (system fallback: monospace)

### Font Sizes
- **XS**: `0.75rem` (12px)
- **SM**: `0.875rem` (14px)
- **Base**: `1rem` (16px)
- **LG**: `1.125rem` (18px)
- **XL**: `1.25rem` (20px)

## Spacing System

Based on a 4px grid:
- **1**: `4px`
- **2**: `8px`
- **3**: `12px`
- **4**: `16px`
- **6**: `24px`
- **8**: `32px`
- **12**: `48px`
- **16**: `64px`

## Components

### Button
Modern button with multiple variants and states.

```tsx
import { Button } from '~/components/ui';

<Button variant="primary" size="md" loading={false}>
  Click me
</Button>
```

**Variants:**
- `default` - Gray background
- `primary` - Brand purple background
- `secondary` - Light gray background
- `ghost` - Transparent with hover
- `destructive` - Red background
- `outline` - Border only

**Sizes:**
- `sm` - Small (32px height)
- `md` - Medium (40px height)
- `lg` - Large (48px height)

### Card
Flexible container with multiple variants.

```tsx
import { Card, CardHeader, CardTitle, CardContent } from '~/components/ui';

<Card variant="elevated" hover>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Card content goes here
  </CardContent>
</Card>
```

**Variants:**
- `default` - Standard card with border
- `elevated` - Card with shadow
- `outlined` - Border only
- `glass` - Glass morphism effect

### Input
Modern input field with validation states.

```tsx
import { Input } from '~/components/ui';

<Input
  label="Email"
  placeholder="Enter your email"
  error={error}
  helperText="We'll never share your email"
  leftIcon={<MailIcon />}
/>
```

**Variants:**
- `default` - Standard input
- `filled` - Filled background
- `outlined` - Border only

### Badge
Small status indicators and labels.

```tsx
import { Badge } from '~/components/ui';

<Badge variant="success" size="sm">Active</Badge>
```

**Variants:**
- `default` - Gray
- `primary` - Brand purple
- `success` - Green
- `warning` - Amber
- `destructive` - Red
- `outline` - Border only

### Avatar
User profile images with status indicators.

```tsx
import { Avatar } from '~/components/ui';

<Avatar
  src="/user-avatar.jpg"
  alt="John Doe"
  size="md"
  status="online"
  fallback="JD"
/>
```

**Status:**
- `online` - Green dot
- `offline` - Gray dot
- `away` - Amber dot
- `busy` - Red dot

### Dialog
Modal dialogs with animations.

```tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '~/components/ui';

<Dialog open={isOpen} onOpenChange={setIsOpen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
    </DialogHeader>
    <p>Dialog content goes here</p>
  </DialogContent>
</Dialog>
```

### Tooltip
Contextual help text with positioning.

```tsx
import { Tooltip, TooltipProvider } from '~/components/ui';

<TooltipProvider>
  <Tooltip content="This is a tooltip" side="top">
    <Button>Hover me</Button>
  </Tooltip>
</TooltipProvider>
```

## Animation System

### Keyframes
- `fadeIn` - Simple fade in
- `fadeInUp` - Fade in with slide up
- `fadeInDown` - Fade in with slide down
- `scaleIn` - Scale from 95% to 100%
- `slideInRight` - Slide from right
- `slideInLeft` - Slide from left

### Utility Classes
- `.animate-in` - Fade in animation
- `.animate-fade-in-up` - Fade up animation
- `.animate-scale-in` - Scale animation
- `.hover-lift` - Lift on hover
- `.focus-ring` - Modern focus styles

## Responsive Design

### Breakpoints
- **Mobile**: `< 768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `> 1024px`

### Mobile Optimizations
- Touch-friendly targets (minimum 44px)
- Proper spacing for mobile
- Optimized animations for mobile performance
- Responsive typography

## Accessibility

- **Keyboard Navigation**: All components fully keyboard accessible
- **Screen Readers**: Proper ARIA labels and descriptions
- **Focus Management**: Clear focus indicators and logical tab order
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Reduced Motion**: Respects user's motion preferences

## Dark Mode

All components support dark mode with:
- Proper color schemes
- Consistent contrast ratios
- Smooth transitions between themes
- Respect for system preferences

## Usage Guidelines

### Consistency
- Use semantic colors for meaning (success, warning, error)
- Maintain consistent spacing using the spacing system
- Follow the component patterns for similar interactions

### Performance
- Use CSS transforms for animations
- Avoid layout thrashing
- Optimize for 60fps animations
- Use proper loading states

### Best Practices
- Always provide alt text for images
- Use semantic HTML elements
- Test with screen readers
- Validate color contrast
- Test keyboard navigation

## Contributing

When adding new components:
1. Follow the existing patterns
2. Include TypeScript types
3. Add comprehensive documentation
4. Test accessibility
5. Ensure responsive design
6. Add dark mode support

## Migration Guide

### From Old Components
1. Replace old button classes with new `<Button>` component
2. Update card containers with new `<Card>` component
3. Migrate inputs to new `<Input>` component
4. Update color usage to new design tokens

### Breaking Changes
- Updated color palette
- Changed component APIs
- Updated spacing system
- Modified animation names

## Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## Performance

- **Bundle Size**: Optimized with tree-shaking
- **Runtime**: Efficient CSS and animations
- **Memory**: Minimal memory footprint
- **Loading**: Optimized for fast loading
