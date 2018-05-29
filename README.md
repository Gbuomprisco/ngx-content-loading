# ngx-content-loading v0.1.2

Angular component to create SVG loading placeholders. Inspired by the awesome [React Content Loader](https://github.com/danilowoz/react-content-loader).

## [Demo](https://ngx-content-loading.stackblitz.io/)

Have a look at a demo app on [Stackblitz](https://ngx-content-loading.stackblitz.io/)


## Install


    npm i --save ngx-content-loading


## Usage

### Import the module in your app module

```javascript
import { NgxContentLoadingModule } from 'ngx-content-loading';

@NgModule({
    imports: [ NgxContentLoadingModule ]
})
export class AppModule {}

```

### Presets

#### Use presets

```html
<ngx-content-loading [width]="800">
    <svg:g ngx-facebook-preset></svg:g>
</ngx-content-loading>

<ngx-content-loading [width]="800" [height]="800">
    <svg:g ngx-instagram-preset></svg:g>
</ngx-content-loading>
```

#### Available presets
    - ngx-facebook-preset
    - ngx-instagram-preset
    - ngx-code-preset
    - ngx-list-preset
    - ngx-bullet-list-preset


### Define custom shapes

```html
<ngx-content-loading 
    [speed]="'1500ms'"
    [width]="1000"
    [height]="300"
    [primaryColor]="'#222'"
    [secondaryColor]="'#5e5e5e'">
    <svg:g ngx-circle cy="30" cx="30" r="30" ry="5"></svg:g>
      <svg:g ngx-rect width="150" height="10" y="10" x="70" rx="5" ry="5"></svg:g>
      <svg:g ngx-rect width="90" height="10" y="40" x="70" rx="5" ry="5"></svg:g>
      <svg:g ngx-rect width="210" height="10" y="70" x="0" rx="5" ry="5"></svg:g>
      <svg:g ngx-rect width="240" height="10" y="100" x="0" rx="5" ry="5"></svg:g>
  </ngx-content-loading>
```

## API

| Name                | Type     | Default         | Description                                                     |
| ------------------- | -------- | --------------- | --------------------------------------------------------------- |
| speed               | _Number_ | `1000ms`        | Animation speed specified in s or ms                            |
| width               | _Number_ | `400`           | **viewBox** width of SVG                                        |
| height              | _Number_ | `130`           | **viewBox** height of SVG                                       |
| primaryColor        | _String_ | `#f3f3f3`       | Background the SVG                                              |
| secondaryColor      | _String_ | `#ecebeb`       | Animation color                                                 |
| preserveAspectRatio | _String_ | `xMidYMid meet` | Aspect ratio option of SVG                                      |


### Transclude elements before and after the SVG element

```html
<ngx-content-loading 
    [speed]="'1500ms'"
    [width]="1000"
    [height]="300"
    [primaryColor]="'#222'"
    [secondaryColor]="'#5e5e5e'">
        <b before-svg>
            I am transcluded before the svg
        </b>
        <svg:g ngx-circle cy="30" cx="30" r="30" ry="5"></svg:g>
        <svg:g ngx-rect width="150" height="10" y="10" x="70" rx="5" ry="5"></svg:g>
        <svg:g ngx-rect width="90" height="10" y="40" x="70" rx="5" ry="5"></svg:g>
        <svg:g ngx-rect width="210" height="10" y="70" x="0" rx="5" ry="5"></svg:g>
        <svg:g ngx-rect width="240" height="10" y="100" x="0" rx="5" ry="5"></svg:g>
        
        <b after-svg>
            I am transcluded after the svg
        </b>
  </ngx-content-loading>
```

## Development

Fork the repo then clone it

`$ git clone git@github.com:YourUsername/ngx-content-loading.git && cd ngx-content-loading`

Install the dependencies

`$ yarn` or `npm i`

Run the demo app

`$ npm start`

## License

[MIT](https://github.com/gbuomprisco/ngx-content-loading/blob/master/LICENSE)

Please notice this is a work in progress and may not be ready for production usage.

More presets and options will follow soon :)
