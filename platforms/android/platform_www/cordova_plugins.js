cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "pluginId": "cordova-plugin-whitelist",
        "runs": true
    },
    {
        "file": "plugins/phonegap-nfc/www/phonegap-nfc.js",
        "id": "phonegap-nfc.NFC",
        "pluginId": "phonegap-nfc",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-lightSensor/www/light.js",
        "id": "cordova-plugin-lightSensor.light",
        "pluginId": "cordova-plugin-lightSensor",
        "clobbers": [
            "cordova-plugin-lightSensor"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.0",
    "phonegap-nfc": "0.6.6",
    "cordova-plugin-lightSensor": "0.2.1"
}
// BOTTOM OF METADATA
});