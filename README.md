# ngx-spatial-navigation

Spatial Navigation in Angular

## Installation

```sh
npm i ngx-spatial-navigation
```

## Usage

Import the `NgxSpatialNavigationModule` module into your `AppModule`:

```typescript
import { NgxSpatialNavigationModule } from "ngx-spatial-navigation";

@NgModule({
  imports: [NgxSpatialNavigationModule],
})
export class AppModule {}
```

Add the `navRoot` and `navFocusable` directives to your template:

```html
<div navRoot>
  <div navFocusable>First element</div>
  <div navFocusable>Second element</div>
  <div navFocusable>Third element</div>
</div>
```

You can now navigate through the elements using the arrow keys on your keyboard.

## API

### navRoot

The `navRoot` directive is used to mark the root element where navigation will take place. There must be only one in the application.

### navSection

The `navSection` directive is needed to combine elements into a section.

- `ignore` - If `true`, the section element will not be considered focusable and will be skipped over.

### navFocusable

The `navFocusable` directive is used to mark elements that can be focusable.

- `ignore` - If `true`, the element will not be considered focusable and will be skipped over.

## License

MIT. Copyright (c) Kyaw Swar Thwin &lt;myanmarunicorn@gmail.com&gt;
