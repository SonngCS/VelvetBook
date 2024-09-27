import { v1b1 } from "./module/config.js"
import VB1BItemSheet from "./module/sheets/VB1BItemSheet.js"

Hooks.once("init", function(){
    console.log("vb1b | Initializing Velvet Book system");

    Game.velvetbook = {
        VelvetBookActor,
        VelvetBookItem,
        rollItemMacro,
    };

    CONFIG.v1b1 = v1b1;

    CONFIG.Actor.documentClass = VelvetBookActor;
    CONFIG.Item.documentClass = VelvetBookItem;

    CONFIG.ActiveEffect.legacyTransferral = false;

    actors.unregisterSheet("core", ActorSheet);
    actors.registerSheet("v1b1", V1B1ActorSheet, {makeDefault: true});

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("vb1b", VB1BItemSheet, {makeDefault: true});

    return preloadHandlebarsTemplates();
});

