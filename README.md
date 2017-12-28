# NgxContentLoading
```
Inspired by [React Content Loader](https://github.com/danilowoz/react-content-loader).
```

Angular component to create SVG loading placeholders.

Please notice this is a work in progress and may not be ready for production usage.

## Install


    npm i --save ngx-content-loading


## Usage

### Import the module


    import { NgxContentLoadingModule } from 'ngx-content-loading';


### Presets

#### Use presets

    <ngx-content-loading [width]="800">
        <svg:g ngx-facebook-preset></svg:g>
    </ngx-content-loading>


#### Available presets
    - ngx-facebook-preset
    - ngx-instagram-preset


### Custom templates

    <ngx-content-loading [width]="800">
        <svg:g ngx-rect width="50" height="50" y="0" x="0"></svg:g>
        <svg:g ngx-rect width="150" height="10" y="10" x="60" rx="5" ry="5"></svg:g>
    </ngx-content-loading>
