import VB1BItemSheet from "./module/sheets/VB1BItemSheet.js"

Hooks.once("init", function(){
    console.log("vb1b | Initializing Velvet Book system");

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("vb1b", VB1BItemSheet, {makeDefault: true});
})

