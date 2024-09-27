export default class VB1BItemSheet extends ItemSheet{
    get template(){
        return `systems/VelvetBook/templates/sheets/${this.item.type}-sheet.html`;
    }

    getData(){
        const data = super.getData();
        data.config = CONFIG.v1b1;

        return data;
    }
}