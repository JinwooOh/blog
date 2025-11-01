# SASS Architecture Guide

This project uses SASS (Syntactically Awesome Style Sheets) for better organization and maintainability.

## 📁 **File Structure**

```
src/styles/
├── _variables.scss    # SASS variables (colors, spacing, typography)
├── _mixins.scss       # Reusable mixins (functions)
└── global.scss        # Main stylesheet (imports partials + base styles)
```

## 🎨 **Variables** (`_variables.scss`)

Centralized SASS variables for:
- **Colors**: `$accent`, `$gray-light-rgb`, etc.
- **Layout**: `$max-width`, `$border-radius`, etc.
- **Spacing**: `$spacing-xs` through `$spacing-2xl`
- **Typography**: `$font-family`, `$font-size-*`
- **Breakpoints**: `$breakpoint-mobile`
- **Transitions**: `$transition-fast`, `$transition-normal`, etc.

### Usage Example
```scss
.my-component {
  padding: $spacing-md;
  color: rgb(var(--gray-dark));
  font-size: $font-size-lg;
}
```

## 🔧 **Mixins** (`_mixins.scss`)

Reusable style patterns:

### `@mixin tag-style()`
Styled tag/button pattern with hover effects
```scss
.tag {
  @include tag-style();
}
```

### `@mixin card-style()`
Card container with padding and border
```scss
.post-card {
  @include card-style();
}
```

### `@mixin container($max-width)`
Responsive container with max-width
```scss
.content {
  @include container($max-width-wide);
}
```

### `@mixin mobile`
Mobile breakpoint media query
```scss
.header {
  padding: $spacing-md;

  @include mobile {
    padding: $spacing-sm;
  }
}
```

### `@mixin flex-center` / `@mixin flex-between`
Common flexbox patterns
```scss
.social-links {
  @include flex-center;
}
```

## 📝 **Component Styles**

Each component can import variables and mixins:

```scss
<style lang="scss">
  @import '../styles/variables';
  @import '../styles/mixins';

  .my-component {
    padding: $spacing-md;
    border-radius: $border-radius;

    .nested-element {
      color: rgb(var(--gray-dark));
    }
  }
</style>
```

## 🎯 **SASS Features Used**

### 1. **Nesting**
Instead of:
```css
.header nav a { ... }
```

Use:
```scss
.header {
  nav {
    a { ... }
  }
}
```

### 2. **Variables**
Instead of:
```css
padding: 1rem;
```

Use:
```scss
padding: $spacing-md;
```

### 3. **Mixins**
Instead of repeating styles:
```scss
.tag {
  @include tag-style();
}
```

### 4. **Parent Selector (`&`)**
```scss
a {
  color: black;

  &:hover {
    color: blue;
  }
}
```

### 5. **Math Operations**
```scss
padding: ($spacing-xl * 2);
font-size: $font-size-sm * 0.857;
```

## 🔄 **CSS Variables vs SASS Variables**

- **CSS Variables** (`--accent`) → Used in `:root` for runtime theming
- **SASS Variables** (`$accent`) → Used in SASS files for compilation

CSS variables are still available for JavaScript access and theming.

## 💡 **Best Practices**

1. **Import order**: Always import variables before mixins
   ```scss
   @import '../styles/variables';
   @import '../styles/mixins';
   ```

2. **Use mixins for repeated patterns**: Don't duplicate code
3. **Use variables for values**: Makes changes easier
4. **Nest thoughtfully**: 3-4 levels max for readability
5. **Component-scoped styles**: Use `<style lang="scss">` in components

## 📚 **Adding New Styles**

### Add a new variable:
Edit `src/styles/_variables.scss`
```scss
$my-new-color: #ff0000;
```

### Add a new mixin:
Edit `src/styles/_mixins.scss`
```scss
@mixin my-mixin($param) {
  // styles here
}
```

### Use in components:
```scss
.my-class {
  color: $my-new-color;
  @include my-mixin($value);
}
```

## 🎨 **Benefits Achieved**

✅ **DRY Code** - No repeated styles
✅ **Better Organization** - Separated concerns (variables, mixins, styles)
✅ **Easier Maintenance** - Change once, update everywhere
✅ **Nested Selectors** - More readable structure
✅ **Type Safety** - Compile-time checks
✅ **Consistent Spacing** - Using spacing variables ensures uniformity
