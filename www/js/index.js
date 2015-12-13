/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var current_box=0;
window.current_box=current_box;
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        window.light = cordova.require("cordova-plugin-lightSensor.light");

        app.receivedEvent('deviceready');
        // handle unformatted tags
        // alert('running nfc');
        console.log('NFC',typeof nfc);
        if(typeof nfc!="undefined"){
            nfc.addNdefFormatableListener(

                function (nfcEvent) {
                    alert('nfc event');
                    // NDEF message with one record
                    var message = [
                        ndef.textRecord("hello, world")
                    ];

                    nfc.write(
                        message,
                        function() {
                            alert("Wrote message to tag");
                        },
                        function(error) {
                            alert("Write failed " + JSON.stringify(error));
                        }
                    );
                },
                function () {
                    console.log("Listening for NDEF Formatable Tags");
                },
                function (error) {
                    alert("Failed to add listener for NDEF Formatable Tags");
                }
            );

            // handle NDEF tags
            nfc.addNdefListener(
                function (nfcEvent) {
                    var tag = nfcEvent.tag,
                        ndefMessage = tag.ndefMessage,
                        firstRecord = ndefMessage[0],
                        payload = firstRecord.payload,
                        text;

                    // assume we read a text message with "en" encoding
                    // remove the encoding info and convert to string
                    text = nfc.bytesToString(payload.slice(3));

                    alert(text);
                },
                function () {
                    console.log("Listening for NDEF Tags");
                },
                function (error) {
                    alert("Failed to add listener for NDEF Tags");
                }
            );
            // Read NDEF formatted NFC Tags
            nfc.addNdefListener (
                function (nfcEvent) {
                    var tag = nfcEvent.tag,
                        ndefMessage = tag.ndefMessage;

                    // dump the raw json of the message
                    // note: real code will need to decode
                    // the payload from each record
                    alert(JSON.stringify(ndefMessage));
                    current_box=JSON.stringify(ndefMessage);

                    // assuming the first record in the message has
                    // a payload that can be converted to a string.
                    alert(nfc.bytesToString(ndefMessage[0].payload).substring(3));
                },
                function () { // success callback
                    alert("Waiting for NDEF tag");
                },
                function (error) { // error callback
                    alert("Error adding NDEF listener " + JSON.stringify(error));
                }
            );
        };
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        // console.log(id);
        // if(id=="deviceready")this.onDeviceReady();
        // else{

        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
        // }
    }
};

app.initialize();