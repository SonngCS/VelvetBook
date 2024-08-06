export default class VB1BItemSheet extends ItemSheet{
    get template(){
        return `systems/VelvetBook/templates/sheets/${this.item.type}-sheet.html`;
    }
}