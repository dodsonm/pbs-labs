/*jslint white:true, sloppy: true */
/*global module  */

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    /**
     * For compiling the less files
     */
    less: {
    /**
     * For watching changes on file save
     */
      "station_site": {
        files: {
          'website/static/station_site/css/main.css' :
          'website/static/station_site/less/main.less'
        }
      }
    },
    watch: {
      "station_site": {
        files: 'website/static/station_site/less/*.less',
        tasks: 'less:station_site'
      }
    },
    /**
     * For live reloading the css and js
     */
    browser_sync: {
        files: {
            src : [
              'website/static/station_site/css/**/*.css',
              'website/static/station_site/js/**/*.js'
            ]
        },
        options: {
            watchTask: true
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ["browser_sync", "watch"]);

};