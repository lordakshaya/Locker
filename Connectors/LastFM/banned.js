/*
 *
 * Copyright (C) 2012, The Locker Project
 * All rights reserved.
 *
 * Please see the LICENSE file for more information.
 *
 */

var path   = require('path')
  , lastfm = require(path.join(__dirname, 'lib.js'));

var banned = [];

exports.sync = function (processInfo, cb) {
    lastfm.getBannedTracks(processInfo
                         , function (track) {
                               track.id = track.date.uts;
                               banned.push(track);
                           }
                         , function (err, config) {
                               if (err) {
                                   console.error(err);
                                   cb(err);
                               }
                               else {
                                   cb(null, {config: config, data : {banned : banned}});
                               }
                           }
    );
};
