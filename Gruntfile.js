module.exports = function (grunt) {

  grunt.initConfig({

    less: {
      dist: {
        files: {
          'dist/media-queries-loading.css': 'src/media-queries-loading.less'
        }
      }
    },

    cssmin: {
      dist: {
        expand: true,
        cwd: 'dist',
        src: ['*.css', '!*.min.css'],
        dest: 'dist',
        ext: '.min.css'
      }
    }

  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['less', 'cssmin']);
};
