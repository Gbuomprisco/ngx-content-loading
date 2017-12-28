# NgxContentLoading

Angular component to create SVG loading placeholders. Inspired by the awesome [React Content Loader](https://github.com/danilowoz/react-content-loader).


Please notice this is a work in progress and may not be ready for production usage.

## [Demo](https://angular-b3z9ek.stackblitz.io/)

Have a look at a demo app on [Stackblitz](https://angular-b3z9ek.stackblitz.io/)

More presets and options will follow soon :)

## Install


    npm i --save ngx-content-loading


## Usage

### Import the module

```javascript
import { NgxContentLoadingModule } from 'ngx-content-loading';
```

### Presets

#### Use presets

<<<<<<< HEAD
    <ngx-content-loading [width]="800">
        <svg:g ngx-facebook-preset></svg:g>
    </ngx-content-loading>

    <ngx-content-loading [width]="800" [height]="800">
        <svg:g ngx-instagram-preset></svg:g>
    </ngx-content-loading>

=======
```html
<ngx-content-loading [width]="800">
    <svg:g ngx-facebook-preset></svg:g>
</ngx-content-loading>
```
>>>>>>> 096ce911e156033acb953ba446166893d7eebad9

#### Available presets
    - ngx-facebook-preset
    - ngx-instagram-preset


### Custom templates

<<<<<<< HEAD
    <ngx-content-loading [width]="800" [height]="800">
        <svg:g ngx-circle cx="30" cy="30" r="30"></svg:g>
        <svg:g ngx-rect width="50" height="50" y="0" x="0"></svg:g>
        <svg:g ngx-rect width="150" height="10" y="10" x="60" rx="5" ry="5"></svg:g>
    </ngx-content-loading>

## API

**`width`** - [**`?string`**] (default: 400)
**`height`** - [**`?string`**] (default: 130)
**`preserveAspectRatio`** - [**`?string`**] (default: xMidYMid meet)
**`speed`** - [**`?string`**] (default: 1000ms)
**`primaryColor`** - [**`?string`**] (default: #f3f3f3)
**`secondaryColor`** - [**`?string`**] (default: #ecebeb)

=======
```html
<ngx-content-loading [width]="800">
    <svg:g ngx-rect width="50" height="50" y="0" x="0"></svg:g>
    <svg:g ngx-rect width="150" height="10" y="10" x="60" rx="5" ry="5"></svg:g>
</ngx-content-loading>
```
>>>>>>> 096ce911e156033acb953ba446166893d7eebad9
