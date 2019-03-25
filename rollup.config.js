export default {
    input: 'dist/main.js',
    external: [ '@angular/core' ],
    output: {
        file: 'dist/bundles/NgDraggableWidget.umd.js',
        format: 'cjs',
        sourceMap: false,
        format: 'umd',
        name: 'ng.draggable.widget',
        globals: {
            '@angular/core': 'ng.core',
            'rxjs/Observable': 'Rx',
            'rxjs/ReplaySubject': 'Rx',
            'rxjs/add/operator/map': 'Rx.Observable.prototype',
            'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
            'rxjs/add/observable/fromEvent': 'Rx.Observable',
            'rxjs/add/observable/of': 'Rx.Observable'
        }
    },
}