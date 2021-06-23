node-red-contrib-mattermost-incoming
========================

A <a href="http://nodered.org" target="_new">Node-RED</a> node to post messages to  <a href="http://mattermost.com" target="_new">custom mattermost setup</a>.

Install
-------

Run the following command in the root directory of your Node-RED install:

    npm install node-red-contrib-mattermost-incoming


Usage
-----

## Matter Most Incoming Webhook
<i><a href="http://www.mattermost.com" target="_new">Matter Most</a></i> output node.

Expects a <b>msg.payload</b> with a string that will be posted to the channel.

### Webhook URL
This can be found on the Incoming WebHooks for the channel of your choice.
### Username
This is the name that will appear above each post to the channel
### Icon Url
This is the emoji that will be dispalyed next to each of the messages in the channel.
this can be a url of your choice, but it must be a full url.
### Destination channel
You can optionally override the destination channel if required - either in the edit dialogue or by setting <b>msg.channel</b>.
### Attachments
You can also create <a href="https://docs.mattermost.com/developer/message-attachments.html" target="_new">Matter Most attachments</a> by adding a <b>msg.attachments</b> property that must be an array. Unset the payload to make it even smaller.

For more information see <i><a href="https://docs.mattermost.com/developer/webhooks-incoming.html" target="_new">Matter Most Incoming Webhooks</a></i>.

## Matter Most Outgoing Webhook
This is the initial fork of <i><a href="https://github.com/yayadrian/node-red-slack" target="_new">yayadrian node-red-slack</a></i>.

it should properly adapt to mattermost, and pass the icon too.
