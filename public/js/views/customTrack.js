// Generated by CoffeeScript 1.8.0
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Sounder.Views.CustomTrack = (function(_super) {
    __extends(CustomTrack, _super);

    function CustomTrack() {
      return CustomTrack.__super__.constructor.apply(this, arguments);
    }

    CustomTrack.prototype.template = JST['customTrack'];

    CustomTrack.prototype.className = 'track__model';

    CustomTrack.prototype.initialize = function(src) {
      this.src = src.track;
      this.index = src.index;
      this.url = "http://api.soundcloud.com/tracks/" + this.src + "/stream?client_id=c280d0c248513cfc78d7ee05b52bf15e";
      return this.render();
    };

    CustomTrack.prototype.render = function() {
      this.$el.html(this.template({
        url: this.url,
        index: this.index
      }));
      $(Sounder.player).trigger('newAudio', this.$('audio'));
      this.$el.on('click', (function(_this) {
        return function(e) {
          return _this.play(e);
        };
      })(this));
      _.delay(((function(_this) {
        return function() {
          $('.active').removeClass('active');
          _this.$el.addClass('active');
          console.log('heeeeeey', _this.$('audio'), _this.$('audio'));
          return $(Sounder.player).trigger('playAudio', _this.$('audio'));
        };
      })(this)), 500);
      return this;
    };

    CustomTrack.prototype.play = function(e) {
      e.preventDefault();
      $('.active').removeClass('active');
      $(e.currentTarget).addClass('active');
      console.log('heeeeeey', this.$('audio'), this.$('audio'));
      return $(Sounder.player).trigger('playAudio', this.$('audio'));
    };

    return CustomTrack;

  })(Backbone.View);

}).call(this);
