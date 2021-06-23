/**
 * Copyright 2015 Adrian Lansdown
 * Not created by, affiliated with, or supported by Slack Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/
var axios = require('axios');

module.exports = function(RED) {
    "use strict";
    // set this to true to spam your console with stuff.
    var matterMostDebug = true;

    function matterMostOut(n) {
        RED.nodes.createNode(this,n);

        this.channelURL = n.channelURL;
        this.username = n.username || "";
        this.iconURL = n.iconURL || "";
        this.channel = n.channel || "";
        this.text = n.text || "";
        var node = this;

        this.on('input', function (msg) {
            var channelURL = node.channelURL || msg.channelURL;
            var username = node.username || msg.username;
            var icon_url = node.iconURL || msg.iconURL;
            var channel = node.channel || msg.channel;
            var text = node.text || msg.payload;
            node.options = {};
            node.options.headers = {};
            var data = {};
            if (text) { data.text = text; }
            if (username) { data.username = username; }
            if (channel) { data.channel = channel; }
            if (icon_url) { data.icon_url = icon_url; }
            if (msg.attachments) { data.attachments = msg.attachments; }
            if (matterMostDebug) { node.log(JSON.stringify(data)); }
            try {
                axios.post(channelURL, data, node.options)
                    .then(function (response){
                        msg.payload = response.data;
                        node.send(msg);
                    }).catch(function (err){
                    msg.payload = err;
                    node.send(msg);
                });
            }
            catch (err) {
                msg.payload = err;
                node.send(msg);
            }
        });
    }
    RED.nodes.registerType("MatterMostIncoming", matterMostOut);
};
