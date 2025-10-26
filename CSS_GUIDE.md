# CSS Architecture Guide

This blog uses a **hybrid approach** combining:
1. **Custom CSS with CSS Variables** - For theming and consistency
2. **Tailwind CSS** - For utility classes and rapid development
3. **Component-scoped styles** - For component-specific styling

## 🎨 **Current Setup**

### 1. **Global Styles** (`src/styles/global.css`)
- CSS custom properties for theming
- Base typography and layout
- Global utilities

### 2. **Tailwind CSS**
- Utility-first classes
- Configured to use your existing CSS variables
- Can be used alongside custom CSS

### 3. **Component Styles** (`.astro` files)
- Scoped styles in `<style>` tags
- Component-specific styling
- Can use both custom CSS and Tailwind

## 📝 **How to Use Each Approach**

### **Option 1: CSS Variables (Custom CSS)**
```astro
<div class="my-card">
  <h2>Title</h2>
</div>

<style>
  .my-card {
    background: white;
    padding: var(--spacing-lg);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow-sm);
  }
</style>
```

### **Option 2: Tailwind Utility Classes**
```astro
<div class="bg-white p-6 rounded-lg shadow-sm">
  <h2 class="text-2xl font-bold text-gray-dark">Title</h2>
</div>
```

### **Option 3: Hybrid Approach** (Recommended)
```astro
<div class="card bg-white">
  <h2 class="text-2xl font-bold mb-4">Title</h2>
</div>

<style>
  .card {
    padding: var(--spacing-lg);
    border-radius: var(--border-radius);
  }
</style>
```

## 🎯 **When to Use What**

### Use **Custom CSS** when:
- ✅ Defining reusable component styles
- ✅ Creating themes with CSS variables
- ✅ Writing complex animations
- ✅ Keeping styles organized and maintainable

### Use **Tailwind** when:
- ✅ Quick prototyping
- ✅ Single-use utility classes
- ✅ Responsive design (`md:`, `lg:`)
- ✅ Spacing, colors, and typography utilities

### Use **Scoped Styles** when:
- ✅ Component-specific styles
- ✅ Styles that won't be reused
- ✅ Keeping styles close to their component

## 🎨 **Tailwind with Your Theme**

Tailwind is configured to use your existing CSS variables:

```html
<!-- These all work with your theme -->
<div class="text-accent">Uses --accent color</div>
<div class="bg-gray-light">Uses --gray-light</div>
<div class="shadow">Uses --box-shadow</div>
<div class="rounded">Uses --border-radius</div>
```

## 📚 **Example Patterns**

### **Card Component**
```astro
<div class="card flex flex-col gap-4 p-6 bg-white rounded-lg shadow">
  <h3 class="text-2xl font-bold text-gray-dark">Card Title</h3>
  <p class="text-gray">Card content goes here</p>
</div>

<style>
  .card {
    transition: var(--transition-normal);
  }

  .card:hover {
    transform: translateY(-2px);
    box-shadow: var(--box-shadow-lg);
  }
</style>
```

### **Button Component**
```astro
<button class="button px-6 py-3 rounded-lg">
  Click Me
</button>

<style>
  .button {
    background: var(--accent);
    color: white;
    font-weight: 700;
    transition: var(--transition-normal);
  }

  .button:hover {
    background: var(--accent-dark);
  }
</style>
```

## 🎯 **Best Practices**

1. **Consistency**: Use CSS variables for theming values
2. **Maintainability**: Keep component styles scoped
3. **Performance**: Use Tailwind for utilities, custom CSS for components
4. **Flexibility**: Mix and match based on your needs

## 🔧 **Customization**

### **Adding Custom Tailwind Classes**
Edit `tailwind.config.mjs` to extend the theme:

```js
theme: {
  extend: {
    colors: {
      'my-custom-color': '#yourcolor',
    },
  },
}
```

### **CSS Variables**
Edit `src/styles/global.css` to change theme:

```css
:root {
  --accent: #yourcolor;
  --max-width: 800px;
}
```

## 📦 **Creating Components**

You can create components using any of the CSS approaches shown above. See `src/components/` for examples of real components in use.
