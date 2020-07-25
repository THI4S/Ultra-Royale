const Command = require('../../command');
const utils = require('../../../utils');
const cardUtils = require('../../../utils/cardUtils');

module.exports = class ChestsData extends Command {
    constructor(device, chest, slotID) {
        super()
        this.code = 393
        if (slotID) {
            this.slotID = slotID
        }
        this.chest = chest
        this.device = device
    }

    encode() {
        switch (this.chest) {
            case 'FreeChest': {
                this.data.writeRrsInt32(1);
                this.data.writeRrsInt32(0);

                let cardsCount = utils.randomInt(1, 7);
                let cards = cardUtils.getCards(cardsCount);
                cards.forEach(card => {
                    let cardCount = utils.randomInt(0, 200);
                    this.data.writeRrsInt32(cardsCount - cards.indexOf(card));// Cards index
                    this.data.writeRrsInt32(cardUtils.SCIDtoInstanceID(card.id));

                    this.data.writeRrsInt32(this.device.player.highID);
                    this.data.writeRrsInt32(this.device.player.lowID);
                    this.data.writeRrsInt32(cardCount);//Card count
                    this.data.writeRrsInt32(0);
                    this.data.writeRrsInt32(0);
                    this.data.writeByte(127);

                    cardUtils.addCardPointsBySCID(this.device, card.id, cardCount);
                });
                this.data.writeRrsInt32(2);
                this.data.writeByte(127);
                this.data.writeRrsInt32(utils.randomInt(10, 100));
                this.data.writeRrsInt32(utils.randomInt(10, 300));
                this.data.writeRrsInt32(6000);// Chest slot

                this.data.writeRrsInt32(14);
                this.data.writeRrsInt32(1);
                this.data.writeByte(127);
                this.data.writeByte(127);
                this.data.writeRrsInt32(0);
                this.data.writeRrsInt32(0);
            }
            break;
            case 'CrownChest': {
                let cardsCount = utils.randomInt(5, 15);
                this.data.writeRrsInt32(1);
                this.data.writeRrsInt32(0);
                
                let cards = cardUtils.getCards(cardsCount);
                cards.forEach(card => {
                    let cardCount = utils.randomInt(0, 500);
                    this.data.writeRrsInt32(cardsCount - cards.indexOf(card));// Cards index
                    this.data.writeRrsInt32(cardUtils.SCIDtoInstanceID(card.id));
        
                    this.data.writeRrsInt32(this.device.player.highID);
                    this.data.writeRrsInt32(this.device.player.lowID);
                    this.data.writeRrsInt32(cardCount);//Card count
                    this.data.writeRrsInt32(0);
                    this.data.writeRrsInt32(0);
                    this.data.writeByte(127);
        
                    cardUtils.addCardPointsBySCID(this.device, card.id, cardCount);
                });
                this.data.writeRrsInt32(2);
                this.data.writeByte(127);
                this.data.writeRrsInt32(utils.randomInt(15, 900));
                this.data.writeRrsInt32(utils.randomInt(15, 900));
                this.data.writeRrsInt32(6008);// Chest slot
        
                this.data.writeRrsInt32(3);
                this.data.writeRrsInt32(1);
                this.data.writeByte(127);
                this.data.writeByte(127);
                this.data.writeRrsInt32(0);
                this.data.writeRrsInt32(0);
            }
            break;
            case 'LegendaryChestSlot': {
                this.data.writeRrsInt32(1);
                this.data.writeRrsInt32(0);

                let cardsCount = 1;
                let cards = cardUtils.getCardsByRarity(cardsCount, 'Legendary');
                cards.forEach(card => {
                    console.log(card)
                    let cardCount = 1;
                    this.data.writeRrsInt32(cardsCount - cards.indexOf(card));// Cards index
                    this.data.writeRrsInt32(cardUtils.SCIDtoInstanceID(card.id));

                    this.data.writeRrsInt32(this.device.player.highID);
                    this.data.writeRrsInt32(this.device.player.lowID);
                    this.data.writeRrsInt32(cardCount);//Card count
                    this.data.writeRrsInt32(0);
                    this.data.writeRrsInt32(0);
                    this.data.writeByte(127);

                    cardUtils.addCardPointsBySCID(this.device, card.id, cardCount);
                });
                this.data.writeRrsInt32(0);
                this.data.writeByte(127);
                this.data.writeRrsInt32(0);
                this.data.writeRrsInt32(0);
                this.data.writeRrsInt32(this.slotID);// Chest slot

                this.data.writeRrsInt32(1);
                this.data.writeRrsInt32(1);// Cards count
                this.data.writeByte(127);
                this.data.writeByte(127);
                this.data.writeRrsInt32(0);
                this.data.writeRrsInt32(0);
            }
            break;
            case 'GeneralSlotChest': {
                this.data.writeRrsInt32(1);
                this.data.writeRrsInt32(0);

                let cardsCount = utils.randomInt(5, 20);
                let cards = cardUtils.getCards(cardsCount);
                cards.forEach(card => {
                    let cardCount = utils.randomInt(0, 1000);
                    this.data.writeRrsInt32(cardsCount - cards.indexOf(card));// Cards index
                    this.data.writeRrsInt32(cardUtils.SCIDtoInstanceID(card.id));

                    this.data.writeRrsInt32(this.device.player.highID);
                    this.data.writeRrsInt32(this.device.player.lowID);
                    this.data.writeRrsInt32(cardCount);//Card count
                    this.data.writeRrsInt32(0);
                    this.data.writeRrsInt32(0);
                    this.data.writeByte(127);

                    cardUtils.addCardPointsBySCID(this.device, card.id, cardCount);
                });
                this.data.writeRrsInt32(2);
                this.data.writeByte(127);
                this.data.writeRrsInt32(utils.randomInt(100, 9000));
                this.data.writeRrsInt32(utils.randomInt(10, 900));
                this.data.writeRrsInt32(this.slotID);// Chest slot

                this.data.writeRrsInt32(1);
                this.data.writeRrsInt32(3);
                this.data.writeByte(127);
                this.data.writeByte(127);
                this.data.writeRrsInt32(0);
                this.data.writeRrsInt32(0);
            }
            break;
        }

    }
}
