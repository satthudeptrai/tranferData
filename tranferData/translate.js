const translate = require('translate-google-api');

const trans = async () => {
  const text = await await translate(
    `Cannot be Special Summoned. Requires 3 \"Qli\" Tributes to Normal Summon/Set. If this card is Normal Summoned/Set, it is unaffected by Spell/Trap effects and by activated effects from any monster whose original Level/Rank is lower than this card's current Level. All Special Summoned monsters lose 500 ATK and DEF. Once per turn: You can make your opponent send 1 monster from their hand or their side of the field to the Graveyard (their choice).`,
    { from: 'en', to: 'vi' }
  );
  console.log("text", text)
}

trans()