/**=========================================================
 * Module: constants.js
 * Define constants to inject across the application
 =========================================================*/
App
    .constant('APP_REQUIRES', {
        // jQuery based and standalone scripts
        scripts: {
            'whirl':              ['vendor/whirl/dist/whirl.css'],
            'classyloader':       ['vendor/jquery-classyloader/js/jquery.classyloader.min.js'],
            'animo':              ['vendor/animo.js/animo.js'],
            'fastclick':          ['vendor/fastclick/lib/fastclick.js'],
            'modernizr':          ['vendor/modernizr/modernizr.js'],
            'animate':            ['vendor/animate.css/animate.min.css'],
            'icons':              ['vendor/skycons/skycons.js',
                'vendor/fontawesome/css/font-awesome.min.css',
                'ext-vendor/simplelineicons/simple-line-icons.css',
                'vendor/weather-icons/css/weather-icons.min.css'],
            'sparklines':         ['ext-vendor/sparklines/jquery.sparkline.min.js'],
            'slider':             ['vendor/seiyria-bootstrap-slider/dist/bootstrap-slider.min.js',
                'vendor/seiyria-bootstrap-slider/dist/css/bootstrap-slider.min.css'],
            'slimscroll':         ['vendor/slimScroll/jquery.slimscroll.min.js'],
            'screenfull':         ['vendor/screenfull/dist/screenfull.min.js'],
            'flot-chart':         ['vendor/Flot/jquery.flot.js'],
            'flot-chart-plugins': ['vendor/flot.tooltip/js/jquery.flot.tooltip.min.js',
                'vendor/Flot/jquery.flot.resize.js',
                'vendor/Flot/jquery.flot.pie.js',
                'vendor/Flot/jquery.flot.time.js',
                'vendor/Flot/jquery.flot.categories.js',
                'vendor/flot-spline/js/jquery.flot.spline.min.js'],
            'jquery-ui':          ['vendor/jquery-ui/jquery-ui.min.js'],
            'moment' :            ['vendor/moment/min/moment-with-locales.min.js'],
            'flatdoc':            ['vendor/flatdoc/flatdoc.js'],
            'codemirror':         ['vendor/codemirror/lib/codemirror.js',
                'vendor/codemirror/lib/codemirror.css'],
            'codemirror-plugins': ['vendor/codemirror/addon/mode/overlay.js',
                'vendor/codemirror/mode/markdown/markdown.js',
                'vendor/codemirror/mode/xml/xml.js',
                'vendor/codemirror/mode/gfm/gfm.js',
                'vendor/marked/lib/marked.js'],
            'filestyle':          ['vendor/bootstrap-filestyle/src/bootstrap-filestyle.js'],
            'parsley':            ['vendor/parsleyjs/dist/parsley.min.js'],
            'stomp':              ['vendor/stomp-websocket/lib/stomp.min.js'],
            'socket':             ['vendor/sockjs-client/dist/sockjs.js'],
            'videojs':            ['vendor/video.js/dist/video-js/video.js',
                'vendor/video.js/dist/video-js/video-js.css']
        },
        // Angular based script (use the right module name)
        modules: [
            {name: 'localytics.directives',     files: ['vendor/chosen_v1.2.0/chosen.jquery.min.js',
                'vendor/chosen_v1.2.0/chosen.min.css',
                'vendor/angular-chosen-localytics/chosen.js']},
            {name: 'textAngular',             files : [
                'vendor/textAngular/textAngular.min.js'
            ]},
            {name: 'ngTable',                   files: ['vendor/ng-table/ng-table.min.js',
                'vendor/ng-table/ng-table.min.css']},
            {name: 'ngTableExport',             files: ['vendor/ng-table-export/ng-table-export.js']},
            {name: 'ui-rangeSlider',            files: ['vendor/angular-rangeslider/angular.rangeSlider.js',
                'vendor/angular-rangeslider/angular.rangeSlider.css']},
            {name: 'destegabry.timeline',       files: [
                'vendor/angular-timeline/timeline.js',
                'vendor/angular-timeline/links_timeline/timeline.css',
                'vendor/angular-timeline/links_timeline/timeline-min.js',
                'vendor/angular-timeline/links_timeline/timeline-theme.css']},
            {name: 'ngCsv', files: ['vendor/ng-csv/build/ng-csv.js']},
            {name: 'angularBootstrapNavTree', files: [
                'vendor/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
                'vendor/angular-bootstrap-nav-tree/dist/abn_tree.css']}
        ]

    })
;