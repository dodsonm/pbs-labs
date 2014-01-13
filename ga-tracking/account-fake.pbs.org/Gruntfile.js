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
      "front_end": {
        files: {
          'website/static/front_end/css/main.css' :
          'website/static/front_end/less/main.less'
        }
      }
    },
    watch: {
      "front_end": {
        files: 'website/static/front_end/less/*.less',
        tasks: 'less:front_end'
      }
    },
    /**
     * For live reloading the css and js
     */
    browser_sync: {
        files: {
            src : [
              'website/static/front_end/css/**/*.css',
              'website/static/front_end/js/**/*.js'
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