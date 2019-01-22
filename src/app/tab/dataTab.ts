
export class dataTab{
    static keys: any[] = [];

    //the name that appears on the tab
    label: String;
    //tabs referenced URL
    link: String;
    //position of the tab in the array (how it will be displayed)
    index: Number;

    constructor(label:String, link:String, tabName: String) {
        this.label = label;
        this.link = link;
        var aux = dataTab.keys.find(k => k.key === tabName);
        if(aux != undefined) {
            aux.lastValue = aux.lastValue + 1;
            this.index = aux.lastValue;
        } else {
            dataTab.keys.push({key: tabName, lastValue: 0 });
            this.index = 0;            
        }
    }

}