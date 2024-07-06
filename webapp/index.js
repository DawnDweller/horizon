sap.ui.define([
    'sap/m/Text',
], (Text) => {
    new Text({
        text: "Hello Mustafa"
    }).placeAt('root');

    const text = new Text ({
        text: "Hello Alican"
    });

    console.log(text, Text);
    text.placeAt("root")

});