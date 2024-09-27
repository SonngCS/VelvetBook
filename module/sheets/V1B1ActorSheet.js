export default class VB1BActorSheet extends ActorSheet{
    get template(){
        return `systems/VelvetBook/templates/sheets/${this.actor.type}-sheet.html`;
    }

}